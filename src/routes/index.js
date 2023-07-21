require("express")
const users = require('..components/users/network');
const main = require('../components/main/network');

const routes = (server) => {
        server.use('/users', users);
        server.use('/'), main;
}

module.exports = routes;