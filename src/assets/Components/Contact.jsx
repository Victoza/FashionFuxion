import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

import { LuTruck } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import { RiRefund2Fill } from "react-icons/ri";

import { LiaTelegram } from "react-icons/lia";

const Contact = () => {
    const Icons = [
        {icon:<IoLocationOutline size={30}/>, title:"Address", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {icon:<MdOutlineMailOutline size={30}/>, title:"Email", desc:"Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit.."},
        {icon:<FaPhoneVolume size={30}/>, title:"Phone", desc:"Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor."},
        {icon:<IoMdTime size={30}/>, title:"Working hours", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor."}
    ] 

    const icons = [
        {icon:<LuTruck size={40}/>, title:"Free Shipping", desc:"On orders over #20,00"},
        {icon:<LuShieldCheck size={40}/>, title:"Secure Payment", desc:"100% secure checkout"},
        {icon:<RiRefund2Fill size={40}/>, title:"Easy Returns", desc:"30-day return policy"},
        {icon:<RiRefund2Fill size={40}/>, title:"Easy Returns", desc:"30-day return policy"}
    ]
  return (
    <div className='bg-white p-8'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-bold'>Contact Us</h2>
            <p className='text-xl text-center'>We'd love to hear from you! Whether you have a question, <br/>feedback or need help, our team is here for you.</p>
        </div>
        <div className='flex justify-center p-12'>
            <div className='bg-gray-200 shadow-2xl p-16 rounded-2xl flex flex-col flex-1'>
                <h2 className='text-3xl font-bold mb-4'>Get In Touch</h2>
                <p className='w-90 mb-8'>Have a question or suggestion? Fill out the form and we'll get back to you as soon as possible</p>
                {/* Info */}
                <div className=''>
                    {Icons.map((Icon)=>(
                        <div key={Icon.title} className='flex items-center gap-4'>
                            <div className='bg-blue-200 p-4 rounded-full items-center justify-center mb-4'>
                                {Icon.icon}
                            </div>
                            <div>
                                <p>{Icon.title}</p>
                                <p>{Icon.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Form */}
            <div className='pt-16 px-8 bg-white shadow-md flex flex-col flex-1 rounded-xl'>
                <div>
                    <h2 className='text-3xl font-bold mb-4'>Send us a Message</h2>
                    <form  className="flexflex-col space-y-6">
                        <div className='flex gap-4'>
                            <input type="text" placeholder='Your Name' className='border-2 w-1/2 rounded-md p-3'/>
                            <input type="text" placeholder='Your Email' className='border-2 w-1/2 rounded-md p-3'/>
                        </div>
                        <select name="" id="" className='w-full p-3 border-2 rounded-md'>
                            <option value="">Subject</option>
                            <option value="">Order Issue</option>
                            <option value="">Refund</option>
                            <option value="">General Question</option>
                        </select>
                        <textarea name="" id="" placeholder='Your Message' className='w-full border-2 rounded-md p-8'/>
                        <button className='flex items-center gap-2 bg-blue-300 p-4 rounded text-xl text-white'><LiaTelegram size={24}/> Send Message </button>
                    </form>
                </div>
            </div>
        </div>
        <div className='flex justify-around items-center bg-gray-100 h-40'>
            <div className='flex gap-8'>
                {icons.map((icon)=>
                <div className='flex space-x-2'>
                    <div>{icon.icon}</div>
                    <div>
                        <h3>{icon.title}</h3>
                        <p>{icon.desc}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Contact