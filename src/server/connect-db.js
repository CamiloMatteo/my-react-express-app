/**
 * DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
Got DB function(dbName, options) {
  options = options || {};

  // Default to db from connection string if not provided
  if (!dbName) {
    dbName = this.s.options.dbName;
  }

  // Copy the options and add out internal override of the not shared flag
  const finalOptions = Object.assign({}, this.s.options, options);

  // Do we have the db in the cache already
  if (this.s.dbCache.has(dbName) && finalOptions.returnNonCachedInstance !== true) {
    return this.s.dbCache.get(dbName);
  }

  // Add promiseLibrary
  finalOptions.promiseLibrary = this.s.promiseLibrary;

  // If no topology throw an error message
  if (!this.topology) {
    throw new MongoError('MongoClient must be connected before calling MongoClient.prototype.db');
  }

  // Return the db object
  const db = new Db(dbName, this.topology, finalOptions);

  // Add the db to the cache
  this.s.dbCache.set(dbName, db);
  // Return the database
  return db;
}

 */
import { MongoClient } from 'mongodb';

const url = `mongodb://localhost:27017/myorganizer`;
let db = null;

export async function connectDB() {
    if (db) return db;

    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db;
    console.info("Got DB", db);
    return db;
}

// connectDB();