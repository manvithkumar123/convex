import { getFirestore, collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { auth } from "../../../firebaseConfig";  // Make sure this path is correct

const db = getFirestore();

// Function to listen for messages
export const listenForMessages = (callback) => {
  const currentUid = auth.currentUser?.uid;

  if (!currentUid) {
    console.warn("No user logged in.");
    return () => {};  // Return no-op function if no user is logged in
  }

  const q = query(
    collection(db, "messages"),
    where("to", "==", currentUid)
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => doc.data());
    callback(messages);
  });

  return unsubscribe;  // Return unsubscribe function for cleanup
};

// Function to send a message
export const sendMessage = async (receiverId, text) => {
  try {
    await addDoc(collection(db, "messages"), {
      from: auth.currentUser.uid,  // Sender's UID
      to: receiverId,              // Receiver's UID
      text: text,                  // Message content
      timestamp: new Date().toISOString() // Store timestamp as string
    });
    console.log("Message sent!");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};