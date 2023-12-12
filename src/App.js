import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
// bg-gradient-to-r from-indigo-500 from-50% via-sky-700 via-30% to-emerald-500 to-90%

const App = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 from-50% via-sky-500 via-30% to-emerald-500 to-90% bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
