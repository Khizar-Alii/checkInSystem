import { db } from "../config/firebaseConfig.js";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import moment from "moment"; // Importing moment.js



// this function will get the title and image as a arug and then upload it to the firebase firestore
export const uploadCheckInToFirebase = async ({ title, image }) => {
  try {
    const docID = Date.now().toString();
    const formattedDate = moment().format("Do MMM, YYYY"); 
    
    await setDoc(doc(db, "checkIns", docID), {
      title: title,
      image: image,
      owner: "John Doe", 
      date: formattedDate, 
    });

    return true;
  } catch (error) {
    console.log("Error uploading check-in to Firebase:", error);
    return false;
  }
};




// this function will fetch all the check-ins from the firebase:
export const getAllCheckIns = async () => {
  const db = getFirestore();
  try {

    const checkInsCollection = collection(db, 'checkIns'); 
    
    const snapshot = await getDocs(checkInsCollection);
    
    const checkIns = [];
    snapshot.forEach(doc => {
      checkIns.push({ id: doc.id, ...doc.data() });
    });
    
    return checkIns;
  } catch (error) {
    console.log('Error fetching appointments:', error);
    return [];
  }
};

