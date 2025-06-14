import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Head from 'next/head';

export default function Index() {
  const audioRef = useRef<HTMLAudioElement>(null); // 👈 fix type here
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Head>
        <title>#ceritaakudankkamu</title>
      </Head>
      <main className='w-full h-max overflow-x-hidden bg-[#e9a1b3]/5'>
        <div className='w-full h-full min-h-screen md:max-w-[480px] max-w-none md:mx-auto mx-0 bg-[#f0e6e6] p-5 overflow-x-hidden'>
          <h2 className='font-hacky text-[40px] font-bold text-[#394475] leading-tight'>
            #Cerita Aku dan Kamu
          </h2>
          <p className='font-helvetica font-normal text-slate-400 text-xs leading-tight mb-5'>
            Untuk langkah yang insyaAllah diberkahi, untuk hati yang saling menjaga, dan cinta yang ingin pulang pada tujuan yang suci.
          </p>

          {/* Button Play */}
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="w-full bg-[#e9a1b3] font-semibold text-xs py-2 text-slate-50 px-5 rounded mb-3 hover:bg-opacity-80 transition-all"
            >
              🎵 play lagu nya yaa neng.. 🎵
            </button>
          )}

          {/* Audio (disembunyikan kontrolnya, dikontrol via tombol) */}
          <audio
            ref={audioRef}
            src="/backsong-3.mp3"
            onEnded={() => {
              audioRef.current?.play(); // auto play ulang
            }}
          />

          {/* VISI MISI */}
          <div className='w-full relative transition-all duration-500 bg-[#e9a1b3] rounded mb-3 cursor-pointer hover:bg-opacity-80 overflow-hidden'>
            <h2 className='font-semibold text-xs text-slate-50 text-center py-2 px-5'>
              💗 yeey visi misi kita 💗
            </h2>
            <input type="checkbox" className='absolute top-0 inset-x-0 w-full h-8 z-[1] cursor-pointer peer opacity-0' />
            <div className='transition-all ease-in-out duration-500 h-0 peer-checked:h-auto pt-0 peer-checked:pt-2 pb-0 peer-checked:pb-5 px-0 peer-checked:px-5 overflow-hidden'>
              <Image src="/visimisi.png" alt="visimisi" className='w-full h-full object-cover rounded-lg' width={1000} height={1000} />
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
              className="carousel-swiper col-span-1 w-full md:h-[530px] h-[435px]"
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
              className="carousel-swiper col-span-1 w-full md:h-[530px] h-[435px]"
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
              className="carousel-swiper col-span-1 w-full md:h-[530px] h-[435px]"
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

          <p className='font-helvetica font-normal text-slate-400 text-xs leading-tight'>
            <span className='text-[#394475]'>Yuk kita berjuang bareng,</span> saling bimbing menuju ibadah yang lebih sempurna, dan saling dekatkan diri kepada Allah dalam satu tujuan, satu ridho, satu cinta.
          </p>
        </div>
      </main>
    </>
  );
}
