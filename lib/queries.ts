import {
  collection,
  query,
  getDocs,
  DocumentData,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./clientAuth";

export async function getAllProductsQuery() {
  const q = query(collection(db, "activity-boards"));
  const querySnapshot = await getDocs(q);

  const products: DocumentData[] = [];

  querySnapshot.forEach((doc) => {
    const product = doc.data();
    product.id = doc.id;
    products.push(product);
  });

  return JSON.parse(JSON.stringify(products));
}

export async function getSingleProductQuery(id: string) {
  const docRef = doc(db, "activity-boards", id);
  const docSnap = await getDoc(docRef);
  const product = docSnap.data();

  return JSON.parse(JSON.stringify(product));
}
