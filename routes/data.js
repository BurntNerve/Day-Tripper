
var express = require('express');
var router = express.Router();

const yelp = require('yelp-fusion');
const clientId = 'zWM7p6Q2220lLqmTUE1jyg';
const clientSecret = 'pMjDZTGKtSBgfxmEzZgTTX3pVUSjTcrahyZXufTrURzgEfUAJM8kI47cW9kHSGqo';
const token = 'vhc3LfRXOJRwg94PSimh1QwIoMnQBI7Ylqol4bdKUXVL-FV-mYwlHF4SbnUGO29CEIlp4yfe6skkxK-ojieYzsaEFBJ9_mUTXgQaR-G6LFTmqbtlTpgsflqGW99KWXYx';

const client = yelp.client(token);

/*myMiddlewareFunc = (req, res, next) => {
  console.log("We ran baby!");
  if(req.body.term === "food") {
  } else {
    next();
  }
}*/

router.use(myMiddlewareFunc);

router.post('/', function(req, res, next) {
    client.search({
        term: req.body.term,
        location: req.body.location,
        limit: req.body.limit
    }).then(response => {
        const firstResult = response.jsonBody.businesses;
        res.json(firstResult);
    }).catch(e => {
        console.log(e);
    });
});

module.exports = router;
