import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
  return (
    <div>
      <style jsx>{`
        .header{
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          background-color: #0E0D12;
          font-family: monospace;
          font-size: 40px;
          text-shadow: 0px 0px 5px white;
          color: white;
        }
      `}</style>
      <div className='header'>
        <Link to='/' style={{ textDecoration: 'none', color: 'white'}}>FOODIE-GRAM</Link>
        <Link to='/newpost' style={{ textDecoration: 'none', color: 'white', float: 'right'}}>NEW POST</Link>
      </div>
    </div>
  );
}
