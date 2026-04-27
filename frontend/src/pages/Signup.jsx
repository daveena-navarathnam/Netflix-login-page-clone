import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [confirm,setConfirm] = useState("");
const [error,setError] = useState("");

const handleSignup = (e)=>{
e.preventDefault();

if(
!email ||
!password ||
!confirm
){
setError("Fill all fields");
return;
}

if(password !== confirm){
setError("Passwords do not match");
return;
}


/* mock signup success */
alert("Account created successfully");

navigate("/dashboard");

};



return(

<div className="signup-page">

<header className="navbar">
<h1 className="logo">
NETFLIX
</h1>
</header>


<div className="signup-wrapper">

<div className="signup-box">

<h1>Create Account</h1>

<p className="subtitle">
Unlimited movies, TV shows and more.
</p>


<form onSubmit={handleSignup}>


<div className="input-group">
<input
type="email"
required
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<label>Email</label>
</div>


<div className="input-group">
<input
type="password"
required
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<label>Password</label>
</div>


<div className="input-group">
<input
type="password"
required
value={confirm}
onChange={(e)=>setConfirm(e.target.value)}
/>
<label>Confirm Password</label>
</div>


{error && (
<p className="error">
{error}
</p>
)}


<button type="submit">
Sign Up
</button>

</form>


<p className="signin-link">
Already have an account?
<span
onClick={()=>navigate("/")}
>
 Sign In
</span>
</p>


</div>

</div>

</div>

)

}

export default Signup;