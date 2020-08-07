const express = require("express");
const app = express();

// Load the MySQL pool connection
const pool = require('../RestfulApi/data/config.js');

// Display all persons
app.get('/person', (request, response) => {
    pool.query('SELECT * FROM person', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// Display a single person by ID
app.get('/person/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM persons WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send(result);
    });
});

// Add a new person
app.post('/person', (request, response) => {
    pool.query('INSERT INTO person SET ?', request.body, (error, result) => {
        if (error) throw error;

        response.status(201).send(`Person added with ID: ${result.insertId}`);
    });
});

// Update an existing person
app.put('/person/:id', (request, response) => {
    const id = request.params.id;

    pool.query('UPDATE person SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;

        response.send('Person updated successfully.');
    });
});

// Delete a person
app.delete('/person/:id', (request, response) => {
    const id = request.params.id;

    pool.query('DELETE FROM person WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send('Person deleted.');
    });
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});