const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

const URI = process.env.MONGODB_URLSTRING;
const mongoClient = new MongoClient(URI);

module.exports = mongoClient;