const bcrypt = require( 'bcryptjs');

const products = [
    {
        _id: "1",
        name: "Nike Slim Shirt",
        category: 'Shirts',
        image: '../images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality products'
    },
    {
        _id: "2",
        name: "Adidas Slim Shirt",
        category: 'Shirts',
        image: '../images/p2.jpg',
        price: 100,
        countInStock: 20,
        brand: 'Nike',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality products'
    },
    {
        _id: "3",
        name: "Lacoste Free Shirt",
        category: 'Shirts',
        image: '../images/p3.jpg',
        price: 120,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 10,
        description: 'high quality products'
    },
    {
        _id: "4",
        name: "Nike Slim Pants",
        category: 'Pants',
        image: '../images/p4.jpg',
        price: 120,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 17,
        description: 'high quality products'
    },
    {
        _id: "5",
        name: "Puma Slim Pant",
        category: 'Pants',
        image: '../images/p5.jpg',
        price: 65,
        countInStock: 12,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality products'
    },
    {
        _id: "6",
        name: "Adidas Fit Shirt",
        category: 'Pants',
        image: '../images/p6.jpg',
        price: 139,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality products'
    },

]

const users = [
    {
        name: 'vinay',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin : true,

    },
    {
        name: 'John',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin : false,

    },
]

module.exports = products;

module.exports = users;