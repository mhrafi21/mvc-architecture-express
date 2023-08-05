const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.urlencoded({extended:true}));
const htmlForm =  `

<form>
<input type="text" name="name" placeholder = "Enter Name" />
<input type="number" name="age" placeholder = "Enter Age" />

<button type = "submit" >Save User</button>
</form>

`
const user = [
    {
        name:"Mahdi Hasan Rafi",
        age:21
    },
    {
        name:"Hasan",
        age:32,
    }
]

app.get("/users", (req,res)=>{
    res.send(htmlForm);
})

app.post("/users",()=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const user ={
        name,
        age
    }
    users.push(user)
});


app.get("*", (req,res,next)=>{
   res.send("404!")
});
module.exports = app;