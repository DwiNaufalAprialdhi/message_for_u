/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { motion, AnimatePresence } from 'framer-motion' // Import Framer Motion

export default function Gallery() {
      const [selectedImage, setSelectedImage] = useState<string | null>(null)

      const images = [
            "/gallery/g-1.jpg",
            "/gallery/g-2.jpg",
            "/gallery/g-6.jpg",
            "/gallery/g-7.JPG",
            "/gallery/g-8.JPG",
            "/gallery/g-9.JPG",
            "/gallery/g-10.JPG",
      ]

      // Varian untuk animasi list (container)
      const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                  opacity: 1,
                  transition: {
                        staggerChildren: 0.1 // Jeda antar elemen muncul
                  }
            }
      }

      // Varian untuk setiap item
      const itemVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }

      return (
            <>
                  <Head>
                        <title>#ceritaakudankkamu</title>
                  </Head>

                  <motion.main
                        initial="hidden"
                        animate="visible"
                        className="w-full h-max overflow-x-hidden bg-[#e9a1b3]/5"
                  >
                        <div className="w-full h-full min-h-screen md:max-w-[480px] max-w-none md:mx-auto mx-0 bg-[#f0e6e6] px-5 pt-5 pb-[120px] overflow-x-hidden">

                              {/* Header Animation */}
                              <motion.div variants={itemVariants}>
                                    <h2 className="font-hacky text-[40px] font-bold text-[#394475] leading-tight">
                                          #OurGallery
                                    </h2>

                                    <p className="font-helvetica font-normal text-slate-400 text-xs leading-tight mb-5">
                                          Celebrating our journey together through these cherished moments. Each photo tells a story of love, laughter, and unforgettable memories we&apos;ve created side by side. Here&apos;s to many more beautiful chapters in our shared adventure! 📸❤️
                                    </p>
                              </motion.div>

                              {/* GRID GALLERY WITH ANIMATION */}
                              <motion.div
                                    variants={containerVariants}
                                    className="grid grid-cols-3 gap-2 mb-6"
                              >
                                    {images.map((src, i) => (
                                          <motion.div
                                                key={i}
                                                variants={itemVariants}
                                                whileHover={{ scale: 0.95 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-full aspect-square overflow-hidden rounded-md cursor-pointer"
                                                onClick={() => setSelectedImage(src)}
                                          >
                                                <img
                                                      src={src}
                                                      alt={`img-${i}`}
                                                      className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                                                />
                                          </motion.div>
                                    ))}
                              </motion.div>

                              <motion.p
                                    variants={itemVariants}
                                    className='font-helvetica font-normal text-slate-400 text-xs leading-tight'
                              >
                                    <span className='text-[#394475]'>Yuk kita berjuang bareng,</span> saling bimbing menuju ibadah yang lebih sempurna, dan saling dekatkan diri kepada Allah dalam satu tujuan, satu ridho, satu cinta.
                              </motion.p>
                        </div>
                  </motion.main>

                  {/* PREVIEW MODAL WITH ANIMATION */}
                  <AnimatePresence>
                        {selectedImage && (
                              <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
                                    onClick={() => setSelectedImage(null)}
                              >
                                    <motion.img
                                          initial={{ scale: 0.8, opacity: 0 }}
                                          animate={{ scale: 1, opacity: 1 }}
                                          exit={{ scale: 0.8, opacity: 0 }}
                                          transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                          src={selectedImage}
                                          alt="preview"
                                          className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
                                    />
                              </motion.div>
                        )}
                  </AnimatePresence>

                  <Navbar />
            </>
      )
}