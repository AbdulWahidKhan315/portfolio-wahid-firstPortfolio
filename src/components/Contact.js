import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <div>
                <h2><span className='font-bold text-xl'>Email:</span> k.wahidkhan55@gmail.com</h2>
                <h2><span className='font-bold text-xl'>Phone:</span> 01787315316</h2>
                <h2><span className='font-bold text-xl'>Address:</span> Mirpur-10, Dhaka, Bangladesh</h2>
              </div>
              <div>
                <h2 className='font-bold text-2xl text-gradient'>EDUCATION</h2>
                <h2>BSC in CSE <br/> Sonargaon University (2018-2022)</h2>
                <h2>HSC in Science Group <br/> BAF Shaheen college PKP (2014-2016)</h2>
              </div>
            </div>
            <form className='flex-1'>
              <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your Name' />

              <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' placeholder='Your Email' />

              <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your Message'> 
              </textarea>
              <input className='btn btn-lg' type='submit' value={'Submit'} />
            </form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
