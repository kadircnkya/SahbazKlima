import React from 'react'
import referance1 from '../../assets/referance/referans1.jpg'
import referance2 from '../../assets/referance/referans2.jpg'
import referance3 from '../../assets/referance/referans3.jpg'
import referance4 from '../../assets/referance/referans4.jpg'
import referance5 from '../../assets/referance/referans5.jpg'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'

const BlogsData=[
    {
        id: 1,
        img: referance1,    
    },
    {
        id: 2,
        img: referance2,    
    },
    {
        id: 3,
        img: referance3,    
    },
    {
        id: 4,
        img: referance4,    
    },
    {
        id: 3,
        img: referance5,    
    },
]

const Blogs = () => {
  return (
    <>
    <section className='bg-gray-50'>
        <div className="container py-14">
            <h1 className='text-3xl font-bold text-center 
            font-poppins pb-8 '>Referanslar
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 '>
                {BlogsData.map((data)=>{
                    return(
                        <div className='flex flex-col item-center
                         justify-center gap-6 p-3 max-w-[300px] mx-auto
                         shadow-lg rounded-md bg-white hover:-translate-y-2
                         duration-300'>
                            <img src={data.img} alt="" />
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold line-clamp-2'>
                                  {data.title}
                                </h1>
                                <p className='line-clamp-3'>
                                    {data.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section></>
  )
}

export default Blogs