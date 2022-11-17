//import styles from '../styles/Home.module.css'
import Layout from "../hoc/Layout"
import Posts from "../components/Posts"
import Statistics from "../components/Statistics"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useRouter }  from "next/router"

const Home = () => {

  const router = useRouter()
  const { isAuthenticated } = useSelector(state => state.auth)

  useEffect(() => {
    if (!isAuthenticated) router.push("/login")
    else console.log("Yessss")
  }, [])

  return (
    <Layout title="Home page" content="This is the home page">
      <Posts />
      <Statistics />
    </Layout>
  )
}

export default Home