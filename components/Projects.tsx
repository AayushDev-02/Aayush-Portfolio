import React from 'react'
import Project from './Project';
import { motion } from "framer-motion"

type Props = {}

function Projects({ }: Props) {
    
    return (
        <motion.div
        initial={{
            opacity:0
        }}
        whileInView ={{
            opacity:1,
        }}
        transition={{
            duraiton:1.5,
        }}
        className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
            scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A] scrollbar-thumb-rounded hover:scrollbar-thumb-[#F7AB0A]/50
            '>
                {/* PROJECTS */}
                <Project/>
                <Project/>
                <Project/>
                <Project/>  

            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB04]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    )
}

export default Projects