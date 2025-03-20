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
              Aku ingin menjelaskan sesuatu supaya kamu tidak salah paham. Mungkin belakangan ini kamu merasa aku mulai menjaga jarak atau kurang aktif. Bukan karena aku tidak ingin berbicara denganmu, tapi karena kesibukanku di bulan Ramadhan ini cukup padat. Selain menjalankan ibadah seperti tarawih, tilawah, dan berbagai aktivitas kebaikan, aku juga sedang mengikuti ngaji khusus untuk memperbaiki diri, di mana saat ini kami sudah sampai pada pembahasan tentang zina. Aku ingin lebih fokus memperbaiki diri dan memanfaatkan bulan penuh berkah ini dengan sebaik-baiknya.
            </p>
          </div>
          <div className='w-full h-max rounded-[40px] bg-[#F7D9D9] flex flex-col p-5 border-2 border-white mb-5 relative z-[5]'>
            <p className='font-normal leading-normal md:text-lg text-base text-[#414141]'>
              Aku ingin menjaga hati dan pikiranku tetap bersih, juga ingin menjaga marwahmu sebagai seseorang yang aku hormati. Aku sadar bahwa perasaan itu fitrah, tapi cara menjaganya juga harus sesuai dengan apa yang Allah ridhoi. Aku tidak ingin seperti banyak orang saat ini yang menjalin hubungan dengan pacaran, yang justru bisa membuat Allah murka. Aku ingin hubungan ini, jika memang ada jalannya, dimulai dengan cara yang Allah ridhoi, bukan sekadar mengikuti hawa nafsu atau kebiasaan yang dianggap wajar oleh banyak orang.
            </p>
          </div>
          <div className='w-full h-max rounded-[40px] bg-[#F7D9D9] flex flex-col p-5 border-2 border-white mb-5 relative z-[5]'>
            <p className='font-normal leading-normal md:text-lg text-base text-[#414141]'>
              Aku juga ingin kamu tahu bahwa perasaan ini bukan sekadar main-main. Rasulullah ﷺ pernah bersabda bahwa ketika seseorang mencintai saudaranya karena Allah, maka hendaklah ia mengungkapkannya. Aku memilih untuk mengungkapkan ini bukan karena aku ingin buru-buru atau menekanmu dalam sebuah keputusan, tapi justru karena aku ingin hubungan ini dimulai dengan niat yang baik. Mengungkapkan perasaan bukanlah akhir dari segalanya, justru ini adalah awal dari sebuah keseriusan. Jika perasaan ini hanya aku simpan sendiri, aku khawatir ia akan berkembang tanpa arah. Namun dengan menyampaikannya, aku ingin kamu tahu bahwa aku memiliki niat yang jelas dan aku siap untuk berproses menuju sesuatu yang lebih baik.
            </p>
          </div>
          <div className='w-full h-max rounded-[40px] bg-[#F7D9D9] flex flex-col p-5 border-2 border-white mb-5 relative z-[5]'>
            <p className='font-normal leading-normal md:text-lg text-base text-[#414141]'>
              Lebih dari itu, aku punya tujuan yang ingin aku capai dalam 1-2 tahun ke depan, di mana pernikahan menjadi salah satu goals yang aku persiapkan dengan serius. Aku paham bahwa dalam pernikahan, seorang laki-laki tidak hanya bertanggung jawab dalam memberi nafkah materi, tetapi juga nafkah batin—menjadi pemimpin yang bisa membawa keluarganya menuju ridha Allah. Dan aku ingin mempersiapkan diriku dengan baik sebelum sampai di titik itu.
            </p>
          </div>
          <div className='w-full h-max rounded-[40px] bg-[#F7D9D9] flex flex-col p-5 border-2 border-white mb-5 relative z-[5]'>
            <p className='font-normal leading-normal md:text-lg text-base text-[#414141]'>
              Namun, satu hal yang juga ingin aku sampaikan, jika dalam ikhtiarku ini kamu sudah memiliki seseorang yang mengikatmu lebih dulu, aku pasti akan mengikhlaskannya, karena aku yakin bahwa rencana dan takdir Allah selalu yang terbaik. Tapi jika sampai waktunya aku telah siap dan kamu masih belum ada yang mengikat, maka insyaAllah, orang yang akan datang meminta restu kepada orang tuamu di rumah adalah aku.
            </p>
          </div>
          <div className='w-full h-max rounded-[40px] bg-[#F7D9D9] flex flex-col p-5 border-2 border-white relative z-[5] mb-5'>
            <p className='font-normal leading-normal md:text-lg text-base text-[#414141]'>
              Semoga Allah selalu menjaga hati dan niat kita, serta membimbing kita dalam setiap langkah. Terima kasih karena sudah memahami dan menghargai ini.
            </p>
            <h2 className='font-semibold font-hacky md:text-[36px] text-[32px] text-[#414141] leading-tight mt-3'>
              See you, in the best way and in the best time—insyaAllah.
            </h2>
          </div>
          <div className='w-max mx-auto p-5 rounded-[40px] flex flex-col items-center bg-[#F7D9D9] justify-center relative z-[5] gap-2 border-2 border-white'>
            <p className='font-normal leading-normal md:text-lg text-base text-[#414141] text-center'>
              Dengan penuh hormat dan doa,
            </p>
            <div className='flex items-center justify-center gap-2'>
              <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-white'>
                <Image src='/pay.jpg' width={48} height={48} alt='Pitria' className='w-full h-full overflow-hidden' />
              </div>
              <h2 className='font-semibold font-hacky md:text-[36px] text-[26px] text-[#414141] leading-tight text-center'>
                Dwi Naufal Aprialdhi
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
