import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Birthday() {

      return (
            <>
                  <Head>
                        <title>#ceritaakudankkamu</title>
                  </Head>
                  <main className='w-full h-max overflow-x-hidden bg-[#e9a1b3]/5'>
                        <div className='w-full h-full min-h-screen md:max-w-[480px] max-w-none md:mx-auto mx-0 bg-[#f0e6e6] px-5 pt-5 pb-[120px] overflow-x-hidden'>
                              <h2 className='font-hacky text-[40px] font-bold text-[#394475] leading-tight'>
                                    #YourBirthday
                              </h2>
                              <p className='font-helvetica font-normal text-slate-400 text-xs leading-tight mb-5'>
                                    Happy Birthday! 🎉🎂 Wishing you a day filled with love, joy, and unforgettable moments. May this year bring you endless happiness and success. Cheers to another amazing year ahead! 🥳💖
                              </p>

                              {/* SWIPER */}
                              <div className='w-full grid grid-cols-1'>
                                    <Swiper
                                          slidesPerView={1.1}
                                          spaceBetween={10}
                                          pagination={{
                                                clickable: true,
                                          }}
                                          modules={[Pagination]}
                                          className="carousel-swiper col-span-1 w-full md:h-[530px] h-[430px]"
                                    >
                                          <SwiperSlide>
                                                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                                                      <Image src={`/birthday/b-1.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                                                      <Image src={`/birthday/b-2.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                                                      <Image src={`/birthday/b-3.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                                                </div>
                                          </SwiperSlide>
                                    </Swiper>
                              </div>

                              <p className='font-helvetica font-normal text-slate-400 text-xs leading-tight'>
                                    <span className='text-[#394475]'>Yuk kita berjuang bareng,</span> saling bimbing menuju ibadah yang lebih sempurna, dan saling dekatkan diri kepada Allah dalam satu tujuan, satu ridho, satu cinta.
                              </p>
                        </div>
                  </main>
                  <Navbar />
            </>
      );
}
