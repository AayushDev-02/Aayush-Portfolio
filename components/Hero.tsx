import { delay } from 'framer-motion'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import MyImage from '../images/aayush-img5.png'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Aayush Yadav", "Guy-who-loves-Coffee.tsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <div className='relative h-32 w-32 mx-auto  '>
                <Image className=' shadow-2xl shadow-[#F7AB0A] rounded-full  object-cover ' src={MyImage} alt="My image" />
            </div>
            <div className='z-20'>
                <h2 className='uppercase text-gray-500 tracking-[15px] pb-2 text-sm'>Software Engineer</h2>
                <h1 className=' text-5xl lg:text-5xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1 >

                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>

                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>

                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}