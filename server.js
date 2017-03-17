const express    = require('express');
const app        = express();
const {Router} = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const api = require('./api');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API Routes //

const router = express.Router();

router.route('/users')
.post((req, res) => {
api.users.create(req, res);
})



app.use('/api', router);
app.use(express.static('build'));
app.get('/' , (req,res) => {
	res.sendFile(`${process.cwd()}/build/index.html`)
});

app.listen(8081, (err) => {
  console.log('Server runngin on port 8081');
});