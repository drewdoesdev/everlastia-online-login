const express = require('express');
const mongodb = require('mongodb');
const dbSettings = require('../../../db.settings');

const router = express.Router();

router.get('/:username', async (req, res) => {
    const users = await loadUserCollection();
    try {
        let user = await users.find({username: req.params.username}).toArray();
        if(user.length > 0){
            res.send(user);
        }
        else {
            res.status(600).send("Username or Password was not found");
        }
    }
    catch(e){
        switch(e){
            case e.code == 11000:
                res.status(11000).send("Username already exists")
            default:
                res.status(101).send(e);
        }
    }
});


router.post('/', async (req, res) => {
    const users = await loadUserCollection();
    try {
        await users.insertOne({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            createdAt: new Date()
        });
        res.status(201).send();
    }
    catch(e){
        switch(e){
            case e.code == 11000:
                res.status(11000).send("Username already exists")
            default:
                res.status(101).send(e);
        }
    }
})

router.delete('/:id', async (req, res) => {
    const users = await loadUserCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
})

async function loadUserCollection() {
    const url = dbSettings.url;
    const client = await mongodb.MongoClient.connect
         (url, {
             useNewUrlParse: true
         });

    return client.db('everlastia_db').collection('users');
}

module.exports = router;