const express = require('express');
// ルーティング
const router = express.Router();
const request = require('request');
const config = require('../../../config');

// axios を require してインスタンスを生成する
const axiosBase = require('axios');
const axios = axiosBase.create({
  baseURL: 'https://api.trello.com/1/', // バックエンドB のURL:port を指定する
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

router.get('/', function(req, res, next) {
  const url = '/boards/' + config.yourBoard + '/lists/';
  const option = {
    fields: 'name',
    key: config.yourApiKey,
    token: config.oauthToken
  };
  axios
    .get(url, option)
    .then(function(response) {
      callback(response);
    })
    .catch(function(error) {
      console.log('ERROR!! occurred in Backend.');
    });
});

module.exports = router;
