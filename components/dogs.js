const express = require('express');
const db = require('../db');
const router = express.Router();

//  Return all dog information
router.get('/', (req, res) => {
    db.query('SELECT * FROM lampotila').then(results => {
        res.json({ lampotila: results})
    })
    .catch(() => {
        res.sendStatus(500);
    })
});

//  Return information of a single dog
router.get('/id', (req, res) => {
    db.query('SELECT * FROM lampotila where id = ?', [req.params.id])
    .then(results => {
        res.json(results);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
})

/* Create a new dog
    Expects the following data format
    {
        name: string,
        image: string - whole url to image
    }
*/
router.post('/post', (req, res) => {

    db.query('INSERT INTO lampotila (id, Temp) VALUES (?,?)', [req.body.id, req.body.Temp])
    .then(results => {
        console.log(results);
        res.sendStatus(201);
    })
    .catch(() => {
        res.sendStatus(500);
    });

});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM lampotila where id = ?', [req.params.id])
    .then(results => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
})

module.exports = router;
