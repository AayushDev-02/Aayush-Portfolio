import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {}

function Skills({ }: Props) {
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
            className=' relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center  ' >

            <h3 className='absolute top-24 tracking-[20px] text-2xl text-gray-500  uppercase'>Skills</h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-sm text-gray-500 '>Hover over a skill for currency profieciency</h3>

            <div className='grid grid-cols-4 gap-5 pt-10'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>

        </motion.div>
    )
}

export default Skills