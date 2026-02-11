import { useState } from "react";
import "./Signup.css"
import Snackbar from '@mui/material/Snackbar';
// import 'dotenv/config'
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

export default function Register() {
    const [username, setUserame] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      const handleClick2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen2(false);
      };
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const payload ={
            username,
            email,
            password
        }
        try {
            const res = await fetch(`https://tourminder-backend.onrender.com/signup`,{
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            console.log(data);
            if(data == 'new user signup successfully') {
                handleClick();
                setTimeout(() => {
                  navigate('/login');
                }, 600);
              
            }
            else {
                handleClick2();
            }

        } catch (error) {
            console.log(error);
        }
           
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
        <div>
        <button className="btn" onClick={handleSubmit}>CREATE ACCOUNT</button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Signed in successfully
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert
          onClose={handleClose2}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Please enter vaild credentials !
        </Alert>
      </Snackbar>
        </div>
        <p style={{textAlign:"center"}}>Have an Account? <strong className="log" onClick={()=>navigate('/login')} style={{color:"#afc560"}}>LOGIN</strong></p>
        </div>
    );
  }