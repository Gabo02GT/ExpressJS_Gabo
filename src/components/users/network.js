const express = require('express');
const Controller = require('./controller');
const { database } = require('../../services/firebase');

const router = express.Router();

function addUsers(req, res, next) {
    const { email, password, displayName } = req.body;
    const { auth } = req;
    Controller.addUsers({ auth, email, password, displayName})
        .then((data) => res.status(201).send(data))
        .cath((error) => res.send(error))
    }

router.post("/", addUsers)

//users

// post
// get
// patch
// put
// delete
