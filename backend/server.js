const app = require('express')();
const data = require('./data');


app.get('/api/products',(req,res)=>{
    console.log(data);
    debugger;
    res.send(data);
});

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

// const port = process.env.PORT || 5000;
app.listen(5000, ()=>{
    console.log(`Serve at http://localhost:5000`);
});