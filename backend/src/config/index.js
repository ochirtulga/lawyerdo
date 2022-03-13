const dotenv = require('dotenv').config()

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// do some checks here

module.exports = {
    port: parseInt(process.env.PORT, 10),
    api: {
        prefix: '/api'
    },
    path: {
        upload: {
            images: 'assets/pics/'
        }
    },
    databaseURL: process.env.MONGODB_URI,
    jwt: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGORITHM,
}