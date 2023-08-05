const path = require("path");
exports.getUsers = (req,res) =>{
    res.send("this router is not!");
}
exports.user = (req,res)=>{
    res.status(300).json({
        messages:"success",
        age:32
    })
}
exports.getForm = (req,res) =>{
    res.sendFile(path.join(__dirname+"/../views/index.html"));
}
exports.getErrors = (req,res,next)=>{
    res.send("404!")
 }