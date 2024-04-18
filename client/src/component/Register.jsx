import { useState } from "react";
import "./Signup.css"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [username, setUserame] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        const payload ={
            username,
            email,
            password
        }
        fetch("http://localhost:4500/signup",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(payload)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            navigate('/login');
    })
        .catch(err=>console.log(err))
    } 
    

    return (
        <div className="rmain">
        <h1 style={{textAlign:"center"}}>Create your account</h1>
        <div><label >Name</label><br/>
        <input className="rinput" type="text" value={username} onChange={(e)=>setUserame(e.target.value)} placeholder="Enter " /></div>
        <div><label >Email</label><br/>
        <input className="rinput" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter"/></div>
        <div><label >Password</label><br/>
        <input className="rinput" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter"/></div>
        <button className="btn" onClick={handleSubmit}>CREATE ACCOUNT</button>
        <p style={{textAlign:"center"}}>Have an Account? <strong className="log" onClick={()=>navigate('/login')} style={{color:"#afc560"}}>LOGIN</strong></p>
        </div>
    );
  }