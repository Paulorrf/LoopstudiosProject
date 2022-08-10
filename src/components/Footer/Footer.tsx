import React from "react";

import FB from "../../assets/icon-facebook.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Insta from "../../assets/icon-instagram.svg";
import Pinterest from "../../assets/icon-pinterest.svg";

import Logo from "../../assets/logo.svg";

import { FooterContainer, FooterNav, FooterImg } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <FooterImg src={Logo} alt="logo" />
        <ul className="lg:flex child:mb-4 child:lg:mb-0 child:lg:pr-8 child:cursor-pointer">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Careers</li>
          <li className="hover:underline">Events</li>
          <li className="hover:underline">Products</li>
          <li className="hover:underline">Support</li>
        </ul>
      </FooterNav>

      <div>
        <ul className="flex justify-center items-center lg:justify-end mb-4 lg:mb-6 child:pr-4">
          <li>
            <img src={FB} alt="Facebook" />
          </li>
          <li>
            <img src={Twitter} alt="Twitter" />
          </li>
          <li>
            <img src={Insta} alt="Instagram" />
          </li>
          <li>
            <img src={Pinterest} alt="Pinterest" />
          </li>
        </ul>

        <p>&copy; 2021 Loopstudios. All rights reserved</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
