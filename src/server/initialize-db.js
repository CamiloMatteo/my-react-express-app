import { defaultState } from './defaultState';
import { connectDB } from './connect-db';

async function initializeDB() {
    let db = await connectDB();
    console.info("DB content: ", db);
    for (let collectionName in defaultState) {
        let collection = db.collection(collectionName);
        await collection.insertMany(defaultState[collectionName]);
    }
}

initializeDB();