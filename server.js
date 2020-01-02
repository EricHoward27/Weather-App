const express = require('express');
const http = require('http')
const app = express();
const path = require('path');

//static folder
app.use(express.static(path.join(__dirname)));

//Listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started on port ${PORT}'));

