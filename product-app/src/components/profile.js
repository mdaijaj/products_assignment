import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Profile=()=>{
    const navigate= useNavigate();
    const [userinf, setUserinf]= useState();

    const userInfo= async ()=>{
        let logindata= await localStorage.getItem('loginInf')
        logindata= JSON.parse(logindata)
        console.log("aijajinf..", logindata)
        !logindata || logindata==null ? navigate('/login') : setUserinf(logindata)
    }

    useEffect(()=>{
        userInfo()
    }, [])
    

    return(
        <>
        <div className="">
        <h1>User Profile</h1>
        {userinf? 
            <>
            {console.log("aijajinf", userinf)}
            <h3>{userinf.name}</h3><br/>
            <p1>{`Mobile No. : ${userinf.mobile}`}</p1><br/>
            <p1>{`Username. : ${userinf.name}`}</p1><br/>
            <p1>{`Email. : ${userinf.email}`}</p1><br/>
            <p1>{`Password. : ${userinf.password}`}</p1><br/>
            </>
        : ""
        }
        </div>
        </>
    )
}

export default Profile;