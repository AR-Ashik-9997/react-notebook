import React from 'react';
import HTMLReactParser from 'html-react-parser';
const JsData = ({ js }) => {
  const {title, description, image, list } = js;

  return (
    <div className="text-justify container w-3/4 mx-auto">      
        <h1 className="font-bold text-2xl py-5">{HTMLReactParser(title)}</h1>
        <p className="text-xl py-2">{HTMLReactParser(description)}</p>
        {list.length > 0 ?<ul className='list-disc list-outside ml-5 text-left'>{list.map(listed=><li className='text-xl text-justify py-2'>{HTMLReactParser(listed)}</li>)}</ul> : ""}
        <img className='mt-5' src={image} alt="" />
      </div>
    
  );
};

export default JsData;
