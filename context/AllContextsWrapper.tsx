import { AuthContextProvider } from "./AuthContext";
import { AlertContextProvider } from "./AlertContext";

interface Props {
  children: React.ReactNode
}

export default function AllContextsWrapper({ children }: Props) {
  return (
    <AlertContextProvider>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    </AlertContextProvider>
  )
}
