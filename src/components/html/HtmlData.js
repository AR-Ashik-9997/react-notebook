import React from "react";

const HtmlData = ({ html }) => {
  const { title, description, image } = html;
  return (
    <div className="text-justify container w-3/4 mx-auto">
      <h1 className="font-bold text-3xl py-5">{title}</h1>
      <p className="text-xl">{description}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default HtmlData;
