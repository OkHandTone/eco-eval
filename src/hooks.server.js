import { start_mongo } from './db/mongo';

start_mongo().then(() => {
    console.log('Connected to MongoDB');
}).catch((e => console.log('Failed to connect to MongoDB:', e)));
