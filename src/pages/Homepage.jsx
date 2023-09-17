import React from "react";
import Leftside from "../components/Leftside";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="h-screen max-w-full grid grid-rows-6">
      <div className="row-span-5">
        <img
          src="/images/Background.png"
          className="-z-50 absolute w-full h-full object-fill bottom-28"
          alt="Background"
        />
        <div className="px-24 flex justify-between items-center h-full">
          <Leftside />
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
