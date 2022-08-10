const express = require('express')
// const session
//const exphbs
const allroutes = require('./controllers')
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', allroutes)

sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log('app listening on PORT' + PORT)
    })
})