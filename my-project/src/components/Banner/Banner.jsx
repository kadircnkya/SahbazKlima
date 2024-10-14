import React from 'react'
import Headphone5 from '../../assets/vrf.png';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';
import { fadeUp } from '../Services/Services';

const Banner = () => {
  return (
    <>
    <section>
         <div className=" container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12" id='banner'>
          {/* ___Banner Image ___ */}
        <div>
          <motion.img
           initial={{opacity:0, x:-100,rotate:-180}}
           animate={{opacity:1 ,x:0,rotate:0}}
           transition={{duration:0.8,delay:0.2,ease:"easeInOut"}}
           src={Headphone5} alt="" className='w-[300px] md:w-[400px]' />
        </div>
        {/*  ___Banner Text Info ___ */}
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
            <motion.h1
              variants={fadeUp(0.7)}
              initial="hidden" 
             whileInView="show"
            className='text-3xl lg:text-4xl font-semibold font-poppins'>VRF SİSTEMİ
             </motion.h1>
            <motion.p
             variants={fadeUp(0.9)}
             initial="hidden" 
            whileInView="show"
            
            >
             <h1 className='text-2xl'>
             VRF sistemi, büyük ve karmaşık binalarda enerji verimli ve konforlu bir iklimlendirme çözümü sunar.
               Binaların farklı bölgelerinde farklı sıcaklık ve nem koşullarının sağlanması gerektiğinde VRF sistemleri en iyi seçeneklerden biridir. 
               Şahbaz Klima olarak bu hizmeti sizlere en iyi biçimde sunmak için buradayız.
             </h1>
            </motion.p>
            <UpdateFollower
             mouseOptions={{
              backgroundColor: "white",
              zIndex: 9999,
              followSpeed: 0.5,
              scale: 5,
              mixBlendMode: "difference"
          }}>
            <motion.a 
             href="#reference" // Butona tıklanınca referans bölümüne gitmesi için
             variants={fadeUp(1.3)}
             initial="hidden" 
             whileInView="show"
             className='border-2 border-[#00cd66] text-[#00cd66] px-6 py-2 rounded-md hover:bg-[#00cd66] hover:text-white' >Referanslar</motion.a>
            </UpdateFollower>
          
          </div>
        </div>
         </div>
    </section>
    
    </>
  )
}

export default Banner;
