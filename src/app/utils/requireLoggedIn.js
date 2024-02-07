import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useRequireAuth = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // User is authenticated
        setUser(firebaseUser);
      } else {
        // User is not authenticated
        handleNotAuthenticated(router);
      }
    });

    return () => unsubscribe();
  }, [router]);

  return user; // Return the user object
};

export const handleNotAuthenticated = (router) => {
  router.push('/auth?authType=signin');
};