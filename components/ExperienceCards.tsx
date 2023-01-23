import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCards({ }: Props) {
    return (
        <article className=' flex flex-col rounded-lg items-center  space-y-7 flex-shrink-0 w-[600px] md:w-[500px] xl:w-[850px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: 0,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                className='rounded-full w-32 h-32 xl:w-[150px] xl:h-[150px] object-cover object-center'
                src="/react.png" alt="React" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>React JS</h4>
                <p className='font-bold text-2xl mt-1'>1 Year</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-8 w-8 ' src="https://img.icons8.com/fluency/48/null/visual-studio-code-2019.png" />
                    <img className='h-8 w-8' src="https://img.icons8.com/color/48/null/javascript--v1.png" />
                    <img className='h-8 w-8' src="https://img.icons8.com/fluency/48/null/node-js.png" />

                </div>

                <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolor suscipit sed laudantium unde dolorum consequatur a? Esse, veritatis aut!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sint?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit a temporibus.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem aliqui</li>
                </ul>
            </div>

        </article>
    )
}

export default ExperienceCards