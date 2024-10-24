import { Outlet, Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import './root.css'; // Import the CSS file for styling

export default function Root() {
  const location = useLocation(); // Get current route location

  const handleLogout = () => {
    signOut(auth);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div id="sidebar">
        <nav>
          <Link to="contacts" className={isActive("/contacts") ? "active" : ""}> Users </Link>
          <Link to="news" className={isActive("/news") ? "active" : ""}> News feed </Link>
          <Link to="weather" className={isActive("/weather") ? "active" : ""}> Weather </Link>
          <Link to="pokemons" className={isActive("/pokemons") ? "active" : ""}> Pokemon </Link>
          <Link to="profile" className={isActive("/profile") ? "active" : ""}> Profile </Link>
        </nav>
        
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}