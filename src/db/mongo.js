import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';
import { DB_NAME } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);

export function start_mongo() {
    console.log('Connecting to MongoDB...');
    return client.connect();
}

export default client.db(DB_NAME);
