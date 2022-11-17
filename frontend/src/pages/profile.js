import { useEffect } from "react"
import { useSelector } from "react-redux"
import Layout from "../hoc/Layout"
import { useRouter } from "next/router"

const Profile = () => {

    const { isAuthenticated, user } = useSelector(state => state.auth)
    const router = useRouter()

    useEffect(() => {
      if (!isAuthenticated) router.push("/login")
    },[isAuthenticated])
    
    return (
        <Layout title="Profile" content="The user profile page">
            <div className="col-md-12 px-4">
                <ul>
                    <li className="pt-1"><b>Username:</b> {user !== null && user.username}</li>
                    <li className="pt-1"><b>Email:</b> {user !== null && user.email}</li>
                    <li className="pt-1"><b>Date Joined:</b> {user !== null && user.date_joined}</li>
                    <li className="pt-1"><b>No. of Posts:</b> 15</li>
                    <li className="pt-1"><b>No. of Likes:</b> 10</li>
                </ul>
            </div>
        </Layout>
    )
}

export default Profile