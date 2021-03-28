const express = require('express');
const config = require('config');

const server = express();

server.use(express.json());

server.use('/api/search', require('./routes/search.routes'));

const PORT = config.get('port') || 5000;
server.listen(PORT, () => console.log('App has been started on the port:', PORT));
