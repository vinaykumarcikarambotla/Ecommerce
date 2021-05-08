const express = require('express');
const expressAsyncHandler = require( 'express-async-handler');
const data = require('../data.js');
const User = require('../models/userModel.js');

const userRouter = express.Router();

userRouter.get('/seed', async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
});


module.exports = userRouter;
// export default userRouter;