const express = require('express');
const router = express.Router();

const restfuRouter = require('./restfuRouter');
const controllers = require('../controllers');

for (let path in controllers){
    router.use(`/${path}`,restfuRouter(controllers[path]))
}

module.exports = router;