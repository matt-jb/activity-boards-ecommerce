import { useRouter } from "next/router";
import { Spinner } from "../components/atoms";
import { CreateAccount } from "../components/molecules";
import { Layout } from "../components/templates";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push("/account");
    return <Spinner />;
  }

  return (
    <Layout title="Załóż konto">
      <CreateAccount />
    </Layout>
  );
}
