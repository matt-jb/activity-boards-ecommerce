import React from "react";
import { RegularButton } from "../../atoms";
import { getAuth, deleteUser } from "firebase/auth";
import { useRouter } from "next/router";
import { useAlert } from "../../../context/AlertContext";
import { Warning } from "./UserDeletion.styles";

export default function UserDeletion() {
  const { addAlert } = useAlert();
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;

  async function handleDelete() {
    await deleteUser(user!)
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        addAlert("warning", err);
      });
  }

  return (
    <>
      <Warning>Czy jesteś pewien? Tej akcji nie można cofnąć.</Warning>
      <RegularButton text="Tak, jestem pewien" onClick={() => handleDelete()} />
    </>
  );
}
