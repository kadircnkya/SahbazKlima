import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { SlEarphones } from 'react-icons/sl';
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';
import KlimaIcon from '../../assets/klimaIcon.png'; // İkonu içe aktar

const NavbarMenu = [
    {
        id: 1,
        title: 'HOME',
        link: '#home',
    },
    {
        id: 3,
        title: 'SERVİS',
        link: '#services',
    },
    {
        id: 4,
        title: 'HAKKIMIZDA',
        link: '#hero',
    },
    {
        id: 5,
        title: 'İletişim',
        link: '#contact',
    },
];

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className='bg-brandDark text-white py-8 font-varela' id='home'>
                <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='container flex justify-between items-center'
                >
                    {/* Icon and Text Section */}
                    <div className='h-16 flex items-center gap-2 overflow-hidden'> {/* Sabit yükseklik ve taşmayı gizle */}
                        <img src={KlimaIcon} alt="Klima Icon" className='h-10 w-10' /> {/* İkon */}
                        <span className='text-2xl font-bold text-green-800'>ŞAHBAZ /</span> {/* Koyu yeşil "ŞAHBAZ" */}
                        <span className='text-2xl font-bold text-white'> KLİMA</span> {/* Beyaz "KLİMA" */}
                    </div>

                    {/* Menu Section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-4'>
                            {NavbarMenu.map((item) => (
                                <li key={item.id}>
                                    <UpdateFollower
                                        mouseOptions={{
                                            backgroundColor: 'white',
                                            zIndex: 999,
                                            followSpeed: 1.5,
                                            scale: 5,
                                            mixBlendMode: 'difference',
                                        }}
                                    >
                                        <a href={item.link} className='inline-block text-sm py-2 px-3 uppercase'>
                                            {item.title}
                                        </a>
                                    </UpdateFollower>
                                </li>
                            ))}
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: 'white',
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    scale: 5,
                                    mixBlendMode: 'difference',
                                }}
                            >
                                <button className='text-xl ps-14'>
                                    <SlEarphones />
                                </button>
                            </UpdateFollower>
                        </ul>
                    </div>

                    {/* Mobile Hamburger Section */}
                    <div className='md:hidden'>
                        <MdMenu className='text-4xl cursor-pointer' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
                    </div>
                </motion.nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className='md:hidden bg-brandDark p-4'>
                        <ul className='flex flex-col items-center gap-2'>
                            {NavbarMenu.map((item) => (
                                <li key={item.id}>
                                    <UpdateFollower
                                        mouseOptions={{
                                            backgroundColor: 'white',
                                            zIndex: 999,
                                            followSpeed: 1.5,
                                            scale: 5,
                                            mixBlendMode: 'difference',
                                        }}
                                    >
                                        <a href={item.link} className='inline-block text-sm py-2 px-3 uppercase'>
                                            {item.title}
                                        </a>
                                    </UpdateFollower>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
