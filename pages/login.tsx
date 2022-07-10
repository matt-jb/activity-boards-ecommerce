import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RegularButton, Spinner } from "../components/atoms";
import { Layout } from "../components/templates";
import { LoginWithEmail } from "../components/molecules";
import { LoginType } from "../utils/types";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../lib/clientAuth";
import { useAuth } from "../context/AuthContext";
import { useAlert } from "../context/AlertContext";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export default function Login() {
  const [displayLogin, setDisplayLogin] = useState(false);
  const { user } = useAuth();
  const { addAlert } = useAlert();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/account");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loginWithPopup(type: LoginType) {
    const provider = type === "google" ? googleProvider : githubProvider;

    signInWithPopup(auth, provider)
      .then(() => {
        addAlert("success", "Poprawnie zalogowano użytkownika");
        router.push("/");
      })
      .catch((error) => {
        addAlert("warning", error.message);
      });
  }

  return (
    <Layout title={`Zaloguj się`}>
      <RegularButton
        onClick={() => setDisplayLogin((prev) => !prev)}
        text="Zaloguj się przez Email"
      />
      {displayLogin && <LoginWithEmail />}
      <RegularButton
        onClick={() => loginWithPopup("google")}
        text="Zaloguj się przez Google"
      />
      <RegularButton
        onClick={() => loginWithPopup("github")}
        text="Zaloguj się przez GitHub"
      />
    </Layout>
  );
}
