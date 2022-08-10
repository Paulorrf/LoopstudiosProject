import styled from "styled-components";
import tw from "twin.macro";

interface CenterProps {
  hasCenter: boolean;
}

interface ImageContainerProps {
  image: any;
}

export const CreationsContainer = styled.div`
  ${tw`
        mx-auto
        mb-16
    `}
`;

export const CreationHeader = styled.div<CenterProps>`
  text-align: ${({ hasCenter }) => hasCenter && "center"};
  justify-content: ${({ hasCenter }) =>
    hasCenter ? "center" : "space-between"};

  ${tw`
        flex
        mb-4
    `}
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  background-image: url(${({ image }) => image});
  box-shadow: inset 0 -40px 100px 10px #000;

  ${tw`
      relative
      bg-cover
      bg-center
      bg-no-repeat
      w-full
      relative
      min-h-[11rem]
      sm:min-h-[16rem]
      md:min-h-[29rem]
      lg:min-h-[30rem]
      xl:min-h-[34rem]
    `}
`;

export const ImageTitle = styled.h2`
  ${tw`
        absolute
        bottom-4
        md:bottom-6
        left-4
        md:left-8
        text-white
        text-3xl
        md:text-4xl
        tracking-wider
        w-40
        md:w-52
       
    `}
`;

export const GridContainer = styled.div`
  ${tw`
        grid
        gap-x-2
        gap-y-6
        md:gap-y-2
        lg:gap-y-2
        xl:gap-y-6
        md:grid-cols-3
        lg:grid-cols-4

    `}
`;

export const Btn = styled.button`
  :hover {
    background-color: #000;
    color: #fff;
  }

  ${tw`
    border 
    px-8 
    py-2 
    tracking-widest
    `}
`;
