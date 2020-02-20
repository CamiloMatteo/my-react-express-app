import { MongoClient } from 'mongodb';
import { equal } from 'assert';

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  client.close();
});