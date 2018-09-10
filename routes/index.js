var express = require('express');
const { Client } = require('pg');
const { DATABASE_URL } = process.env;

var router = express.Router();

const client = new Client({
  connectionString: DATABASE_URL,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('routing in index');
  res.render('home', {success: false});
});

module.exports = router;
