import React, { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import SpecializedService from "./components/SpecializedService/SpecializedService";
import PioletTraning from "./components/PioletTraning/PioletTraning";
import { scrollToTop } from "../../Utils/Common";

const Facilities = () => {

  useEffect(() => {
    scrollToTop();
  }, []);
  
  return (
    <div>
      <Layout title="Facilities Page">
        <PioletTraning />
        <SpecializedService />
      </Layout>
    </div>
  );
};

export default Facilities;
