import { AuthContextProvider } from "./AuthContext";
import { AlertContextProvider } from "./AlertContext";
import { CartContextProvider } from "./CartContext";
import { ProductsContextProvider } from "./ProductsContext";

interface Props {
  children: React.ReactNode;
}

export default function AllContextsWrapper({ children }: Props) {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <AlertContextProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </AlertContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}
