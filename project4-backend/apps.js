const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./logger/logger');
const validateLoginCredentials = require('./services/loginService');
const registerLoginCredentials = require('./services/registerService')
const { getAccountDetails, createAccountDetails, updateAccountDetails } = require("./services/accountService");
const port = 8080;

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({
    extended: true
}));

app.use(
    (request, response, next) => {
        logger.info("A new request received at " + new Date(Date.now()));
        next();
    }
);

app.use(cors());

app.post('/LoginPage', (request, response) => validateLoginCredentials(request, response));
app.post('/RegisterPage', (request, response) => registerLoginCredentials(request, response));

app.get('/AccountPage', (request, response) =>
    getAccountDetails(request, response));

app.post('/AccountPage', (request, response) =>
    createAccountDetails(request, response));

app.put('/AccountPage', (request, response) =>
    updateAccountDetails(request, response));

app.listen(port,  () => {
    console.log(`Tutorial database connection app listening on port ${port}`);
});