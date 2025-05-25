import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function index() {

  return (
    <>
      <main className='w-full h-max overflow-x-hidden bg-[#e9a1b3]/5'>
        <div className='w-full h-full min-h-screen md:max-w-[480px] max-w-none md:mx-auto mx-0 bg-[#f0e6e6] p-5 overflow-x-hidden'>
          <h2 className='font-hacky text-[50px] font-bold text-[#394475] leading-tight'>
            #Cerita Aku dan Kamu
          </h2>
          <p className='font-helvetica font-normal text-slate-400 text-xs leading-tight mb-5'>
            Untuk langkah yang insyaAllah diberkahi, untuk hati yang saling menjaga, dan cinta yang ingin pulang pada tujuan yang suci.
          </p>
          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
            <Swiper
              slidesPerView={1.1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="carousel-swiper col-span-1 w-full md:h-[530px] h-[420px]"
            >
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src="/1.png" alt="craousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src="/2.png" alt="craousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src="/3.png" alt="craousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src="/4.png" alt="craousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <p className='font-helvetica font-normal text-slate-400 text-xs leading-tight'>
            <span className='text-[#394475]'>Yuk kita berjuang bareng,</span> saling bimbing menuju ibadah yang lebih sempurna, dan saling dekatkan diri kepada Allah dalam satu tujuan, satu ridho, satu cinta.
          </p>
        </div>
      </main>
    </>
  )
}
