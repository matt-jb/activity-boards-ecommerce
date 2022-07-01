import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/clientAuth";
import { IUserFormData, UserType } from "../utils/types";
import { Spinner } from "../components/atoms";
import { getUserDetails } from "../lib/userControls";

interface IAuthContext {
  user: UserType | null;
  logout: () => Promise<void>;
  updateUserCtx: (details: IUserFormData) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        getUserDetails(user.uid)
          .then((details) => {
            setUser({
              uid: user.uid,
              email: user.email,
              ...details,
            });
          })
          .catch((err) => console.log(err));
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function logout() {
    await signOut(auth);
    setUser(null);
  }

  async function updateUserCtx(details: IUserFormData) {
    setUser({ uid: user!.uid, email: user!.email, ...details });
  }

  return (
    <AuthContext.Provider value={{ user, logout, updateUserCtx }}>
      {loading ? <Spinner /> : children}
    </AuthContext.Provider>
  );
};
