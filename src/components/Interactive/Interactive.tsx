import React, { useEffect, useState } from "react";
import VrGuyMobile from "../../assets/mobile/image-interactive.jpg";
import VrGuyDesktop from "../../assets/desktop/image-interactive.jpg";

import {
  InteractiveContainer,
  InteractiveContent,
  ImgContainer,
  Title,
  Text,
} from "./Interactive.style";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Interactive = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <InteractiveContainer>
      <ImgContainer>
        <img
          src={windowSize.innerWidth >= 1000 ? VrGuyDesktop : VrGuyMobile}
          alt="vr"
        />
      </ImgContainer>

      <InteractiveContent>
        <Title>THE LEADER IN INTERACTIVE VR</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          incidunt laudantium atque consequatur possimus eos quas, explicabo
          laboriosam beatae cumque?
        </Text>
      </InteractiveContent>
    </InteractiveContainer>
  );
};

export default Interactive;
