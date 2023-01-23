import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import MyImage from '../images/aayush-img2.png'


type Props = {}

function About({ }: Props) {
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

            className='h-screen flex flex-col space-y-12 md:space-y-0 relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-[105px] uppercase tracking-[20px] text-gray-500 text-3xl '>About</h3>




            <motion.img

                className='shadow-2xl  rounded-full -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-fit xl:w-[400px] xl:h-[500px] mt-10'
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                src="/aayush-img3.png" alt="My Text" />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold '>Here is a <span className='underline decoration-[#F7AB0A]/50'> little</span> background</h4>
                <p className='text-justify text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque voluptatum odit minus repellat natus soluta odio laboriosam ullam quia, sequi esse optio dolorum nisi nam repudiandae ipsa illum expedita quasi harum quod! Explicabo quasi aspernatur beatae odio! Ducimus nihil quos omnis molestias quibusdam porro magni aperiam tempore consequuntur doloribus, earum eligendi temporibus fugit libero neque explicabo aspernatur, mollitia facere quis necessitatibus rerum hic impedit? Sint architecto ducimus rem officia voluptatem. Incidunt atque ab tempore vero iste fugit eveniet magni, laudantium quaerat quia dolorum inventore ipsum quae molestias error officiis perspiciatis quibusdam veniam. Et, nisi recusandae porro eius suscipitkefn.
                </p>
            </div>

        </motion.div>
    )
}

export default About