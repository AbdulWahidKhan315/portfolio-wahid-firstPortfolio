import React from 'react';

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaFigma, FaNodeJs,FaGithub } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5'
import { SiTailwindcss, SiMongodb, SiExpress, SiAdobephotoshop, SiDaisyui, SiNetlify } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <h1 className='h2 text-center underline underline-offset-8 mb-6'>Skills</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tr-full rounded-bl-full'>
            <FaHtml5 className='text-6xl'></FaHtml5>
            <h2 className='h3 rotate-[30deg] px-6  hover:border-green-500'>HTML</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tr-full rounded-bl-full'>
            <FaCss3Alt className='text-6xl'></FaCss3Alt>
            <h2 className='h3 rotate-[30deg] px-6 hover:border-green-500'>CSS</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tl-full rounded-br-full'>
            <IoLogoJavascript className='text-6xl'></IoLogoJavascript>
            <h2 className='h3 px-6 -rotate-[30deg] hover:border-green-500'>JAVASCRIPT</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tl-full rounded-br-full'>
            <FaReact className='text-6xl'></FaReact>
            <h2 className='h3 px-6 hover:border-green-500 -rotate-[30deg]'>REACT</h2>
          </motion.div>
          {/* second row */}
          <motion.div
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tr-full rounded-bl-full'>
            <SiTailwindcss className='text-6xl'></SiTailwindcss>
            <h2 className='h3 rotate-[30deg] px-6  hover:border-green-500'>TAILWIND</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tr-full rounded-bl-full'>
            <FaBootstrap className='text-6xl'></FaBootstrap>
            <h2 className='h3 rotate-[30deg] px-6 hover:border-green-500'>BOOTSTRAP</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tl-full rounded-br-full'>
            <FaFigma className='text-6xl'></FaFigma>
            <h2 className='h3 px-6 -rotate-[30deg] hover:border-green-500'>FIGMA</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tl-full rounded-br-full'>
            <IoLogoFirebase className='text-6xl'></IoLogoFirebase>
            <h2 className='h3 px-6 hover:border-green-500 -rotate-[30deg]'>FIREBASE</h2>
          </motion.div>
          {/* third row */}
          <motion.div
          variants={fadeIn('right', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tr-full rounded-bl-full'>
            <FaNodeJs className='text-6xl'></FaNodeJs>
            <h2 className='h3 rotate-[30deg] px-6  hover:border-green-500'>NODE</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('right', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tr-full rounded-bl-full'>
            <SiMongodb className='text-6xl'></SiMongodb>
            <h2 className='h3 rotate-[30deg] px-6 hover:border-green-500'>MONGODB</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tl-full rounded-br-full'>
            <SiExpress className='text-6xl'></SiExpress>
            <h2 className='h3 px-6 -rotate-[30deg] hover:border-green-500'>EXPRESS</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tl-full rounded-br-full'>
            <TbBrandNextjs className='text-6xl'></TbBrandNextjs>
            <h2 className='h3 px-6 hover:border-green-500 -rotate-[30deg]'>NEXT.JS</h2>
          </motion.div>
          {/* fourth row */}
          <motion.div
          variants={fadeIn('right', 0.9)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tr-full rounded-bl-full'>
            <FaGithub className='text-6xl'></FaGithub>
            <h2 className='h3 rotate-[30deg] px-6  hover:border-green-500'>GITHUB</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('right', 0.9)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tr-full rounded-bl-full'>
            <SiNetlify className='text-6xl'></SiNetlify>
            <h2 className='h3 rotate-[30deg] px-6 hover:border-green-500'>NETLIFY</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.9)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tl-full rounded-br-full'>
            <SiDaisyui className='text-6xl'></SiDaisyui>
            <h2 className='h3 px-6 -rotate-[30deg] hover:border-green-500'>DAISYUI</h2>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.9)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='border-4 hover:border-green-500 flex flex-col justify-center items-center py-10 space-y-6 rounded-tl-full rounded-br-full'>
            <SiAdobephotoshop className='text-6xl'></SiAdobephotoshop>
            <h2 className='h3 px-6 hover:border-green-500 -rotate-[30deg]'>PHOTOSHOP</h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
