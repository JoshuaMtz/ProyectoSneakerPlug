const config = {

    app: {
        port: process.env.PORT || 3000
    }, 

    db: {
        connectionUrl: process.env.MONGO_URL || 'mongodb://localhost/sneakerplug'
    }
}
//Si no funciona mongo correr el siguiente comando como administrador en la consola
//net start mongodb

module.exports = config;