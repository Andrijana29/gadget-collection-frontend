import { NavLink } from "react-router-dom";


function Nav({ user }) {
  const authenticatedOptions = (
    <>
      <NavLink className="nav-link" to="/gadgets">
        Gadgets
      </NavLink>
      <NavLink className="nav-link" to="/gadgets/add">
        Add Gadget
      </NavLink>
      <NavLink className="nav-link" to="/sign-out">
        Log Out
      </NavLink>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <NavLink className="nav-link" to="/">
        Log-In
      </NavLink>
      <NavLink className="nav-link" to="/register">
        Register
      </NavLink>
    </>
  );

  return (
    <nav>
      {/* <img src={headerLogo} alt="header gadget" /> */}
      {user && <div className="link welcome">Welcome, {user.username}</div>}
      <div className="nav-links">
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  );
}

export default Nav;