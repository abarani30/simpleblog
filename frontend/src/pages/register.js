import styles from "../styles/styles.module.scss"
import Link from "next/link"
import Layout from "../hoc/Layout"
import Router from "next/router"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../features/auth/auth"

const Register = () => {

    const dispatch = useDispatch()
    const { registered, error, loading } = useSelector(state => state.auth)

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        dispatch(register(formData))
    }

    if (registered) Router.push("/login")

    return (
       <Layout title="Register Page" content="This is the register page">
            <div className="d-flex justify-content-center align-items-center w-100 vh-100 p-2" id={styles.wrapper}>
                <div className="p-3" id={styles.loginContainer}>
                    <p className="py-2" id={styles.loginLabel}>
                        Register
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
                                    required
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <label className="form-label">Email:</label>
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="john.doe@outlook.com" 
                                    className="form-control" 
                                    required
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                        <div>
                            <p>Have account? <Link className={styles.link} href="/login">Login</Link></p>
                        </div>

                        {error ? (
                            <div className="mt-2 mb-1">
                                <div class="alert alert-danger p-2" role="alert">
                                    {error}
                                </div>
                            </div>
                        ): null}

                        <div>
                            {loading ? (
                                <button 
                                    className="btn btn-success w-100 fw-bold" 
                                    type="submit" 
                                    name="loginBtn"
                                    disabled>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Register
                                </button>
                            ) : (
                                <button 
                                    className="btn btn-success w-100" 
                                    type="submit" 
                                    name="loginBtn">
                                    Register
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
       </Layout>
    )
}

export default Register