import { NavLink } from "react-router-dom";

import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../assetts/site-header-logo.png";
import classes from "./Header.module.css";
import HeaderNavMenu from "./HeaderNavMenu";
import { useState} from "react";

const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false)

  

  return (
    <div className={classes.header}>
      <IconContext.Provider value={{ color: "#eeeeee", size: "4%" }} >
        <RxHamburgerMenu className={classes.hamburgerMenu} onClick={() => setShowNavMenu(true)}/>
        {showNavMenu && <HeaderNavMenu onClickOutside={() => setShowNavMenu(false)}/>}
      </IconContext.Provider>
      <img src={logo} alt="" />
      <div className={classes.navList}>
        <NavLink to="/" className={() => classes.nav} end>
          Home
        </NavLink>
        <NavLink to="/contact" className={() => classes.nav} end>
          Contact Me
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
