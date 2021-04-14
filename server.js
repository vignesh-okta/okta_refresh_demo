// const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
// const fs = require('fs');
// const options = {
//   key: fs.readFileSync('./express/private.pem'),
//   cert: fs.readFileSync('./express/cert.pem')
// };

app.use(express.json());
app.use(express.static("express"));

// default URL for website
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/oauth2/callback', function(req,res){
res.sendFile(path.join(__dirname+'/express/callback.html'));
//__dirname : It will resolve to your project folder.
});
// const server = https.createServer(app);
var port = process.env.PORT || 8080;
app.listen(port);
console.debug('Server listening on port '+port);
// https.createServer(options, app).listen(port, function(){
//   console.debug('Server listening on port '+port);
// });

