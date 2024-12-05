// Solution: Always check for existence before accessing

import { doc, getDoc, getFirestore } from 'firebase/firestore';

async function getData(docPath) {
  const db = getFirestore();
  const docRef = doc(db, docPath);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('Document does not exist!');
      return null; // Or handle the absence appropriately
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return null;
  }
}

// Example usage:
getData('someCollection/someDocument').then(data => console.log(data));