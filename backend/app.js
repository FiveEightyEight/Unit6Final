const app = require('express')();
const bodyParser = require('body-parser')
const { UserRouter, GenreRouter, ShowRouter } = require('./routes/index');
const cors = require('cors');

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/users', UserRouter);
app.use('/genres', GenreRouter);
app.use('/shows', ShowRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'homebase'
    });
});

app.use((req, res) => {
    res.status(404).json({
        message: '404: page not found'
    });
});

module.exports = {app,}; 