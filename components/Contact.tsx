import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

type Props = {}

function Contact({ }: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formdata) => {
        window.location.href = `mailto:yadavaayush0202@gmail?subject=${formdata.subject}&body=Hi, my name is ${formdata.name}, ${formdata.message} (${formdata.email})`;
    };

    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>

            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need. {" "}
                </h4>
                <span className='decoration-[#F7AB0A]/50 underline text-center font-semibold text-4xl'> Lets Talk</span>

                <div className='space-y-10 '>
                    <div className='flex items-center space-x-5 '>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p>+91 9024469947</p>
                    </div>

                    <div className='flex items-center space-x-5 '>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p>yadavaayush0202@gmail.com</p>
                    </div>
                   
                    <div className='flex items-center space-x-5 '>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p>65C, Bhagat Vatika 2nd, Civil Lines, Jaipur, Rajasthan, India</p>
                    </div>
                </div>


                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto' >
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                    <textarea {...register('message')} placeholder='Message' className='contactInput'  />
                    <button type='submit' className='text-lg bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold p-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact