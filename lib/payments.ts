import {
  addDoc,
  collection,
  doc,
  DocumentData,
  DocumentReference,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./clientAuth";
import { ICartItem, IPaymentFormData, UserType } from "../utils/types";
import { getGrandTotal } from "../utils/utils";

export async function createOrder(
  state: Array<ICartItem>,
  values: IPaymentFormData,
  user?: UserType
): Promise<DocumentReference<DocumentData>> {
  const {
    fName,
    lName,
    phoneNumber,
    addressL1,
    addressL2,
    zipCode,
    city,
    notes,
  } = values;

  const docRef = await addDoc(collection(db, "orders"), {
    order: state,
    total: getGrandTotal(state),
    fName,
    lName,
    phoneNumber,
    addressL1,
    addressL2,
    zipCode,
    city,
    notes,
    paid: false,
    createdBy: user?.uid || "anonymous",
    createdAt: Timestamp.fromDate(new Date()),
  });

  return docRef;
}

export async function createPaymentIntent(amount: number) {
  const res = await fetch("/api/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  return res;
}

export async function markPaid(order: string) {
  const orderRef = doc(db, "orders", `${order}`);
  await updateDoc(orderRef, {
    paid: true,
  });
}
