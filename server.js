const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const routePath = path.join(__dirname, './src/routes');
fs.readdirSync(routePath).forEach((file) => {
    if(file.endsWith('.js')) {  // Check for .js files
        const route = require(path.join(routePath, file));
        const routeName = '/' + file.replace('.js', '');  // Remove .js extension
        app.use(`/api${routeName}`, route);
    }
});

const notFound = require('./src/middleware/notFound/index');
app.use(notFound);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});