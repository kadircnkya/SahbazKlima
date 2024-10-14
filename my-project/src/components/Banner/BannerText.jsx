import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

function BannerText() {
  return (
    <section className='py-12 text-center font-varela ' id='reference'>
        <div className='container'>
             <div className='bg-gradient-to-t from-emerald-900
              to-emerald/70 text-white rounded-3xl
              p-8 hover:scale-105 duration-500 hover:shadow-2xl'>
                <UpdateFollower
                 mouseOptions={{
                    backgroundColor: "black/50",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "screen"
                }}
                >
                <p className='font-bold text-4xl max-w-[700px] mx-auto leading-normal'>
                    Detaylı bilgi için bizimle direkt iletişime geçebilirsiniz veya ofisimize bekleriz.
                </p>
                </UpdateFollower>
                
             </div>
        </div>
        
    </section>
  )
}

export default BannerText