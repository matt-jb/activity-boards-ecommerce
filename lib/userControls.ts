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
  wishList: [],
};

export async function getUserDetails(uid: string) {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) return userSnap.data() as IUserFormData;

  addUserDataToFirestore(uid);
  return defaultUserData;
}

async function addUserDataToFirestore(uid: string) {
  setDoc(doc(db, "users", uid), defaultUserData)
    .then((docRef) => {
      console.log(docRef);
    })
    .catch((err) => console.log(err));
}

export async function getUserOrders(uid: string) {
  const retreivedOrders: IOrder[] = [];
  const q = query(
    collection(db, "orders"),
    where("createdBy", "==", uid),
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

export async function saveUserDetails(uid: string, data: IUserFormData) {
  const { fName, lName, phoneNumber, addressL1, addressL2, zipCode, city } =
    data;
  const docRef = await setDoc(doc(db, "users", uid), {
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

export async function modifyWishList(uid: string, list: Array<string>) {
  setDoc(doc(db, "users", uid), { wishList: list }, { merge: true }).catch(
    (err) => console.log(err)
  );
}
