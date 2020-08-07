const {Router} = require('express');
const router = Router();
// Load the MySQL pool connection
const pool = require('../data/config.js');

// Display all persons
router.get('/person', (request, response) => {
    pool.query('SELECT * FROM person', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// Display a single person by ID
router.get('/person/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM persons WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send(result);
    });
});

// Add a new person
router.post('/person', (request, response) => {
    pool.query('INSERT INTO person SET ?', request.body, (error, result) => {
        if (error) throw error;

        response.status(201).send(`Person added with ID: ${result.insertId}`);
    });
});

// Update an existing person
router.put('/person/:id', (request, response) => {
    const id = request.params.id;

    pool.query('UPDATE person SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;

        response.send('Person updated successfully.');
    });
});

// Delete a person
router.delete('/person/:id', (request, response) => {
    const id = request.params.id;

    pool.query('DELETE FROM person WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send('Person deleted.');
    });
});

module.exports = router;