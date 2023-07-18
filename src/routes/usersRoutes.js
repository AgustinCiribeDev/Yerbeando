const express = require('express');
const router = express.Router();
const usersControllers = require('./../controllers/usersControllers');

router.get('/register', usersControllers.register);

router.get('/login', usersControllers.login);

module.exports = router;