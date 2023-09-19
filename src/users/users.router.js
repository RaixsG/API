const router = require('express').Router();
const usersServices = require('./users.services');

router.get('/users', usersServices.getUsers);

module.exports = router;