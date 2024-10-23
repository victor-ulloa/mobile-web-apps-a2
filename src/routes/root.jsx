import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

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
          <button onClick={handleLogout}>Logout</button>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}