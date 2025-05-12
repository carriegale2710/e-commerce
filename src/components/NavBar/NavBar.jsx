import { NavLink } from "react-router";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={classes.container}>
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

//https://reactrouter.com/start/framework/navigating
