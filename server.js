var express = require('express');
var app = express();
var session = require('express-session');
var flash = require('connect-flash');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('./'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.use(session({
	secret: 'secret',
	cookie: { maxAge:60000 },
	resave: false,
	saveUninitialized: false
}));

app.use(flash());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/success', function(req, res) {
	res.render('success');
})

app.post('/otp', function (req, res) {
	var txt1 = req.body.txt1.toString();
	var txt2 = req.body.txt2.toString();
	var txt3 = req.body.txt3.toString();
	var txt4 = req.body.txt4.toString();
	var txt5 = req.body.txt5.toString();
	var txt6 = req.body.txt6.toString();
	var otp = txt1+txt2+txt3+txt4+txt5+txt6;
	// console.log("The otp input is" + otp);
	if (otp == "" || otp.length != 6 || otp%10 == 7 ){
		req.flash('message', 'Verification Failed')
		res.render('index', { message: req.flash('message') } );
	} else {
		res.status(200).redirect('/success');
	}

});
app.listen(3000, function() {
	console.log("First API running on port 3000");
}); 