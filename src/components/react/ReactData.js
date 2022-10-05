import React from 'react';
import HTMLReactParser from 'html-react-parser';
const ReactData = ({react}) => {
    const { title, description, image,list } = react;
  return (
    <div className="text-justify container w-3/4 mx-auto">
      <h1 className="font-bold text-2xl py-5">{title}</h1>
      <p className="text-xl">{HTMLReactParser(description)}</p>
      {list.length > 0 ?<ul className='list-disc list-outside ml-5 text-left'>{list.map(listed=><li className='text-xl text-justify py-2'>{HTMLReactParser(listed)}</li>)}</ul> : ""}
      <img className='mt-5' src={image} alt="" />
    </div>
  );
};

export default ReactData;