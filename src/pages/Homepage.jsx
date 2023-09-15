import React from "react";
import Leftside from "../components/Leftside";
import Form from "../components/Form";

const Homepage = () => {
  return (
    <div className="bg-[url('../public/images/Background.png')] bg-cover bg-no-repeat bg-center ">
      <div className="max-w-full mx-24 h-screen flex justify-between items-center">
        <Leftside />
        <Form />
      </div>
    </div>
  );
};

export default Homepage;
