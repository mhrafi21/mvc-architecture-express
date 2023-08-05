const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const usersRoute = require("./routes/users.route")
app.use(express.urlencoded({extended:true}));

app.use(usersRoute);


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

module.exports = app;