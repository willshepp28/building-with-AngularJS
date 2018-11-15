const express = require("express");
application = express();
const path = require("path");

application.use(express.static("training-app2", { redirect: false}));


// application.get("*", function(request, response) {
//     response.sendFile(path.join(__dirname + "/"));
// });
application.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
application.listen(8080);

console.log("Server listening");