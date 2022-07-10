import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../lib/clientAuth";
import { IProduct, IUserFormData, UserType } from "../utils/types";
import { Spinner } from "../components/atoms";
import { getUserDetails, modifyWishList } from "../lib/userControls";

interface IAuthContext {
  user: UserType | null;
  logout: () => Promise<void>;
  updateUserCtx: (details: IUserFormData) => void;
  addToWishList: (pid: string) => void;
  removeFromWishList: (pid: string) => void;
  clearWishList: () => void;
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
      user ? setUserData(user) : setUser(null);
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

  async function setUserData(user: User) {
    getUserDetails(user.uid)
      .then((details) => {
        setUser({
          uid: user.uid,
          email: user.email,
          ...details,
        });
      })
      .catch((err) => console.log(err));
  }

  async function handleWishListUpdate(list: Array<string>) {
    if (!user) throw new Error(`No user logged in!`);

    await modifyWishList(user.uid, list);
    setUser((prev) => {
      if (prev === null) return prev;
      return { ...prev, wishList: list };
    });
  }

  function addToWishList(pid: string) {
    if (!user) throw new Error(`No user logged in!`);

    const i = user.wishList.findIndex((id) => id === pid);
    if (i > -1) return;
    const newWishList = [...user.wishList, pid];
    handleWishListUpdate([...newWishList]);
  }

  function removeFromWishList(pid: string) {
    if (!user) throw new Error(`No user logged in!`);

    const i = user.wishList.findIndex((id) => id === pid);
    if (i === -1) return;
    const newWishList = user.wishList.filter((id) => id !== pid);
    handleWishListUpdate([...newWishList]);
  }

  function clearWishList() {
    handleWishListUpdate([]);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        updateUserCtx,
        addToWishList,
        removeFromWishList,
        clearWishList,
      }}
    >
      {loading ? <Spinner /> : children}
    </AuthContext.Provider>
  );
};
