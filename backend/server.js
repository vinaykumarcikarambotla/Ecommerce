const app = require('express')();
const mongoose = require('mongoose');
const data = require('./data');
const userRouter = require('./routers/userRouter.js');


mongoose.connect('mongodb://localhost/amazona',{
  useNewUrlParser:true,
  useUnifiedTopology : true,
  useCreateIndex :  true,
});

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

app.use('/api/users', userRouter);

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

app.listen(5000, ()=>{
    console.log(`Serve at http://localhost:5000`);
});