import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RegularButton } from "../components/atoms";
import { UserDeletion } from "../components/molecules";
import { OrdersList, UserDetailsForm } from "../components/organisms";
import { Layout } from "../components/templates";
import { useAlert } from "../context/AlertContext";
import { useAuth } from "../context/AuthContext";
import { getUserOrders } from "../lib/userControls";
import { IOrder, VisibleAccountViews } from "../utils/types";

export default function Account() {
  const { user, logout } = useAuth();
  const { addAlert } = useAlert();
  const router = useRouter();
  const [visibleView, setVisibleView] = useState<VisibleAccountViews>(null);
  const [orders, setOrders] = useState<IOrder[]>([]);

  function handleView(view: VisibleAccountViews) {
    visibleView === view ? setVisibleView(null) : setVisibleView(view);
  }

  function signOut() {
    logout().then(() => {
      addAlert("success", "Jesteś wylogowany.");
      router.push("/").catch((err) => {
        addAlert("warning", err);
      });
    });
  }

  useEffect(() => {
    getUserOrders(user!.uid)
      .then((orders) => {
        setOrders(orders);
      })
      .catch((err) => {
        addAlert("warning", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Twoje konto">
      <RegularButton
        text="Twoje zakupy"
        blue
        onClick={() => handleView("purchases")}
      />
      {visibleView === "purchases" && <OrdersList orders={orders} />}
      <RegularButton
        text="Twoje dane"
        blue
        onClick={() => handleView("data")}
      />
      {visibleView === "data" && <UserDetailsForm />}
      <RegularButton onClick={() => signOut()} text="Wyloguj" />
      <RegularButton text="Usuń konto" onClick={() => handleView("deletion")} />
      {visibleView === "deletion" && <UserDeletion />}
    </Layout>
  );
}
