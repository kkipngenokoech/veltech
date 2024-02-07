import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useRequireAuth = (avoidRedirect = false) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // User is authenticated
        setUser(firebaseUser);
      } else if (!avoidRedirect) {
        // User is not authenticated and should be redirected
        handleNotAuthenticated(router);
      }
    });

    return () => unsubscribe();
  }, [router, avoidRedirect]);

  return user; // Return the user object
};

export const handleNotAuthenticated = (router) => {
  router.push("/auth?authType=signin");
};
