import { useState } from "react"
import "./Signup.css";
// import 'dotenv/config'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
   
    e.preventDefault()
    const payload = {
      email,
      password
    }
   
     try {
      const res = await fetch(`https://tourminder-backend.onrender.com/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      console.log(data);
     
      if(data.message == "user login successful") {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.email);
        handleClick();
        setTimeout(() => {
          navigate('/home');
        }, 600);
      
      } else {
        handleClick2();
        setEmail('');
        setPassword('');
        // alert(data.err);
      }

     } catch (error) {
      console.log(error);
      
     }
    
  }
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  console.log("Token:", token);
  console.log("Username:", username);
  return (
    <div className="rmain" style={{ gap: "20px" }}>
      <h1 style={{ textAlign: "center", margin: '0px' }}>Login</h1>
      <h3 style={{ textAlign: "center", margin: "0px" }}>Welcome back to Tourminder</h3>
      <p style={{ textAlign: "center" }}>The next gen Tour Planner</p>
      <div><label >Email</label><br />
        <input className="rinput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" /></div>
      <div><label >Password</label><br />
        <input className="rinput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" /></div>
      <div>
      <button className="btn" type="submit" onClick={handleSubmit}>LOGIN</button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Logged in successfully
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert
          onClose={handleClose2}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Invalid credentials, Please try again !
        </Alert>
      </Snackbar>
      </div>
      <p style={{ textAlign: "center" }}> Don't have an Account? <strong className="log" onClick={() => navigate('/register')} style={{ color: "#afc560" }}>SIGN UP</strong></p>
    </div>
  )
}

export default Login