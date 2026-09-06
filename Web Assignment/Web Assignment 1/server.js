const http= require("http")
 const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("hello world")
        res.end()
    }   
    else if(req.url=="/about"){
        res.write("about page")
        res.end()
    }
    else if(req.url=="/contact"){
        res.write("contact page")
        res.end()
    }
    else{
        res.write("404 page not found")
        res.end()
    }
 })
 server.listen(3000,()=>{
    console.log("server is running on port:3000")
 })
