import React from 'react'
import Icon1 from "../../assets/services/service.jpg";
import Icon2 from "../../assets/services/service3.jpg";
import Icon3 from "../../assets/services/servicess2.jpg";
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';



export const fadeUp=(delay)=>{
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5,
                delay:delay,
            },
        },
    };
};

const ServicesData = [
    {
        id: 1,
        title: "Arıza Tespiti ve Giderme",
        icon: Icon1,
        desc: " Her türlü klima arızasında, alanında uzman teknik ekibimizle hızlı ve etkili çözümler sunarak, müşteri memnuniyetini en üst düzeyde sağlamayı hedefliyoruz.",
        delay: 0.5,
    },
    {
        id: 2,
        title: "Periyodik Bakım",
        icon: Icon2,
        desc:"Klimalarınızın verimli, uzun ömürlü ve enerji tasarruflu çalışmasını sağlamak için düzenli bakım hizmetleri sunar, olası arızaları önleyerek performanslarını en üst seviyede tutarız."
    },
    {
        id: 3,
        title: "Montaj ve Demontaj",
        icon: Icon3,
        desc: "Yeni klima sistemlerinin kurulumu ve eski sistemlerin güvenli bir şekilde sökülmesini sağlarız, ayrıca kullanım ömrünü uzatmak ve verimliliği artırmak için gerekli adımları atarız.",
        delay: 1.1,
    },
    
]


const Services = () => {
    return (
        <>
            <section className='bg-gray-100 font-poppins py-8' id='services'>
                <div className='container py-14'>
                    <motion.h1 variants={fadeUp(0.2)} inital="hidden" whileInView="show"  className='text-3xl font-bold text-center pb-10'>7/24 SERVİS</motion.h1>
               
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' >
                    {ServicesData.map((data) => (
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 0.5,
                                rotate: 720,
                                mixBlendMode: "darken",
                                scale: 5,
                                backgroundElement:(
                                    <motion.div
                                  >
                                        <img src={data.icon} alt="" />
                                    </motion.div>
                                )
                            }}
                        >
                            <motion.div 
                              variants={fadeUp(data.delay)}
                              inital="hidden" 
                             whileInView="show"
                            className='flex flex-col items-center justify-center p-5 max-w-[300] mx-auto shadow-lg rounded-xl bg-white'>
                                <img src={data.icon} className='w-[100px] mb-4' alt="" />
                                <div className='text-center space-y-2'>
                                    <h1 className='text-2xl font-bold'>{data.title}</h1>
                                    <p className='text-center text-sm text-black/75'>{data.desc}</p>
                                </div>
                            </motion.div>
                        </UpdateFollower>
                    ))}
                </div>

                </div>
            </section>



        </>
    )
}

export default Services