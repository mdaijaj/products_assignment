import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../App.css"

const Navbar = (props) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('loginInf')
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="https://previews.123rf.com/images/martialred/martialred1708/martialred170800094/84587578-new-product-label-seal-sticker-or-burst-flat-vector-icon-for-websites-and-packaging.jpg" style={{ borderRadius: "50%" }} width="100" height="100" className="d-inline-block align-top" alt="image path not found" />
                    </NavLink>
                    Products
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {!localStorage.getItem('loginInf') ?
                            <>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                                    </li>
                                </ul>
                            </>
                            :
                            <>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/products">Products</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                    </li>
                                </ul>

                            </>
                        }

                        {!localStorage.getItem('loginInf') ?
                            <form className='d-flex'>
                                <Link className='btn btn-dark mx-2' to="/signup" role="button">Signup</Link>
                                <Link className='btn btn-dark mx-2' to="/login" role="button">Login</Link>
                            </form>
                            :
                            <>
                                <button onClick={handleLogout} className='btn btn-dark'>Logout</button>
                                <h4 style={{ padding: "20px" }}>{JSON.parse(localStorage.getItem('loginInf')).name}</h4>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar;
