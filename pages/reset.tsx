import { useRouter } from "next/router";
import { Spinner } from "../components/atoms";
import { ResetPassword } from "../components/molecules";
import { Layout } from "../components/templates";
import { useAuth } from "../context/AuthContext";

export default function Reset() {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push("/account");
    return <Spinner />;
  }

  return (
    <Layout title="Zresetuj swoje hasło">
      <ResetPassword />
    </Layout>
  );
}
