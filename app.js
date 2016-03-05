var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.type('text/plain');
  res.send('Welcome to Home Page');
});

app.get('about', function(req, res){
  res.type('text/plain');
  res.send('About Page');
})

// custom 404 page
app.use(function(req, res, next){
  res.status(404);
  res.type('text/plain');
  res.send('Page Not Found.');
});

app.listen(app.get('port'), function(){
  console.log('now listening to port 3000')
})
