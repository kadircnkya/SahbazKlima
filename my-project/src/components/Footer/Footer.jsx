import React, { useState } from 'react'; // useState ekleniyor
import { FaFacebook, FaInstagram, FaPhone, FaTelegram, FaTwitter } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import Cards from '../../assets/credit-cards.webp';
import { motion } from 'framer-motion';

const Footer = () => {
    const [showCopyButton, setShowCopyButton] = useState(false); // Kopyalama butonunu göstermek için state

    // Kopyalama işlevi
    const handleCopyPhoneNumber = () => {
        navigator.clipboard.writeText(" +90 (534) 080 08 88"); // Telefon numarasını kopyala
        setShowCopyButton(true); // Butonu göster
        setTimeout(() => setShowCopyButton(false), 2000); // 2 saniye sonra gizle
    };

    return (
        <>
            <footer className='bg-emerald-900 pt-12 pb-8 text-white' id='contact'>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Company Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2
                            }}
                            className='space-y-6'>
                            <h1 className='text-3xl font-bold uppercase'>İletişim</h1>
                            <p className='text-sm max-w-[300px]'>
                               
                            </p>
                            <h1 className='flex items-center gap-4'>Muhammed Şahbaz</h1>
                            <div>
                            
                                <p className='flex items-center gap-2' onClick={handleCopyPhoneNumber}> {/* Telefon numarasına tıklama işlevi eklendi */}
                                    <FaPhone />
                                    +90 (534) 080 08 88

                                </p>
                                {showCopyButton && ( // Kopyalama butonunu göster
                                    <button 
                                        className='mt-2 px-4 py-2 bg-white text-primary rounded hover:bg-gray-200 duration-300'
                                    >
                                        Kopyalandı!
                                    </button>
                                )}
                                <p className='flex items-center gap-2 mt-2'>
                                    <FaMapLocation />
                                    <a 
                                        href="https://www.google.com/maps/search/?api=1&query=Şahbaz+Klima,+Bağlarbaşı+Mah.+Cemalbey+Cad,+Çay+Sk.+No:6+B/C,+Maltepe/İstanbul" // Google Maps'e yönlendiriliyor
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                       Bağlarbaşı Mah. Cemalbey Cad, Çay Sk. No:6 B/C, Maltepe/İstanbul
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                        {/* Footer Links */}
                        <motion.div 
                         initial={{ opacity: 0, y: 100 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{
                             duration: 0.6,
                             delay: 0.4
                         }}
                        className='space-y-6'>
                            <h1 className='text-3xl font-bold'></h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                {/* <div>
                                    <ul className='space-y-2'>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact Us</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div> */}
                                {/* <div>
                                    <ul className='space-y-2'>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact Us</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div> */}
                            </div>
                        </motion.div>
                        {/* Social Links */}
                        <motion.div 
                         initial={{ opacity: 0, y: 100 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{
                             duration: 0.6,
                             delay: 0.6
                         }}
                        
                        className='space-y-6'>
                            <h1 className='text-3xl font-bold'>Sosyal Medya</h1>
                            <div className='flex items-center gap-3'>
                                <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                                <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                                <FaTwitter className='text-3xl hover:scale-105 duration-300' />
                                <FaTelegram className='text-3xl hover:scale-105 duration-300' />
                            </div>
                            <div className='space-y-2'>
                                <p>Payment Methods</p>
                                <img src={Cards} alt="" className='w-[80%]' />
                            </div>
                        </motion.div>
                    </div>
                    {/* copyright section */}
                    <p className='text-white text-center mt-8 border-t-2 pt-8'>
                        © 2024. All Rights Reserved || Kadircnkya
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
