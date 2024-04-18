import { useState } from "react"
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
      e.preventDefault()
      const payload ={
          email,
          password
      }
      fetch("http://localhost:4500/login",{
          method: "POST",
          headers:{
              "Content-type":"application/json"
          },
          body: JSON.stringify(payload)
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.username);
          navigate('/home');
      })
      .catch(err=>console.log(err))
  } 
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

console.log("Token:", token);
console.log("Username:", username);
  return (
    <div className="rmain" style={{gap:"20px"}}>
    <h1 style={{textAlign:"center", margin:'0px'}}>Login</h1>
    <h3 style={{textAlign:"center", margin:"0px"}}>Welcome back to Tourminder</h3>
    <p style={{textAlign:"center"}}>The next gen Tour Planner</p>
    <div><label >Email</label><br/>
    <input className="rinput" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"/></div>
    <div><label >Password</label><br/>
    <input className="rinput" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"/></div>
    <button className="btn" type="submit" onClick={handleSubmit}>LOGIN</button>
    <p style={{textAlign:"center"}}> Don't have an Account? <strong className="log" onClick={()=>navigate('/register')} style={{color:"#afc560"}}>SIGN UP</strong></p>
    </div>
  )
}

export default Login