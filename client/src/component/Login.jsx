import { useState } from "react"
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  return (
    <div className="rmain" style={{gap:"20px"}}>
    <h1 style={{textAlign:"center"}}>Login</h1>
    <h3 style={{textAlign:"center", margin:"0px"}}>Welcome back to Tourminder</h3>
    <p style={{textAlign:"center"}}>The next gen Tour Planner</p>
    <div><label >Email</label><br/>
    <input type="email" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Your Email"/></div>
    <div><label >Password</label><br/>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"/></div>
    <button className="btn">LOGIN</button>
    <p style={{textAlign:"center"}}>Don't have an Account? <strong className="log" onClick={()=>navigate('/register')} style={{color:"#afc560"}}>SIGN UP</strong></p>
    </div>
  )
}

export default Login