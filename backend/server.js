const app = require('express')();
const data = require('./data');


app.get('/api/products',(req,res)=>{    
    res.send(data);
});

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

app.listen(5000, ()=>{
    console.log(`Serve at http://localhost:5000`);
});