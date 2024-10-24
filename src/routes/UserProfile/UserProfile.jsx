import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase"; // Import the Firebase config

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes to the authenticated user
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the user object if logged in
      } else {
        setUser(null); // Clear the user if logged out
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div className="user-profile">
        <p>No user is logged in</p>
      </div>
    );
  }

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