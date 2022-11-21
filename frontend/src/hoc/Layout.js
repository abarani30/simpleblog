import Navbar from "../components/Navbar"
import Head from "next/head"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkAuth } from "../features/auth/auth"
import { useRouter } from "next/router"

const Layout = ({ children, title, content }) => {

    
    const dispatch = useDispatch()
    const router = useRouter()
    const { isAuthenticated } = useSelector(state => state.auth)


    useEffect(() => {
        dispatch(checkAuth())
    }, [dispatch])

    return (
        <>  
            <Head>
                <meta name="description" content={content} />
                <title>{title}</title>
            </Head>
            {isAuthenticated ? <Navbar /> : null}
            <main className="container">
                { children }
            </main>
        </>
    )
}

export default Layout