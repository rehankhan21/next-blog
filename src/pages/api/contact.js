import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://asd:Aasdasdo@cluster0.ak2zyln.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: " Could not connect to databse" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "failed to save message" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Succesfully stored message", message: newMessage });
  }
}

export default handler;
