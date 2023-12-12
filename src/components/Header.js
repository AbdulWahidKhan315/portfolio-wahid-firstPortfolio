import React from 'react';


const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='home'>
            <h2 className='h2 text-gradient'>WAHID KHAN</h2>
          </a>
          <button className='btn btn-sm'>
            <a href='assignment-2.pdf' download>Download CV</a>
          </button>
        </div>
      </div>
    </header>
  )
};

export default Header;
