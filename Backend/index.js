const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// fake user data (mock authentication)
const users = [
{
email: "test@netflix.com",
password: "123456"
}
];



// login route
app.post("/login",(req,res)=>{

const email = req.body.email;
const password = req.body.password;


// check empty fields
if(!email || !password){
return res.json({
success:false,
message:"Please fill all fields"
});
}


// check credentials
const foundUser = users.find(
(user)=>
user.email === email &&
user.password === password
);


if(foundUser){
res.json({
success:true,
message:"Login successful"
});
}
else{
res.json({
success:false,
message:"Invalid email or password"
});
}

});



app.listen(PORT,()=>{
console.log("Server running on port 5000");
});