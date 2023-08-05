exports.getUsers = (req,res) =>{
    res.send("this router is not!");
}
exports.getErrors = (req,res,next)=>{
    res.send("404!")
 }