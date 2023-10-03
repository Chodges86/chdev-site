import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

import classes from "./HeaderNavMenu.module.css";

const HeaderNavMenu = ({ onClickOutside }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  });

  return (
    <div className={classes.menu} ref={ref}>
      <NavLink to="/" className={() => classes.nav} onClick={onClickOutside} end>
        Home
      </NavLink>
      <NavLink to="/contact" className={() => classes.nav} onClick={onClickOutside} end>
        Contact Me
      </NavLink>
    </div>
  );
};

export default HeaderNavMenu;
