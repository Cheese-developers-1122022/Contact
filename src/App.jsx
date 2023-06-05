import React from "react";

import Path from "./Path";
import Navbar from "./Component/Sidebar/Navbar";
import Siderbar from "./Component/Sidebar/Siderbar";

const App = () => {
  return (
    <div className=" w-screen">
      <Navbar />
      <div className="flex w-screen">
        <Siderbar />
        <Path />
      </div>
    </div>
  );
};

export default App;
