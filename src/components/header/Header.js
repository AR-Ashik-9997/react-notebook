import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <div className='pt-10'>              
            <Link to="/html" ><button className=" btn-xs sm:btn-sm md:btn-md lg:btn-lg btn btn-outline btn-accent">HTML</button></Link>
            <Link to="/css" className='pl-3'><button className="btn-xs sm:btn-sm md:btn-md lg:btn-lg btn btn-outline btn-success ">CSS</button></Link>
            <Link to="/javaScript" className='pl-3'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-warning">JavaScript</button></Link>
            <Link to="/git" className='pl-3'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-secondary">Git</button></Link>
            <Link to="/react"className='pl-3'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-info">React</button></Link>          
        </div>
    );
};

export default Header;