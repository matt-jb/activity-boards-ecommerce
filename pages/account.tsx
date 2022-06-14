import LoginButton from '../components/atoms/LoginButton';
import { Layout } from '../components/templates';
import { useAuth } from '../context/AuthContext';

export default function Account() {
  const { user, logout } = useAuth();

  return (
    <Layout title="Twoje konto">
      <p>Twoje ID: {user.uid}</p>
      <p>Twój adres email: {user.email}</p>
      <LoginButton onClick={() => logout()} text="Wyloguj" />
    </Layout>
  )
}
