const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');

const initPassport = require('../../passport-config');
initPassword(passport);
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await loadUserCollection();
    res.send(await users.find({}).toArray());
});

router.post('/', async (req, res) => {
    const users = await loadUserCollection();
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    await users.insertOne({
        username: req.body.username,
        password: hashedPass,
        email: req.body.email,
        createdAt: new Date()
    });
    res.status(201).send();
})

router.delete('/:id', async (req, res) => {
    const users = await loadUserCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
})

async function loadUserCollection() {
    const client = await mongodb.MongoClient.connect
         ('mongodb+srv://the12ofSpades:0eEKFkzEPrVqySOX@cluster0-cnnhf.mongodb.net/test?retryWrites=true&w=majority', {
             useNewUrlParse: true
         });

    return client.db('everlastia_db').collection('users');
}

module.exports = router;