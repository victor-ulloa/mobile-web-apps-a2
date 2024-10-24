import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Protected({ children }) {
  const [user, setUser] = useState(null); // State to hold the authenticated user
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        // If there is no authenticated user, redirect to login
        navigate("/login");
      } else {
        // Set the authenticated user in state
        setUser(currentUser);
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [navigate]);

  // Display a loading message while checking authentication status
  if (!user) {
    return <div>Loading...</div>;
  }

  // Render the protected children if the user is authenticated
  return children;
}