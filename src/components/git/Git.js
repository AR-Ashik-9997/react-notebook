import axios from "axios";
import React, { useState } from "react";
import App from "../../App";
import Header from "../header/Header";
import GitData from "./GitData";

const Git = ({git}) => {
  

  return (
    <div>
      <Header />
      <div className="mt-20 mb-10">
        {git.map((data, id) => (
          <GitData git={data} key={id}></GitData>
        ))}
      </div>
    </div>
  );
};

export default Git;
