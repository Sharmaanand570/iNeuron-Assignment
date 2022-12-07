const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

app.use(bodyParser.json());


mongoose.connect("mongodb+srv://radon-AnandSharma:Anand570@cluster0.riu1k.mongodb.net/iNeuron-Assignment-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.listen(3000, function () {
    console.log('Express app running on port ' + 3000)
});