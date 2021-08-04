"use strict"
const express = require('express');
const app = express();
const path = require('path');

// To serve the static files
app.use(express.static(path.join(__dirname, '/pub')))

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})