import React from 'react'
import {Link} from "react-router-dom"

export default function Navigation() {
    const items = [
        {
            name:"Home",
            slug:"/",
            id: 1,
        },
        {
            name:"BoiteOutil",
            slug:"/BoiteOutil",
            id: 2,
        }
    ]
  return (
    <div className="flex px-10 py-2 items-center justify-between">
      <div className="flex space-x-14">
        <img src="img/3.svg" alt="" width={120} />
        <img src="img/logo.svg" alt="" width={120} />
      </div>
      <div className=''>
        <ul className='flex gap-5 '>
          {items.map((item) => (
            <Link to={item.slug} key={item.id}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
