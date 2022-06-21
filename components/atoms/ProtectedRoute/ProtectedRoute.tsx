import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Spinner } from "../index";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  return <>{user ? children : <Spinner />}</>;
};

export default ProtectedRoute;
