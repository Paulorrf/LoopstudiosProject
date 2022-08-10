import React, { useState } from "react";
import {
  Background,
  NavBarMbl,
  NavBarDsk,
  NavBarModal,
  NavBarModalHeader,
  NavBarModalList,
  MsgContainer,
} from "./Header.style";

import Logo from "../../assets/logo.svg";
import Hamb from "../../assets/icon-hamburger.svg";
import CloseMenu from "../../assets/icon-close.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <Background>
      <NavBarMbl>
        <img src={Logo} alt="logo" />
        <img
          src={Hamb}
          alt="menu"
          className="cursor-pointer"
          onClick={() => setShowNav(true)}
        />
      </NavBarMbl>

      <NavBarDsk>
        <img src={Logo} alt="logo" />
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </NavBarDsk>

      <NavBarModal showNav={showNav}>
        <NavBarModalHeader>
          <span>Loopstudios</span>
          <img
            src={CloseMenu}
            alt="close"
            className="cursor-pointer"
            onClick={() => setShowNav(false)}
          />
        </NavBarModalHeader>

        <NavBarModalList>
          <li>ABOUT</li>
          <li>CAREERS</li>
          <li>EVENTS</li>
          <li>PRODUCTS</li>
          <li>SUPPORT</li>
        </NavBarModalList>
      </NavBarModal>

      <MsgContainer showNav={showNav}>
        <span>IMMERSIVE</span>
        <span>EXPERIENCE</span>
        <span>THAT</span>
        <span>DELIVER</span>
      </MsgContainer>
    </Background>
  );
};

export default Header;
