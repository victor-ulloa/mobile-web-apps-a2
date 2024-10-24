import { Outlet, Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import './root.css';

export default function Root() {
  // Get the current route location
  const location = useLocation(); 

  // Function to handle user logout
  const handleLogout = () => {
    signOut(auth); // Sign out the user from Firebase authentication
  };

  // Check if the given path is the current active path
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div id="sidebar">
        <nav>
          {/* Navigation links to different routes */}
          <Link to="contacts" className={isActive("/contacts") ? "active" : ""}> Users </Link>
          <Link to="news" className={isActive("/news") ? "active" : ""}> News feed </Link>
          <Link to="weather" className={isActive("/weather") ? "active" : ""}> Weather </Link>
          <Link to="pokemons" className={isActive("/pokemons") ? "active" : ""}> Pokemon </Link>
          <Link to="profile" className={isActive("/profile") ? "active" : ""}> Profile </Link>
        </nav>
        
        {/* Logout button to sign out the user */}
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      {/* Outlet for rendering child routes */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}