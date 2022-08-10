import styled from "styled-components";
import tw from "twin.macro";

export const InteractiveContainer = styled.div`
  ${tw`
        mt-16
        mb-24
        lg:flex
        items-end
        sm:max-w-[90%]
        lg:max-w-[100%]
        text-center
        mx-auto
   `}
`;

export const InteractiveContent = styled.div`
  ${tw`
        lg:w-full
        lg:h-full
        lg:max-w-[500px]
        lg:p-8
        lg:-ml-32
        bg-white
        lg:-mb-8
        
    `}
`;

export const ImgContainer = styled.div`
  img {
    ${tw`
        md:mx-auto
        md:w-5/6
      `}
  }
`;

export const Title = styled.h3`
  ${tw`
        mt-8
        mb-4
        text-2xl
        mx-8
        text-center
    `}
`;

export const Text = styled.p`
  ${tw`
        text-gray
        md:px-20
    `}
`;
