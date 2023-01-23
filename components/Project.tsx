import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Project({ }: Props) {
  return (
    <div>
      <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <motion.img
        initial={{
          y:-50,
          opacity:0,
        }}
        transition={{
          duration:1.2,
        }}
        whileInView={{
          opacity:1, 
          y:0
        }}
        viewport={{
          once:true,
        }}
        className='w-[35rem] rounded-xl shadow-2xl shadow-[#F7AB0A]/80' src="/project1.png" alt="project 1" />

        <div className='space-y-10 px-0 md:px-10 max-w-4xl text-justify'>
          <h4 className='underline decoration-[#F7AB0A] text-4xl font-semibold text-center' >iOS-16 Lock Screen</h4>

          <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo reprehenderit nihil quisquam possimus hic, perspiciatis consequuntur cumque beatae magni commodi voluptatibus, quas eum sint explicabo quos harum quae sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis quasi autem dolor aliquam dolores vel quos repellendus tempora dolorem iusto porro quae, fuga quia voluptates exercitationem. Similique, dolore asperiores?</p>
        </div>
      </div>
    </div>
  )
}

export default Project