const app = require('express')();
const data = require('./data');

app.get('/api/products/:id', (req, res) => {
    const product = data.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });




app.get('/api/products',(req,res)=>{    
    res.send(data);
});

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

app.listen(5000, ()=>{
    console.log(`Serve at http://localhost:5000`);
});