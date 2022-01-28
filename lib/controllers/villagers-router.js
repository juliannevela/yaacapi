const { Router } = require('express');

module.exports = Router().get('/', (req, res, next) => {
    try {
        res.send('Hello from the villagers router!');
    } catch (err) {
        console.log('Error in villagers-router.js: ', err);
        next(err);
    }
});
