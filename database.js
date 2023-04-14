const {MongoClient} = require('mongodb');
const dotenv = require("dotenv")
dotenv.config();
const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}/`;

const client = new MongoClient(url);
const eventCollection = client.db('startup').collection('events');

function addEvents(event) {
  eventCollection.insertOne(event);
}

function getEvents() {
  const query = {event: {$gt: 0}};
  const options = {
    sort: {event: -1},
    // limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {addEvents, getEvents};
