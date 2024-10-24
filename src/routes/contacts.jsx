import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Import Firestore functions

export default function Contacts() {
  const [users, setUsers] = useState([]);
  const firestore = getFirestore(); // Initialize Firestore

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        const usersList = querySnapshot.docs.map(doc => doc.data()); // Extract the data from each document
        setUsers(usersList); // Store the users in state
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, [firestore]);

  return (
    <div className="contacts-list">
      <h2>Users List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.displayName || user.email} {/* Display either the displayName or email */}
          </li>
        ))}
      </ul>
    </div>
  );
}