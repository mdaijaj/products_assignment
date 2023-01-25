import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate()
    const [userInf, setUserInf] = useState({ email: "", message: "", mobile: "", name: "" });

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
        console.log("aijaj", JSON.stringify(userInf))
        console.log("aijaj2", userInf)
        
        if (userInf) {
            alert("user form success!")
            localStorage.setItem("contact", JSON.stringify(userInf));
            navigate('/')
        }
        else {
            alert("valid field")
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
                            <h2 style={{ textAlign: "center" }}>ContactUs Page</h2>
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
                                    <label for="text" className="col-form-label">Message:</label>
                                    <textarea id="message" name="message" rows="4" cols="50" onChange={inputHandle} minLength={10} required/> 

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

export default ContactUs;