var express = require('express');
var app = express();
var port = 5000;

var bigCats = [
    { species: 'Lion' },
    { species: 'Tiger' },
    { species: 'Bear' }
];

// serve static files from public library
app.use(express.static('server/public'));

// routes
app.get('/bigCats', function(req, res){
    res.send(bigCats);
})

// start up the server
app.listen(port, function(){
  console.log('listening on port', port);
});

