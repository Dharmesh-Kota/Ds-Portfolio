const http = require("http");
const port = 8080;
const fs = require("fs");

function requestHandler(req, res){

    console.log(req.url);

    res.writeHead(200, {"content-type" : "text/html/css"});

    fs.readFile("./RESUME.html", function(error, data){
        if(error){
            console.log("Error found ",error);
            return res.end("<h1>Error found, Boss!!</h1>");
        }
        return res.end(data);
    })
    fs.readFile("./RESUME.css", function(error, data){
        if(error){
            console.log("Error found ",error);
            return res.end("<h1>Error found, Boss!!</h1>");
        }
        return res.end(data);
    })
}

const server = http.createServer(requestHandler);

server.listen(port, function(error){
    if(error){
        console.log("Error found ", error);
    } else {
        console.log("Server is running on port ", port);
    }
})