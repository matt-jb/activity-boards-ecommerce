import {
  collection,
  query,
  getDocs,
  DocumentData,
  doc,
  getDoc,
  where,
} from "firebase/firestore";
import { IProduct } from "../utils/types";
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

export async function getCategoryQuery(category: string) {
  const q = query(
    collection(db, "activity-boards"),
    where("category", "==", category)
  );
  const querySnapshot = await getDocs(q);

  const arr: IProduct[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    arr.push(data as IProduct);
  });

  const retreivedProducts = JSON.parse(JSON.stringify(arr));
  return retreivedProducts;
}
