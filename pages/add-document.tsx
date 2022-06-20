import React from "react";
import { Layout } from "../components/templates";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../lib/clientAuth";

const dokument = {
  // name: "Samochód",
  // slug: "samochod",
  // price: 159,
  // description:
  //   "Tablica w kształcie samochodu - szeroka i niska, mieszcząca wiele różnych mini-zabaw. Ręcznie malowana, mocna i solidna, a przy okazji ładna. Malowana za pomocą farb wodnych, przeznaczonych do zabawek, bezpieczne w kontakcie. Przy zakupie proszę podać kolor tablicy oraz imię dziecka w wiadomości do sprzedającego.",
  // images: [
  //   "https://firebasestorage.googleapis.com/v0/b/kacik-aktywnosci.appspot.com/o/06-samochod%2F01.jpg?alt=media&token=281ad850-1728-4992-8e85-448d434de1e5",
  //   "https://firebasestorage.googleapis.com/v0/b/kacik-aktywnosci.appspot.com/o/06-samochod%2F02.jpg?alt=media&token=d736b6b8-471d-457e-9a8e-dcdd5a2d6517",
  //   "https://firebasestorage.googleapis.com/v0/b/kacik-aktywnosci.appspot.com/o/06-samochod%2F03.jpg?alt=media&token=e8a86dda-9c2b-4b9e-8bf9-1783087948ae",
  //   "https://firebasestorage.googleapis.com/v0/b/kacik-aktywnosci.appspot.com/o/06-samochod%2F04.jpg?alt=media&token=00151bc7-968b-4b64-94a7-c42db1e0ca66",
  // ],
  // width: 62,
  // height: 31,
};

export default function AddDocument() {
  // const { name, slug, price, description, images, width, height } = dokument;

  function go() {
    // addDoc(collection(db, "activity-boards"), {
    //   name,
    //   slug,
    //   price,
    //   description,
    //   images,
    //   width,
    //   height,
    //   createdAt: Timestamp.fromDate(new Date()),
    // })
    //   .then((docRef) => {
    //     console.log(`Document written with ID: ${docRef.id}`);
    //   })
    //   .catch((err) => {
    //     console.log(`Error writing document: ${err}`);
    //   });
  }

  return (
    <Layout title="Dodaj dokument">
      <button onClick={() => go()}>Dodaj dokument</button>
    </Layout>
  );
}
