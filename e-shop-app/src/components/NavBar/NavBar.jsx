import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/products">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

//https://reactrouter.com/start/framework/navigating
