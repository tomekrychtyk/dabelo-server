import { MongoClient, ServerApiVersion, Db } from 'mongodb';

export class DatabaseService {
  private dbHandle: Db;

  protected async getDb() {
    if (!this.dbHandle) {
      await this.connect();
    }

    return this.dbHandle;
  }

  private async connect() {
    const { MONGO_DB_PASSWORD, MONGO_DB_USER, MONGO_DB_DATABASE } = process.env;
    const uri = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@dabelodev.idkrnwe.mongodb.net/?retryWrites=true&w=majority&appName=${MONGO_DB_DATABASE}`;

    console.log(uri);

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    try {
      // Connect the client to the server	(optional starting in v4.7)
      const db = await client.connect();
      // Send a ping to confirm a successful connection
      await client.db('admin').command({ ping: 1 });
      console.log(
        'Pinged your deployment. You successfully connected to MongoDB!',
      );
      this.dbHandle = client.db(MONGO_DB_DATABASE);
    } catch (e) {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
}
