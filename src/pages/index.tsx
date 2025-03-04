'use client'

import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Index() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(document.getElementById("background-audio") as HTMLAudioElement);
  }, []);

  const playAudio = () => {
    if (audio) {
      audio
        .play()
        .then(() => {
          console.log("Music is playing");
          setIsPlaying(true); // Sembunyikan tombol setelah musik dimainkan
        })
        .catch(() => console.log("Autoplay blocked by browser"));
    }
  };

  return (
    <>
      <Head>
        <title>Bismillah</title>
        <meta name="description" content="Bismillah" />
      </Head>

      <main className='w-full h-max bg-white'>
        <div className='w-full md:max-w-[480px] max-w-none bg-[#F6F6F6] mx-auto min-h-screen flex flex-col p-5 relative overflow-x-hidden'>
          {/* Ornament */}
          <div className='absolute top-0 right-0 w-[350px] h-max z-[1] opacity-50'>
            <Image
              src='/flowers-1.svg'
              width={50}
              height={50}
              alt='ornament'
              className='w-full h-auto object-cover animate-pulse'
            />
          </div>
          {/* Ornament */}
          <div className='absolute top-1/2 -translate-y-1/2 right-0 w-[350px] h-max z-[1] opacity-50'>
            <Image
              src='/flowers-1.svg'
              width={50}
              height={50}
              alt='ornament'
              className='w-full h-auto object-cover animate-pulse'
            />
          </div>
          {/* Ornament */}
          <div className='absolute bottom-0 left-0 w-[350px] h-max z-[1] opacity-50'>
            <Image
              src='/flowers-1.svg'
              width={50}
              height={50}
              alt='ornament'
              className='w-full h-auto object-cover animate-pulse'
            />
          </div>

          {/* Audio Control */}
          <div className={`${isPlaying ? 'hidden' : 'block'} fixed top-5 right-5 z-[10]`}>
            <audio id="background-audio" src="/backsong.mp3" controls className="hidden" />
            <button
              onClick={playAudio}
              className="px-4 py-2 bg-[#F7D9D9] text-[#414141] text-base font-semibold shadow-md hover:bg-opacity-80 rounded-full transition border-white border-2">
              Play 🎵
            </button>
          </div>

          {/* Content */}
          <h2 className='font-semibold font-hacky md:text-[80px] text-7xl text-[#414141] leading-tight text-center relative z-[5]'>
            Bismillah
          </h2>
          <div className='w-full h-max rounded-[40px] bg-[#F7D9D9] flex flex-col p-5 border-2 border-white mb-5 relative z-[5]'>
            <h2 className='font-semibold font-hacky md:text-[36px] text-[32px] text-[#414141] leading-tight mb-3'>
              Assalamu’alaikum, Pitria Nurhayati.
            </h2>
            <p className='font-normal leading-normal md:text-lg text-base text-[#414141]'>
              Aku senang sekali bisa berkenalan denganmu dan akhirnya merasakan lagi yang namanya jatuh hati setelah sekian lama. Terima kasih sudah mau meluangkan waktu untuk berdiskusi bareng dalam perkenalan pertama kita. Aku paham bahwa dalam sebuah hubungan, pasti ada rasa penasaran tentang arah dan keseriusannya. Karena itu, aku ingin menyampaikan visiku dengan jelas: targetku adalah dalam 1-2 tahun ke depan, kita bisa menuju ke jenjang yang lebih serius.
            </p>
          </div>
          <div className='w-full h-max rounded-[40px] bg-[#F7D9D9] flex flex-col p-5 border-2 border-white mb-5 relative z-[5]'>
            <p className='font-normal leading-normal md:text-lg text-base text-[#414141]'>
              Untuk teknis pertemuan, karena jarak dan waktu, aku akan mengusahakan agar kita bisa bertemu seminggu sekali setelah kakakku menikah di bulan April nanti (mohon doanya ya 🙏). Aku ingin kita bisa menikmati proses ini dengan saling memahami dan mendukung satu sama lain.
            </p>
          </div>
          <div className='w-full h-max rounded-[40px] bg-[#F7D9D9] flex flex-col p-5 border-2 border-white relative z-[5] mb-5'>
            <p className='font-normal leading-normal md:text-lg text-base text-[#414141]'>
              Dan jika kamu bisa menerima ikhtiarku ini, aku ingin kamu memberikan jawabannya di sepertiga malam terakhir.. saat di mana doa-doa terbaik dipanjatkan dan keputusan diambil dengan hati yang paling jernih.
            </p>
            <h2 className='font-semibold font-hacky md:text-[36px] text-[32px] text-[#414141] leading-tight mt-3'>
              Wassalamu’alaikum warahmatullahi wabarakatuh.
            </h2>
          </div>
          {/* <div className='w-max mx-auto p-5 rounded-full flex items-center bg-[#F7D9D9] justify-center relative z-[5] gap-x-2 border-2 border-white'>
            <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-white'>
              <Image src='/pay.jpg' width={48} height={48} alt='Pitria' className='w-full h-full overflow-hidden' />
            </div>
            <h2 className='font-semibold font-hacky md:text-[36px] text-[32px] text-[#414141] leading-tight'>
              Dwi Naufal Aprialdhi
            </h2>
          </div> */}
        </div>
      </main>
    </>
  )
}
