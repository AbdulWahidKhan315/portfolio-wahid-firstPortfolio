import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/project-1.PNG'
import img2 from '../assets/project-2.PNG'
import img3 from '../assets/project-3.PNG'

const Work = () => {
  return (
    <section className='section lg:mt-36' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br /> Project</h2>
              <p className='max-w-sm mb-16'>Some latest projects of mine are here. I have included 3 project among all of my projects. Implemented unique design on these three projects along with back-end</p>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-300' src={img1} alt=''></img>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>An Employee management system</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-gradient'>Empower Performa</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50'>
                <span className='text-xl text-white p-2 rounded-full bg-green-500 hover:bg-green-700 font-bold'><a href='https://empower-performa.web.app/' target='_blank' rel="noreferrer">GO LIVE</a></span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10 mt-7'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-300' src={img2} alt=''></img>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Room Booking management system</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-gradient'>Hotel Hydra</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50'>
                <span className='text-xl text-white p-2 rounded-full bg-green-500 hover:bg-green-700 font-bold'><a href='https://hotel-hydra-client.web.app/' target='_blank' rel="noreferrer">GO LIVE</a></span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-300' src={img3} alt=''></img>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>A Simple E-commerce site</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-gradient'>DeWe-Drinks</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50'>
                <span className='text-xl text-white p-2 rounded-full bg-green-500 hover:bg-green-700 font-bold'><a href='https://dewy-drinks-client.web.app/' target='_blank' rel="noreferrer">GO LIVE</a></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;
