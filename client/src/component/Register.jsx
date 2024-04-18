import axios from "axios";
import { useState } from "react";
import "./Signup.css"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            data:{
                name,
                email,
                password
            },
            withCredentials: true,
            url: "http://localhost:8000/register"
        }).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }
    

    return (
        <div className="rmain">
        <h1 style={{textAlign:"center"}}>Create your account</h1>
        <div><label >Name</label><br/>
        <input type="text" name="username" onChange={(e)=>setName(e.target.value)} placeholder="Enter " /></div>
        <div><label >Email</label><br/>
        <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter"/></div>
        <div><label >Password</label><br/>
        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter"/></div>
        <button className="btn" onClick={(e) => handleRegister(e)}>CREATE ACCOUNT</button>
        <p style={{textAlign:"center"}}>Have an Account? <strong className="log" onClick={()=>navigate('/login')} style={{color:"#afc560"}}>LOGIN</strong></p>
        </div>
    );
  }