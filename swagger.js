const swaggerAutogen = require('swagger-autogen')()

const outputFile = 'swagger_output.json'
const endpointsFiles = ['./src/routes/route.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./src/index.js')
})