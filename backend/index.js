const {app, } = require('./app');
const port =  process.env.PORT || 5880;

app.listen(port, _=>{
    console.log(`Listening on port: ${port}`);
});