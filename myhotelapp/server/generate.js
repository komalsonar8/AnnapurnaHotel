// import { commerce, lorem, random } from 'faker';

// var faker = require('faker');
const cors = require('cors');

const server = jsonServer.create()       
        
// Then use it before your routes are set up:
server.use(cors());

var database = { products: []};

for (var i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: '',
    description: '',
    price: i*10,
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: i+2
  });
}

console.log(JSON.stringify(database));