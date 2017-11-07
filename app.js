let path = require('path');
let express = require('express');

let app = express();

app.use(express.static('public'));

app.use('/pixijs', express.static(path.join(__dirname + '/node_modules/pixi.js/dist/')));
app.use('/materialize-css', express.static(path.join(__dirname + '/node_modules/materialize-css/dist/')));
app.use('/jquery', express.static(path.join(__dirname + '/node_modules/jquery/dist/')));

app.listen(3000, function () {
  console.log('Pong server is listening on port 3000.');
});