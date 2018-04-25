import React from 'react';

export default function Footer(){
  return (
    <div>
      <style jsx>{`
        .footer{
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          background-color: #0E0D12;
          font-family: monospace;
          text-align: center;
          font-size: 10px;
          text-shadow: 0px 0px 5px white;
          color: white;
        }

      `}</style>
      <div className='footer'>
        <h1>Copyright (c) 2018 WeDOW.</h1>
      </div>
    </div>
  );
}
