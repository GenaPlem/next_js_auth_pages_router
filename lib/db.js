import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER}.wgb0k.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

export async function connectToDatabase() {
  const client = await MongoClient.connect(connectionString);

  return client;
}
