const express = require('express');
const router = express.Router();
const { validate } = require('../helpers/helpers');
const { userData, userFields } = require('../helpers/constants');

/* GET users listing. */
router.get('/', function(req, res, next) {
    return res.send(userData);
});

router.get('/:id',  (req, res) => {
    const { id } = req.params;
    const data = userData.find(el => el.id === parseInt(id, 10));
    if (!data) {
        return res.status(404).send('user not found')
    }
    return res.send(data)
});

router.post('/', (req, res) => {
    const data = req.body;
    const { isValid, errorMessage } = validate(data, userFields);

    if (!isValid && errorMessage.length > 0) {
        return res.status(400).send(errorMessage);
    }

    const index = userData.length;
    const newId = userData[index - 1].id + 1;
    const newUser = {...data, id: newId};
    userData.push(newUser);
    return res.send(newUser);
});

router.put('/' , (req, res) => {
    const data = req.body;
    const { isValid, errorMessage } = validate(data, userFields);
    if (!isValid && errorMessage.length > 0) {
        return res.status(400).send(errorMessage);
    }

    const userToUpdate = userData.find(el => el.id === parseInt(data.id, 10));

    if (!userToUpdate) {
        return res.status(404).send('user not found')
    }

    userToUpdate.name = data.name;
    userToUpdate.address = data.address;
    userToUpdate.orders = data.orders;
    return res.send(userToUpdate)
});

module.exports = router;
