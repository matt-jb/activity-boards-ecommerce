import { useRouter } from "next/router";
import { useState } from "react";
import { RegularButton } from "../components/atoms";
import { UserDeletion } from "../components/molecules";
import { UserDetailsForm } from "../components/organisms";
import { Layout } from "../components/templates";
import { useAlert } from "../context/AlertContext";
import { useAuth } from "../context/AuthContext";

export default function Account() {
  const { logout } = useAuth();
  const { addAlert } = useAlert();
  const router = useRouter();
  const [showData, setShowData] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  function signOut() {
    logout().then(() => {
      addAlert("success", "Jesteś wylogowany.");
      router.push("/");
    });
  }

  return (
    <Layout title="Twoje konto">
      <RegularButton
        text="Twoje zamówienia"
        blue
        onClick={() => setShowOrders((prev) => !prev)}
      />
      {/* {showOrders && <OrdersList />} */}
      <RegularButton
        text="Twoje dane"
        blue
        onClick={() => setShowData((prev) => !prev)}
      />
      {showData && <UserDetailsForm />}
      <RegularButton onClick={() => signOut()} text="Wyloguj" />
      <RegularButton
        text="Usuń konto"
        onClick={() => setShowDelete((prev) => !prev)}
      />
      {showDelete && <UserDeletion />}
    </Layout>
  );
}
