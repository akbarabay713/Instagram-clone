import {
  addDoc,
  updateDoc,
  doc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

async function handler(req, res) {
  if (req.method === "POST") {
    const { caption, username, profileImg, selectedFile } = req.body;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        caption,
        username,
        profileImg,
        timestamp: serverTimestamp(),
      });

      const imagesRef = ref(storage, `posts/${docRef.id}/images`);
      uploadString(imagesRef, selectedFile, "data_url").then(
        async (snapshot) => {
          console.log("Uploaded a data_url string!");
          const downloadUrl = await getDownloadURL(imagesRef);
          await updateDoc(doc(db, "posts", docRef.id), {
            images: downloadUrl,
          });
          // setLoading(true);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "failed uploading" });
      return;
    }

    res.status(200).json({ message: "success" });
  }
}

export default handler;
