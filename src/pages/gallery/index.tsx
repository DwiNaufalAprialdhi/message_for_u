/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Gallery() {
      const [selectedImage, setSelectedImage] = useState<string | null>(null)

      const images = [
            "/gallery/g-1.jpg",
            "/gallery/g-2.jpg",
            "/gallery/g-6.jpg",
      ]

      return (
            <>
                  <Head>
                        <title>#ceritaakudankkamu</title>
                  </Head>

                  <main className="w-full h-max overflow-x-hidden bg-[#e9a1b3]/5">
                        <div className="w-full h-full min-h-screen md:max-w-[480px] max-w-none md:mx-auto mx-0 bg-[#f0e6e6] px-5 pt-5 pb-[120px] overflow-x-hidden">

                              <h2 className="font-hacky text-[40px] font-bold text-[#394475] leading-tight">
                                    #OurGallery
                              </h2>

                              <p className="font-helvetica font-normal text-slate-400 text-xs leading-tight mb-5">
                                    Celebrating our journey together through these cherished moments. Each photo tells a story of love, laughter, and unforgettable memories we&apos;ve created side by side. Here&apos;s to many more beautiful chapters in our shared adventure! 📸❤️
                              </p>

                              {/* GRID GALLERY */}
                              <div className="grid grid-cols-3 gap-2 mb-6">
                                    {images.map((src, i) => (
                                          <div
                                                key={i}
                                                className="w-full aspect-square overflow-hidden rounded-md cursor-pointer"
                                                onClick={() => setSelectedImage(src)}
                                          >
                                                <img
                                                      src={src}
                                                      alt={`img-${i}`}
                                                      className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                                                />
                                          </div>
                                    ))}
                              </div>

                              <p className='font-helvetica font-normal text-slate-400 text-xs leading-tight'>
                                    <span className='text-[#394475]'>Yuk kita berjuang bareng,</span> saling bimbing menuju ibadah yang lebih sempurna, dan saling dekatkan diri kepada Allah dalam satu tujuan, satu ridho, satu cinta.
                              </p>
                        </div>
                  </main>

                  {/* PREVIEW MODAL */}
                  {selectedImage && (
                        <div
                              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
                              onClick={() => setSelectedImage(null)}
                        >
                              <img
                                    src={selectedImage}
                                    alt="preview"
                                    className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                              />
                        </div>
                  )}

                  <Navbar />
            </>
      )
}
