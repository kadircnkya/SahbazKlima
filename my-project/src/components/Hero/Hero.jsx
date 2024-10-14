import React from 'react';
import BackgroundImage from '../../assets/arkaplan.jpg';  // Keep the background image
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from 'react-mouse-follower';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            },
        },
    };
};

const headphoneData = [
    {
        id: 1,
        title: "Bizi Tanıyınız",
        subtitle: <h1 className='text-2xl'>Şahbaz Klima, klima sektöründe uzun yıllardır hizmet veren, müşteri memnuniyetini ilke edinmiş bir firmadır. Geniş ürün yelpazemiz ve uzman ekibimizle, eviniz veya iş yeriniz için en uygun klima çözümlerini sunuyoruz.
        Müşterilerimiz, ihtiyaç duydukları her an bize ulaşabilir ve profesyonel destek alabilirler. Başarılı projelerimiz ve memnun müşterilerimiz, bizim için en büyük referanstır.</h1> ,     
        bgColor: "#8b5958",
    },
   
];

const Hero = () => {
    const [activeData, setActiveData] = React.useState(headphoneData[0]);
    const handleActiveData = (data) => {
        setActiveData(data);
    };

    return (
        <>
            <section 
                className='text-white font-varela relative' 
                style={{
                    backgroundImage: `url(${BackgroundImage})`,  // Set background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                id='hero'
            >
                {/* Overlay for darkening the background */}
                <div className="absolute inset-0 bg-black opacity-50" />
                
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px] relative z-10">
                    {/*___ Headphone Info ___  */}
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500xp]'>
                        <div className='space-y-5 text-center md:text-left'>
                            <AnimatePresence mode='wait'>
                                <UpdateFollower mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: -720,
                                    mixBlendMode: "difference",
                                    scale: 10,
                                }}>
                                    <motion.h1
                                        key={activeData.id}
                                        variants={fadeUp(0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className='text-3xl lg:text-6xl font-bold font-varela'>
                                        {activeData.title}
                                    </motion.h1>
                                </UpdateFollower>
                            </AnimatePresence>
                            
                            <AnimatePresence mode='wait'>
                                <motion.p
                                    key={activeData.id}
                                    variants={fadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className='text-sm leading-loose text-white/80'
                                >
                                    {activeData.subtitle}
                                </motion.p>
                            </AnimatePresence>

                            {/* <AnimatePresence mode='wait'>
                                <motion.p
                                    key={activeData.id}
                                    variants={fadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className='text-lg font-semibold hover:opacity-50 cursor-pointer transition-opacity duration-300'
                                    style={{ color: 'white' }}
                                >
                                   
                                </motion.p>
                            </AnimatePresence> */}

                            {/* ___ Headphone List Separator ___ */}
                            <div className='flex items-center justify-center md:justify-start gap-4 mt-24'>
                                <div className='w-20 h-[1px] bg-white'></div>
                                <p className='uppercase text-sm'>Gönül Rahatlığıyla </p>
                                <div className='w-20 h-[1px] bg-white'></div>
                            </div>
                            {/* Headphone list switcher */}
                        </div>
                        {/* <div className='grid grid-cols-3 gap-10'>
                            {headphoneData.map((item) => {
                                return (
                                    <UpdateFollower
                                        key={item.id}
                                        mouseOptions={{
                                            backgroundColor: item.bgColor,
                                            zIndex: 9999,
                                            followSpeed: 0.5,
                                            scale: 5,
                                            text: "View Details",
                                            textFontSize: "3px",
                                        }}
                                    >
                                        <div 
                                            onClick={() => handleActiveData(item)}
                                            className='grid grid-cols-2 place-items-center cursor-pointer'>
                                            <div className='space-y-2'>
                                                <p className='text-base font-bold'>{item.price}</p>
                                                <p className='text-xs font-normal'>{item.modal}</p>
                                            </div>
                                        </div>
                                    </UpdateFollower>
                                )
                            })}
                        </div> */}
                    </div>

                    {/*___ WhatsApp Icon Info ___  */}
                    <div className='text-5xl text-green-500 p-3 rounded-full fixed bottom-10 right-0 hover:rotate-[360deg] duration-500 z-[99999]'>
    <a href="https://wa.me/905340800888" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className='' />
    </a>
</div>
                </div>
            </section>
        </>
    );
};

export default Hero;
