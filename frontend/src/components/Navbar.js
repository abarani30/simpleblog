import Link from "next/link"
import { logout } from "../features/auth/auth"
import { useDispatch, useSelector } from "react-redux"

const Navbar = () => {

    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(state => state.auth)
    const logoutUser = () => {
        dispatch(logout())
        window.location.href = "/login"
    }

    const authLinks = (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
                <Link className="nav-link active" href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#!" onClick={logoutUser}>Logout</Link>
            </li>
        </ul>
    )

    return (
        <nav className="navbar navbar-expand-lg bg-body shadow-sm fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">Simple Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : null}
                </div>
            </div>
        </nav>
    )
}

export default Navbar