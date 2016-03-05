var express = require('express');

var app = express();

var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

// custom 404 page
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

app.listen(app.get('port'), function(){
  console.log('now listening to port 3000')
});
