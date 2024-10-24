import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./Users.css";

export default function Contacts() {
  const [users, setUsers] = useState([]);
  const firestore = getFirestore();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        const usersList = querySnapshot.docs.map(doc => doc.data());
        setUsers(usersList);
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
          <li key={index} className={user.email ? 'email' : 'non-email'}>
            {user.displayName || user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}