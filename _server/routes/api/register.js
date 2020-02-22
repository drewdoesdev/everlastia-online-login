const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const users = await loadUserCollection();
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        await users.insertOne({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            createdAt: new Date()
        });
        res.status(201).send();
    }
    catch {

    }
})