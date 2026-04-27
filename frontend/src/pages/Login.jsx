import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");



const handleSubmit = async (e)=>{

e.preventDefault();


// frontend validation
if(email==="" || password===""){
setError("Please fill all fields");
return;
}


try{

const response = await axios.post(
"https://netflix-login-page-clone-2.onrender.com/login",
{
email:email,
password:password
}
);


if(response.data.success){
navigate("/dashboard");
}
else{
setError(response.data.message);
}

}

catch{
setError("Server Error");
}

};



return(

<div className="login-page">

<nav className="navbar">
<h1 className="logo">
NETFLIX
</h1>
</nav>



<div className="login-wrapper">

<div className="login-box">

<h1>Sign In</h1>


<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Email or phone number"
value={email}
onChange={(e)=>
setEmail(e.target.value)
}
/>



<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>
setPassword(e.target.value)
}
/>



{error && (
<p className="error">
{error}
</p>
)}



<button type="submit">
Sign In
</button>



<p className="forgot">
Forgot password?
</p>


<label className="remember">
<input type="checkbox" />
Remember me
</label>


<p className="signup-text">
New to Netflix? Sign up now.
</p>



<p className="demo">
Demo Login:
<br/>
test@netflix.com
<br/>
123456
</p>


</form>

</div>

</div>

</div>

)

}

export default Login;