import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Link from 'next/link';
import { ArrowSmallUpIcon } from '@heroicons/react/24/solid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A] scrollbar-thumb-rounded hover:scrollbar-thumb-[#F7AB0A]/50'>
      <Head>
        <title> Aayush Portfolio</title>
      </Head>
      
        {/* Header */}
        <Header />


        {/* Hero */}
        <section id="hero" className='snap-center scroll-smooth '>
          <Hero/>
        </section>

        {/* About */}
        <section id='about' className='snap-center scroll-smooth'>
          <About />
        </section>

        {/* Experience */}
        <section id='experience' className=' snap-center scroll-smooth'>
          <WorkExperience />
        </section>

        {/* Skills */}
        <section id='skills' className='snap-start'>
          <Skills/>
        </section>

        {/* Projects */}
        <section id="projects" className='snap-start'>
          <Projects/>
        </section>

        {/* Contact Me */}
        <section id='contact' className='snap-start'>
          <Contact/>
        </section>

        <Link href='#hero'  >
        <div className='sticky left-full mr-10 rounded-full bottom-10 w-fit p-2 ml-5 bg-[#F7AB0A] text-black '>
          <ArrowSmallUpIcon className='h-10 w-10'/>
        </div>
        </Link>

    </div>
  )
}
