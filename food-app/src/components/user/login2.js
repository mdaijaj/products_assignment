
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [credential, setCredential] = useState({ email: "", password: "" });

    const onchangeHandle = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const loginuser = async () => {
        let logindata = await localStorage.getItem('loginInf')
        logindata = JSON.parse(logindata)
        logindata ? navigate('/') : setCredential(credential)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const regiInf = await localStorage.getItem("regiInf")
        console.log("credential", credential)
        let userInfo = JSON.parse(regiInf)

        if (userInfo.email == credential.email && userInfo.password == credential.password) {
            alert("login successfully!")
            localStorage.setItem("loginInf", JSON.stringify(userInfo));
            navigate('/')
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
                            <h2 style={{ textAlign: "center" }}>Login Page</h2>
                            <div className="mb-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-2">
                                        <label for="exampleInputEmail1"
                                            className="form-label">Email address
                                        </label>
                                        <input type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            name="email"
                                            onChange={onchangeHandle}
                                            value={credential.email}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1"
                                            className="form-label">Password
                                        </label>
                                        <input type="password"
                                            className="form-control"
                                            value={credential.password}
                                            onChange={onchangeHandle}
                                            name="password"
                                            id="exampleInputPassword1" />
                                    </div>
                                    <center><button type="submit" className="btn btn-primary" >Submit</button></center>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    )
}

export default Login;