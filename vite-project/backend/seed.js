const mongoose = require('mongoose');
const Product = require('./models/Product');
const uuid = require('uuid')

let arrofProducts = [
    {
        chipsName:"Lays",
        chipsImg:"https://images.unsplash.com/photo-1576642589592-7d9778a1c9e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5jbGUlMjBjaGlwc3xlbnwwfHwwfHx8MA%3D%3D" ,
        expiry:"24 sep 2023",
        uuid :uuid
    },
    {
        chipsName:"Uncle chips",
        chipsImg:"https://plus.unsplash.com/premium_photo-1672753749156-6281cfeb25f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5jbGUlMjBjaGlwc3xlbnwwfHwwfHx8MA%3D%3D" ,
        expiry:"25 sep 2023",
        uuid :uuid
    },
    {
        chipsName:"chhetos",
        chipsImg:"https://images.unsplash.com/photo-1627662168223-7df99068099a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dW5jbGUlMjBjaGlwc3xlbnwwfHwwfHx8MA%3D%3D" ,
        expiry:"23 sep 2023",
        uuid :uuid
    },
    {
        chipsName:"zorito",
        chipsImg:"https://images.unsplash.com/photo-1599493356626-9fdbdabfd9bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpcHN8ZW58MHx8MHx8fDA%3D" ,
        expiry:"30 sep 2023",
        uuid :uuid
    }

]

async function seedDB(){
    await Product.insertMany(arrofProducts);
    console.log("Data seeded successfully");
}

module.exports = seedDB;