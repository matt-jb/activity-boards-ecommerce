import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { RegularButton, Spinner } from "../components/atoms";
import { UserDeletion } from "../components/molecules";
import { OrdersList, UserDetailsForm } from "../components/organisms";
import { Layout } from "../components/templates";
import { useAlert } from "../context/AlertContext";
import { useAuth } from "../context/AuthContext";
import { getUserOrders } from "../lib/userControls";
import { IOrder } from "../utils/types";

export default function Account() {
  const { user, logout } = useAuth();
  const { addAlert } = useAlert();
  const router = useRouter();
  const [showData, setShowData] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [orders, setOrders] = useState<IOrder[]>([]);

  function signOut() {
    logout().then(() => {
      addAlert("success", "Jesteś wylogowany.");
      router.push("/");
    });
  }

  // A może jednak ServerSideProps?
  useEffect(() => {
    getUserOrders(user!.uid).then((orders) => {
      setOrders(orders);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Twoje konto">
      <RegularButton
        text="Twoje zakupy"
        blue
        onClick={() => setShowOrders((prev) => !prev)}
      />
      {showOrders && <OrdersList orders={orders} />}
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
