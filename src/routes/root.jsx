import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import './root.css'; // Import the CSS file for styling

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <div id="sidebar">
        <nav>
          <Link to="contacts">
          Contacts
          </Link>

          {/* Additional buttons can be added here */}
          <button className="nav-button">Button 2</button>
          <button className="nav-button">Button 3</button>
          <button className="nav-button">Button 4</button>
        </nav>
        
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}