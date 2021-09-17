import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul class='flex'>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/home'>
            Home
          </Link>
        </li>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/add-plant'>
            Add Plant
          </Link>
        </li>
        <li className='mr-6'>
          <Link className='text-blue-500 hover:text-blue-800' to='/'>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
