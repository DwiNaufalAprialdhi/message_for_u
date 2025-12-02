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

export default function Index() {

  return (
    <>
      <Head>
        <title>#ceritaakudankkamu</title>
      </Head>
      <main className='w-full h-max overflow-x-hidden bg-[#e9a1b3]/5'>
        <div className='w-full h-full min-h-screen md:max-w-[480px] max-w-none md:mx-auto mx-0 bg-[#f0e6e6] px-5 pt-5 pb-[120px] overflow-x-hidden'>
          <h2 className='font-hacky text-[40px] font-bold text-[#394475] leading-tight'>
            #Cerita Aku dan Kamu
          </h2>
          <p className='font-helvetica font-normal text-slate-400 text-xs leading-tight mb-5'>
            Untuk langkah yang insyaAllah diberkahi, untuk hati yang saling menjaga, dan cinta yang ingin pulang pada tujuan yang suci.
          </p>

          {/* VISI */}
          <div className='w-full relative transition-all duration-500 bg-[#e9a1b3] rounded mb-3 cursor-pointer hover:bg-opacity-80 overflow-hidden'>
            <h2 className='font-semibold text-xs text-slate-50 text-center py-2 px-5'>
              💗 yeey visi kita 💗
            </h2>
            <input type="checkbox" className='absolute top-0 inset-x-0 w-full h-8 z-[1] cursor-pointer peer opacity-0' />
            <div className='transition-all ease-in-out duration-500 h-0 peer-checked:h-auto pt-0 peer-checked:pt-2 pb-0 peer-checked:pb-5 px-0 peer-checked:px-5 overflow-hidden'>
              <Image src="/visi.png" alt="visimisi" className='w-full h-full object-cover rounded-lg' width={1000} height={1000} />
            </div>
          </div>

          {/* MISI */}
          <div className='w-full relative transition-all duration-500 bg-[#e9a1b3] rounded mb-3 cursor-pointer hover:bg-opacity-80 overflow-hidden'>
            <h2 className='font-semibold text-xs text-slate-50 text-center py-2 px-5'>
              💗 yeey misi kita 💗
            </h2>
            <input type="checkbox" className='absolute top-0 inset-x-0 w-full h-8 z-[1] cursor-pointer peer opacity-0' />
            <div className='transition-all ease-in-out duration-500 h-0 peer-checked:h-auto pt-0 peer-checked:pt-2 pb-0 peer-checked:pb-5 px-0 peer-checked:px-5 overflow-hidden'>
              <Image src="/misi.png" alt="visimisi" className='w-full h-full object-cover rounded-lg' width={1000} height={1000} />
            </div>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/5.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/6.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/7.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/8.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/9.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
            <Swiper
              slidesPerView={1.1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="carousel-swiper col-span-1 w-full md:h-[530px] h-[430px]"
            >
              {[1, 2, 3, 4].map((num) => (
                <SwiperSlide key={num}>
                  <div className='w-full h-max rounded-[8px] overflow-hidden'>
                    <Image src={`/${num}.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/10.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/11.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/12.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/13.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/14.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/15.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/16.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/17.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/18.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/19.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/20.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/21.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/22.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/23.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/24.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/25.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/26.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/27.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/28.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/29.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/30.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/31.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/32.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/33.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/34.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/35.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/36.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/37.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/38.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/39.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/40.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/41.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/42.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/43.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/44.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/45.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/46.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/47.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/001.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/002.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/003.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/004.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/005.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/006.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/007.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/008r.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/009.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/010.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/revisi-1.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/012.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/revisi-2.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/013.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/014.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/015.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className='w-max h-max bg-[#e9a1b3] z-50 rounded-full py-1 px-3 font-bold text-[10px] text-white animate-pulse mb-2'>
            Ini yang terbaru sayang 💗
          </div>

          {/* SWIPER */}
          <div className='w-full grid grid-cols-1 mb-2'>
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
                  <Image src={`/november/1.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/2.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/3.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/4.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/5.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/6.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/7.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/8.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/9.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/10.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-max rounded-[8px] overflow-hidden'>
                  <Image src={`/november/11.png`} alt="carousel" width={500} height={500} className='w-full h-full object-cover' />
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
