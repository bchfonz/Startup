const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv')
const uuid = require('uuid')
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
const userCollection = client.db('startup').collection('user');




function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}
function addEvents(event) {
  eventCollection.insertOne(event);
}

function getEvents() {
  const query = {};
  // const options = {
  //   sort: {event: -1},
  //   // limit: 10,
  // };
  const cursor = eventCollection.find(query);
  return cursor.toArray();
}

module.exports = {
  addEvents, 
  getEvents, 
  getUser, 
  getUserByToken, 
  createUser
};
