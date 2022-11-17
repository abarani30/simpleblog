import Link from "next/link"
import styles from "../styles/styles.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { login } from "../features/auth/auth"
import Layout from "../hoc/Layout"

const Login = () => {

    const [formData, setFormData] = useState({
        "username": "",
        "password": ""
    })
    const dispatch = useDispatch()
    const router = useRouter()
    const { loading, error, isAuthenticated } = useSelector(state => state.auth)

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    const onSubmit = e => {
        e.preventDefault()
        dispatch(login(formData))
    }

    if (isAuthenticated) router.push("/")

    //useEffect(() => {
    //    if (isAuthenticated) router.push("/")
    //}, [isAuthenticated])

    return (
       <Layout title="Login Page" content="This is the login page">
            <div className="d-flex justify-content-center align-items-center w-100 vh-100 p-2" id={styles.wrapper}>
                <div className="p-3" id={styles.loginContainer}>
                    <p className="py-2" id={styles.loginLabel}>
                        Login
                    </p>
                    <form className="row px-3 g-3" id={styles.loginForm} onSubmit={onSubmit}>
                        <div className="col-md-12">
                            <label className="form-label">Username:</label>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="John Doe" 
                                    className="form-control" 
                                    id="username"
                                    required
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                
                        <div className="col-md-12">
                            <label className="form-label">Password:</label>
                            <div className="input-group">
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="******" 
                                    className="form-control" 
                                    id="password"
                                    required
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                        <div>
                            <p>No account? <Link className={styles.link} href="/register">Create one!</Link></p>
                        </div>

                        {error ? (
                            <div className="mt-2 mb-1">
                                <div className="alert alert-danger p-2" role="alert">
                                    {error}
                                </div>
                            </div>
                        ): null}

                        <div>
                            {loading ? (
                                <button 
                                    className="btn btn-primary w-100 fw-bold" 
                                    type="submit" 
                                    name="loginBtn"
                                    disabled>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Login
                                </button>
                            ) : (
                                <button 
                                    className="btn btn-primary w-100" 
                                    type="submit" 
                                    name="loginBtn">
                                    Login
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
       </Layout>
    )
}

export default Login