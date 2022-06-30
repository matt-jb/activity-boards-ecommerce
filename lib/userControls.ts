import { doc, getDoc } from "firebase/firestore";
import { IUserFormData } from "../utils/types";
import { db } from "./clientAuth";

export async function getUserDetails(id: string) {
  const defaultValues = {
    fName: "",
    lName: "",
    phoneNumber: "",
    addressL1: "",
    addressL2: "",
    zipCode: "",
    city: "",
  };

  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) return userSnap.data() as IUserFormData;
  return defaultValues;
}
