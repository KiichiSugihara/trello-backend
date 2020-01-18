const request = require('request');
const config = require('./config');

const options = {
  method: 'GET',
  url: 'https://api.trello.com/1/boards/' + config.yourBoard + '/lists',
  qs: {
    fields: 'name',
    key: config.yourApiKey,
    token: config.oauthToken
  }
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
