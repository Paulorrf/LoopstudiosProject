import React, { useEffect, useState } from "react";

import data from "./data";

import {
  CreationsContainer,
  CreationHeader,
  ImageContainer,
  ImageTitle,
  GridContainer,
  Btn,
} from "./Creations.style";

interface DataProps {
  id: number;
  name: string;
  mobileImg: any;
  desktopImg: any;
}

function renderGrid(arrImgs: DataProps[], widthSize: boolean) {
  return arrImgs.map((imgObj) => {
    return (
      <>
        <ImageContainer
          image={widthSize ? imgObj.desktopImg : imgObj.mobileImg}
        >
          <ImageTitle>{imgObj.name.toUpperCase()}</ImageTitle>
        </ImageContainer>
      </>
    );
  });
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Creations = () => {
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

  //

  return (
    <CreationsContainer>
      <CreationHeader hasCenter={windowSize.innerWidth < 1000 ? true : false}>
        <h3 className="text-2xl">OUR CREATIONS</h3>
        {windowSize.innerWidth >= 1000 && <Btn>SEE ALL</Btn>}
      </CreationHeader>
      <GridContainer>
        {renderGrid(data, windowSize.innerWidth >= 768)}
      </GridContainer>
      <div className="text-center mt-8">
        {windowSize.innerWidth < 1000 && <Btn>SEE ALL</Btn>}
      </div>
    </CreationsContainer>
  );
};

export default Creations;
