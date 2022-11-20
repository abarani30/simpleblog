import cookie from "cookie"
import { useEffect } from "react"
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
           <section className="fs-5 lh-lg">My name is <b>{user != null && user.username}</b>
           , my email is <b>{user != null && user.email}</b>
           , and I had joined on <b>{user != null && user.date_joined}</b>
           </section>
        </Layout>
    )
}

export default Profile
