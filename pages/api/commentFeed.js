import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../firebase";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, comment, email, photo,id } = req.body;

    try {
      await addDoc(collection(db, "posts", id, "comments"), {
        comment,
        timestamp: serverTimestamp(),
        email,
        username,
        photo,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
      return;
    }
  }
  res.status(200).json({ message: "succesfully on commenting" });
}
