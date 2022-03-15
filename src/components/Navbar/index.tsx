import React, { useState } from "react";

import * as s from "./styles";
import { FiLogOut } from "react-icons/fi";

import Logo from "../../images/Logo.png";
import { MenuData } from "./MenuData";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activatedIcon, setActivatedIcon] = useState<boolean>(false);

  const handleIcon = () => {
    setActivatedIcon(!activatedIcon);
  };

  return (
    <nav className={s.Container()}>
      <div className={s.MenuIcon()}>
        <div className={s.Logo()}>
          <img src={Logo} alt="logo" />
        </div>

        <ul className={s.MenuIcon()}>
          {MenuData.map((item, index) => (
            <li key={item.id}>
              <NavLink
                className={s.divIcon()}
                end
                to={item.path}
                onClick={handleIcon}
              >
                {item.icon(s.Icons())}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={s.divIcon({ type: "logoutDiv" })}>
          <FiLogOut className={s.Icons({ type: "logout" })} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
