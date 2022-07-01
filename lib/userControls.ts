import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { IOrder, IUserFormData } from "../utils/types";
import { db } from "./clientAuth";

export const defaultUserData = {
  fName: "",
  lName: "",
  phoneNumber: "",
  addressL1: "",
  addressL2: "",
  zipCode: "",
  city: "",
};

export async function getUserDetails(id: string) {
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) return userSnap.data() as IUserFormData;

  addUserDataToFirestore(id);
  return defaultUserData;
}

async function addUserDataToFirestore(id: string) {
  setDoc(doc(db, "users", id), defaultUserData)
    .then((docRef) => {
      console.log(docRef);
    })
    .catch((err) => console.log(err));
}

export async function saveUserDetails(id: string, data: IUserFormData) {
  const { fName, lName, phoneNumber, addressL1, addressL2, zipCode, city } =
    data;
  const docRef = await setDoc(doc(db, "users", id), {
    fName,
    lName,
    phoneNumber,
    addressL1,
    addressL2,
    zipCode,
    city,
  });

  return docRef;
}

export async function getUserOrders(id: string) {
  const retreivedOrders: IOrder[] = [];
  const q = query(
    collection(db, "orders"),
    where("createdBy", "==", id),
    where("paid", "==", true)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const singleOrder = { id: doc.id, ...data };
    retreivedOrders.push(singleOrder as IOrder);
  });
  return retreivedOrders;
}
