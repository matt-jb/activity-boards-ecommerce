import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../lib/clientAuth";
import { IUserFormData, UserType } from "../utils/types";
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

  async function addToWishList(pid: string) {
    if (!user)
      throw new Error(
        `A user must be logged in when adding an item to the Wish List!`
      );

    const { uid, wishList } = user;
    if (wishList.includes(pid)) return;

    const newWishList = [...wishList, pid];
    const newUserCtx = user;
    newUserCtx.wishList = newWishList;
    await modifyWishList(uid, newWishList);
    setUser(newUserCtx);
  }

  async function removeFromWishList(pid: string) {
    if (!user)
      throw new Error(
        `A user must be logged in when removing an item from the Wish List!`
      );

    const { uid, wishList } = user;
    if (!wishList.includes(pid)) return;

    const newWishList = wishList.filter((product) => product !== pid);
    const newUserCtx = user;
    newUserCtx.wishList = newWishList;
    await modifyWishList(uid, newWishList);
    setUser(newUserCtx);
  }

  async function clearWishList() {
    if (!user)
      throw new Error(
        `A user must be logged in when removing an item from the Wish List!`
      );
    await modifyWishList(user.uid, []);
    const newUserCtx = user;
    newUserCtx.wishList = [];
    setUser(newUserCtx);
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
