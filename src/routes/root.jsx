import { Outlet, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import './root.css'; // Import the CSS file for styling

export default function Root() {

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <div id="sidebar">
        <nav>
          <Link to="contacts"> Users </Link>
          <Link to="contacts"> News feed </Link>
          <Link to="contacts"> Weather </Link>
          <Link to="contacts"> Pokemon </Link>
        </nav>
        
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}