import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function UserProfile() {
  const [user, setUser] = useState(null); // State to hold the current user

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Set the user state if there is a current user
        setUser(currentUser);
      } else {
        // Clear the user state if there is no current user
        setUser(null);
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  // Render a message if no user is logged in
  if (!user) {
    return (
      <div className="user-profile">
        <p>No user is logged in</p>
      </div>
    );
  }

  // Render the user's information if logged in
  return (
    <div className="user-profile">
      <h2>User Information</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>UID:</strong> {user.uid}</p>
      <p><strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}</p>
      <p><strong>Last Login:</strong> {user.metadata.lastSignInTime}</p>
    </div>
  );
}