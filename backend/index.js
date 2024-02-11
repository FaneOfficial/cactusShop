require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors()); // cors
app.use(express.json());// json
app.use(express.static(path.resolve(__dirname, 'static'))) // statica
app.use(fileUpload({})); // files
app.use('/api', router); // router

app.use(errorHandler); // Middleware

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};


start();
