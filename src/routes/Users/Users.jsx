import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./Users.css";

export default function Contacts() {
  const [users, setUsers] = useState([]); // State to hold the list of users
  const firestore = getFirestore(); // Initialize Firestore

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch documents from the "users" collection
        const querySnapshot = await getDocs(collection(firestore, "users"));
        // Map through the documents and extract the data
        const usersList = querySnapshot.docs.map(doc => doc.data());
        // Update the state with the list of users
        setUsers(usersList);
      } catch (error) {
        // Log any error that occurs during the fetch
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers(); // Call the function to fetch users
  }, [firestore]);

  return (
    <div className="contacts-list">
      <h2>Users List</h2>
      <ul>
        {users.map((user, index) => (
          // Render each user in a list item
          <li key={index} className={user.email ? 'email' : 'non-email'}>
            {user.displayName || user.email} {/* Display displayName or email */}
          </li>
        ))}
      </ul>
    </div>
  );
}