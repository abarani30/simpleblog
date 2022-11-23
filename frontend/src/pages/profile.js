import { useSelector } from "react-redux"
import Layout from "../hoc/Layout"
import { useRouter } from "next/router"

const Profile = () => {

    const { isAuthenticated, user } = useSelector(state => state.auth)
    const router = useRouter()

    if (typeof window !== "undefined" && !isAuthenticated) {
        router.push("/login")
    }

    if (typeof window !== "undefined" && isAuthenticated) {
        localStorage.setItem("page", "profile")
    }
    
    return (
        <Layout title="Profile" content="The user profile page">
            <div class="container rounded mt-0 mb-5">
                <div class="row d-flex justify-content-center align-items-center">
                   
                    <div class="col-md-4 picture-side">
                        <div class="d-flex flex-column align-items-center text-center p-0">
                            <img class="rounded-circle mt-5" width="150px" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" />
                            <h5 class="mt-3">{user !== null && user.username}</h5>
                            <span class="text-black-50">{user !== null && user.email}</span>
                            <span> </span>
                        </div>
                    </div>

                    <div class="col-md-6 border-right">
                        <div class="p-0">
                           
                            <div class="row mt-4">
                                <div class="col-md-6"><label class="form-label">Username:</label><input type="text" class="form-control" placeholder="John Doe" value={user !== null ? user.username : ""} /></div>
                                <div class="col-md-6"><label class="form-label">Email:</label><input type="text" class="form-control" value={user !== null ? user.email : ""} placeholder="john.doe@gmail.com" /></div>
                            </div>
                           
                            <div class="row mt-3">
                                <div class="col-md-12 mb-3"><label class="form-label">Bio:</label><textarea class="form-control" rows="3" placeholder="Enter your bio"></textarea></div>
                                <div class="col-md-12"><label class="form-label">Address:</label><input type="text" class="form-control" placeholder="enter address line 1" value="" /></div>
                            </div>
                           
                            <div class="mt-5 text-center"><button class="btn btn-primary btn-sm w-100" type="button">Update</button></div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile
