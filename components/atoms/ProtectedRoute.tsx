import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

interface Props {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [router, user]);

  return <>{user ? children : null}</>
}

export default ProtectedRoute;