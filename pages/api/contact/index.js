import { MongoClient } from 'mongodb';

let client

export async function connectDatabase() {
    const client = await MongoClient.connect(`${process.env.NEXT_PUBLIC_MONGO_DB_HOST}${process.env.NEXT_PUBLIC_MONGO_DB_USERNAME}:${process.env.NEXT_PUBLIC_MONGO_DB_PASS}${process.env.NEXT_PUBLIC_MONGO_DB_HOST_CLUSTER}`)

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
        const allComments = await getAllComments(client, 'contacts')
        console.log("allComments", allComments)
        res.status(200).json({ message: allComments })
    }

    if (req.method === 'POST') {

        const { email, name, message } = req.body


        const newMessage = {
            email, name, message,
        }

        console.log("postBody", req.body)
        console.log("newMessage", newMessage)


        if (!email ||
            !email.includes('@') ||
            !name ||
            name.trim() === "" ||
            !message ||
            message.trim() === "") {
            return res.status(422).json({ error: "invalid input" })
        }

        client = await connectDatabase()
        const result = await insertDocument(client, "contact", newMessage)
        newMessage.id = result.insertedId
       

        console.log("result", result)

        client.close()
        res.status(201).json({ message: result })
    }
}

export default handler