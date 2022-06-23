import { AuthContextProvider } from "./AuthContext";
import { AlertContextProvider } from "./AlertContext";
import { CartContextProvider } from "./CartContext";

interface Props {
  children: React.ReactNode;
}

export default function AllContextsWrapper({ children }: Props) {
  return (
    <CartContextProvider>
      <AlertContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </AlertContextProvider>
    </CartContextProvider>
  );
}
