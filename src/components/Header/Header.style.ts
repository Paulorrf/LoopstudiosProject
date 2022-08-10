import styled from "styled-components";
import tw from "twin.macro";

import BgMbl from "../../assets/mobile/image-hero.jpg";
import BgDsk from "../../assets/desktop/image-hero.jpg";

interface NavModalProps {
  showNav: boolean;
}

export const Background = styled.div`
  background-image: url(${BgMbl});
  min-height: 600px;

  @media (min-width: 600px) {
    background-image: url(${BgDsk});
    min-height: 400px;
  }

  ${tw`
      bg-cover
      bg-no-repeat
      bg-cover
      relative
    `}
`;

export const NavBarMbl = styled.div`
  ${tw`
        flex
        justify-between
        items-center
        mx-8
        pt-8
        text-[#fff]
        lg:hidden
    `}
`;

export const NavBarDsk = styled.div`
  ${tw`
        hidden
        lg:flex
        mx-8
        pt-8
        justify-between
        items-center
    `}

  ul {
    ${tw`
            flex
    `}

    li {
      ${tw`
        mr-4
        text-white
        text-lg
        cursor-pointer
    `}
    }
  }
`;

export const NavBarModal = styled.div<NavModalProps>`
  background-color: #000;
  color: #fff;
  left: 0;
  visibility: ${({ showNav }) => (showNav ? "visible" : "hidden")};
  opacity: ${({ showNav }) => (showNav ? 1 : 0)};
  transition: opacity 0.6s ease-in;

  ${tw`
      h-screen
      w-screen
      absolute
      top-0
      px-8
  `}
`;

export const NavBarModalHeader = styled.div`
  ${tw`
    flex
    justify-between
    mt-8
  `}
`;

export const NavBarModalList = styled.div`
  ${tw`
    mt-24
    list-none
  `}

  li {
    ${tw`
      mt-4
      text-xl
      tracking-wider
      cursor-pointer
      hover:tracking-widest
    `}
  }
`;

export const MsgContainer = styled.div<NavModalProps>`
  visibility: ${({ showNav }) => (showNav ? "hidden" : "visible")};

  ${tw`
    mx-8
    mt-32
    sm:w-2/5
    md:w-5/12
    lg:w-3/12
    border
    border-white
    border-solid
    border-4
    px-8
    py-2
    md:left-1/3
  `}

  span {
    ${tw`
      block
      text-white
      text-4xl
    `}
  }
`;
