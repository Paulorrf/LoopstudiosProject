import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.div`
  ${tw`
        bg-black 
        text-white 
        text-center 
        lg:flex 
        lg:justify-between 
        py-8 
        px-32 
        lg:py-16
    `}
`;

export const FooterNav = styled.div`
  ${tw`
        mb-12 
        lg:mb-0
    `}
`;

export const FooterImg = styled.img`
  ${tw`
        mb-8 
        lg:mb-4 
        mx-auto 
        lg:mx-0
    `}
`;
