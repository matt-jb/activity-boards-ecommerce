import { useRouter } from "next/router";
import { LoginButton } from "../components/atoms";
import { Layout } from "../components/templates";
import { useAlert } from "../context/AlertContext";
import { useAuth } from "../context/AuthContext";

export default function Account() {
  const { user, logout } = useAuth();
  const { addAlert } = useAlert();
  const router = useRouter();

  function signOut() {
    logout().then(() => {
      addAlert("success", "Jesteś wylogowany.");
      router.push("/");
    });
  }

  return (
    <Layout title="Twoje konto">
      <p>Twoje ID: {user?.uid}</p>
      <p>Twój adres email: {user?.email}</p>
      <LoginButton onClick={() => signOut()} text="Wyloguj" />
    </Layout>
  );
}
