import React from 'react'
import { motion } from "framer-motion"
import ExperienceCards from './ExperienceCards'
type Props = {}

function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5
      }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center space-y-32'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-3xl mt-2'> Experience</h3>
      
      {/* Experience Cards */}
      <div className= ' w-full flex space-x-10 overflow-x-scroll p-10 snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A] scrollbar-thumb-rounded hover:scrollbar-thumb-[#F7AB0A]/50 '>
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
      </div>

    </motion.div>
  )
}

export default WorkExperience