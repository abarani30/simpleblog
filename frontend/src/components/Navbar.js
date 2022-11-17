import Link from "next/link"
import { logout } from "../features/auth/auth"
import { useDispatch, useSelector } from "react-redux"

const Navbar = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const logoutUser = () => {
        dispatch(logout())
        window.location.href = "/login"
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Simple Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto me-4">
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <b> En</b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/profile">En</Link></li>
                                <li><Link className="dropdown-item" href="/">عربي</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <b>{user !== null && user.username}</b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/profile">Profile</Link></li>
                                <li><Link className="dropdown-item" href="/">Favourites</Link></li>
                                <li><Link className="dropdown-item" href="#!" onClick={logoutUser}>Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="btn btn-success btn-sm">Add Post</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar