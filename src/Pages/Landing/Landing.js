import React, { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import Ambitions from "./components/Ambitions/Ambitions";
import Courses from "./components/Courses/Courses";
import ChooseAmbitions from "./components/ChooseAmbitions/ChooseAmbtions";
import { scrollToTop } from "../../Utils/Common";

const Landing = () => {

  useEffect(() => {
    scrollToTop();
  }, []);
  
  return (
    <div>
      <Layout isCarousel={true}>
        <Ambitions />
        <Courses />
        <ChooseAmbitions />
      </Layout>
    </div>
  );
};

export default Landing;
