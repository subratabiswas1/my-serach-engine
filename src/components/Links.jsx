import React from 'react'
import {NavLink} from 'react-router-dom';
const links = [
    {url:'/search' , text:'🏷️All'},
    {url:'/news' , text:'📰News'},
    {url:'/images' , text:'🖼️Images'},
    {url:'/videos' , text:'📹Videos'}
];
const Links = () => {
  return (
        <div className='links flex sm:justify-around justify-between items-center border-b dark:border-gray-700 border-gray-200'>
            {links.map(({url,text},index)=>(
                <NavLink key={index} to={url} className='m-4 mb-0 pb-4.5'>
                    {text}
                </NavLink>
            ))}
        </div>
  )
}

export default Links;