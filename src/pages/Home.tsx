import React from "react";

import Header from "../components/Header/Header";
import Interactive from "../components/Interactive/Interactive";
import Creations from "../components/Creations/Creations";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-12">
        <Interactive />
        <Creations />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
