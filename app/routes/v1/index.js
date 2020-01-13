const express = require('express');
// ルーティング
const router = express.Router();

// http://localhost:3000/api/v1/
router.get('/', function(req, res) {
  res.json({
    message: 'Hello,world'
  });
});

module.exports = router;
