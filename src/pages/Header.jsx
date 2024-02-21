import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth, useauth } from '../context/Auth';

function Header() {

    const [auth, setauth] = useAuth()

    const logout = () => {
        localStorage.removeItem("userlogin")
        setauth({
            ...auth,
            user: null
        })
        toast.success("user Logout Success")
    }



    return (
        <>
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
                        <div className="container-xl">
                            {/* Logo */}
                            <a className="navbar-brand" href="#">
                                <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" className="h-8" alt="..." />
                            </a>
                            {/* Navbar toggle */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            {/* Collapse */}
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                {/* Nav */}
                                <div className="navbar-nav mx-lg-auto">
                                    <Link className="nav-item nav-link active" href="#" aria-current="page" to={"/admin/user"}>Home</Link>
                                    <Link className="nav-item nav-link" href="#" to={"/admin/product"}>Product</Link>
                                    <Link className="nav-item nav-link" href="#" to={"/admin/category"}>Category</Link>
                                    <Link className="nav-item nav-link" href="#" to={"/admin/addcategory"}>Add category</Link>
                                    <Link className="nav-item nav-link" href="#" to={"/admin/products"}>User Product</Link>
                                </div>
                                {
                                    (!auth.user) ? (
                                        <>
                                            {/* Right navigation */}
                                            <div className="navbar-nav ms-lg-4">
                                                <Link to={"/login"} className="nav-item nav-link" href="#">Login</Link>
                                            </div>
                                            {/* Action */}
                                            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                                                <Link to={"/"} className="btn btn-sm btn-primary w-full w-lg-auto">
                                                    Register
                                                </Link>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">

                                                <Link to={"/login"}>
                                                    <button className="btn btn-sm btn-danger ms-2 w-full w-lg-auto" onClick={logout}>Logout </button>
                                                </Link>

                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </nav>
                </div >
            </div >
        </>

    )
}

export default Header