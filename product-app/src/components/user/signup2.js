import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
    const [userInf, setUserInf] = useState({ email: "", password: "", mobile: "", name: "" });

    const inputHandle = (e) => {
        setUserInf({ ...userInf, [e.target.name]: e.target.value })
    }


    const loginuser = async () => {
        let logindata = await localStorage.getItem('loginInf')
        logindata = JSON.parse(logindata)
        logindata ? navigate('/') : setUserInf(userInf)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (userInf) {
            alert("user Register success!")
            localStorage.setItem("regiInf", JSON.stringify(userInf));
            navigate('/login')
        }
        else {
            alert("invalid credential")
        }
    }

    useEffect(() => {
        loginuser()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-6">

                        <div className="main" style={{ textAlign: "left", margin: "auto", padding: "30px 30px", border: "2px solid black", borderRadius: "5px" }}>
                            <h2 style={{ textAlign: "center" }}>Signup Page</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="user-name" className="col-form-label" >Name:</label>
                                    <input type="text" className="form-control" onChange={inputHandle} name="name" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="col-form-label" onChange={inputHandle}>Email:</label>
                                    <input type="email" className="form-control" onChange={inputHandle} name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label for="mobile" className="col-form-label">mobile NO.:</label>
                                    <input type="number" className="form-control" onChange={inputHandle} name="mobile" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="col-form-label">Password:</label>
                                    <input type="password" className="form-control" onChange={inputHandle} name="password" minLength={5} required />
                                </div>
                                <center><button type="submit" className="btn btn-primary" >Submit</button></center>
                            </form>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    )
}

export default Signup;