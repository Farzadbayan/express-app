var express = require('express');
var quotes = require('./lib/quotes.js');

var app = express();

var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test == '1';
    next();
});

app.get('/', function(req, res){
  res.render('home', {quote: quotes.getQuote()});
});

app.get('/about', function(req, res){
  res.render('about', {pageTestScript: '/qa/tests-about.js'}
);
});

// custom 404 page
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

app.listen(app.get('port'), function(){
  console.log('now listening to port 3000')
});
