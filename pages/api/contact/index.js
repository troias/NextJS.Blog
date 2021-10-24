import { MongoClient } from 'mongodb';

const connectionString = `${process.env.MONGO_DB_HOST}${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASS}${process.env.MONGO_DB_HOST_CLUSTER}`

let client 

export async function connectDatabase() {
    const client = await MongoClient.connect(connectionString)

    return client;
}

export async function getAllComments(client, collection, sort, filter) {
    const db = client.db();

    const documents = await db.collection(collection).find(filter).sort(sort).toArray();

    return documents;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();

    const result = await db.collection(collection).insertOne(document);
   
    return result;
}


const handler = async (req, res) => {



    if (req.method === 'GET') {
        client = await connectDatabase()
        const allComments = await getAllComments(client, 'comment')
        res.status(200).json({ message: allComments })
    }

    if (req.method === 'POST') {

        const { email, name, message } = req.body


        const newMessage = {
            email, name, message,
        }

       


        if (!email ||
            !email.includes('@') ||
            !name ||
            name.trim() === "" ||
            !message ||
            message.trim() === "") {
            return res.status(422).json({ error: "invalid input" })
        }

        client = await connectDatabase()
        const result = await insertDocument(client, 'comment', newMessage)
        newMessage.id = result.insertedId
       
        const res = result.json()
       console.log("res", res)

        client.close()
        res.status(201).json({ message: result })
    }
}

export default handler