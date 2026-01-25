"use client";

import { CircleFadingPlus, Gift, Images, Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

export default function Navbar() {
      const pathname = usePathname();

      const audioRef = useRef<HTMLAudioElement>(null);
      const [isPlaying, setIsPlaying] = useState(false);

      const toggleMusic = () => {
            if (!audioRef.current) return;

            if (isPlaying) {
                  audioRef.current.pause();
                  setIsPlaying(false);
            } else {
                  audioRef.current.play();
                  setIsPlaying(true);
            }
      };

      const menu = [
            { href: "/", label: "Story", icon: CircleFadingPlus, type: "link" },
            { href: "/gallery", label: "Gallery", icon: Images, type: "link" },
            { href: "/birthday", label: "Birthday", icon: Gift, type: "link" },
            { href: "#", label: "Music", icon: Music, type: "music" },
      ];

      return (
            <>
                  {/* Audio */}
                  <audio ref={audioRef} src="/backsong.mp3" loop />

                  <motion.nav
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full h-max fixed z-50 bottom-5 inset-x-0 px-5"
                  >
                        <div className="w-full md:max-w-[360px] max-w-none mx-auto h-max bg-[#FEFAFB] rounded-full p-4 
        flex justify-around items-center gap-2 shadow-lg">

                              {menu.map((item, i) => {
                                    const Icon = item.icon;
                                    const isActive = pathname === item.href;

                                    // Special button untuk Music
                                    if (item.type === "music") {
                                          return (
                                                <motion.button
                                                      key={i}
                                                      whileTap={{ scale: 0.9 }}
                                                      onClick={toggleMusic}
                                                      className="flex items-center justify-center flex-col gap-1 relative"
                                                >
                                                      <div className="h-[20px] flex items-center justify-center">
                                                            <AnimatePresence mode="wait">
                                                                  {!isPlaying ? (
                                                                        <motion.div
                                                                              key="icon-music"
                                                                              initial={{ scale: 0, opacity: 0 }}
                                                                              animate={{ scale: 1, opacity: 1 }}
                                                                              exit={{ scale: 0, opacity: 0 }}
                                                                        >
                                                                              <Icon size={20} className="text-[#394475]" />
                                                                        </motion.div>
                                                                  ) : (
                                                                        <motion.div
                                                                              key="equalizer"
                                                                              initial={{ scale: 0, opacity: 0 }}
                                                                              animate={{ scale: 1, opacity: 1 }}
                                                                              exit={{ scale: 0, opacity: 0 }}
                                                                              className="flex gap-[3px] items-end h-[16px]"
                                                                        >
                                                                              <span className="w-[3px] h-2 bg-[#e9a1b3] animate-eq1 rounded"></span>
                                                                              <span className="w-[3px] h-4 bg-[#e9a1b3] animate-eq2 rounded"></span>
                                                                              <span className="w-[3px] h-3 bg-[#e9a1b3] animate-eq3 rounded"></span>
                                                                        </motion.div>
                                                                  )}
                                                            </AnimatePresence>
                                                      </div>

                                                      <span
                                                            className={`text-xs font-medium transition-colors duration-300 ${isPlaying ? "text-[#e9a1b3]" : "text-[#394475]"
                                                                  }`}
                                                      >
                                                            Music
                                                      </span>
                                                </motion.button>
                                          );
                                    }

                                    // Normal menu (Link)
                                    return (
                                          <Link
                                                key={i}
                                                href={item.href}
                                                className="flex items-center justify-center flex-col gap-1 relative"
                                          >
                                                <motion.div
                                                      whileTap={{ scale: 0.9 }}
                                                      className="flex flex-col items-center gap-1"
                                                >
                                                      <Icon
                                                            size={20}
                                                            className={`transition-colors duration-300 ${isActive ? "text-[#e9a1b3]" : "text-[#394475]"}`}
                                                      />
                                                      <span
                                                            className={`text-xs font-medium transition-colors duration-300 ${isActive ? "text-[#e9a1b3]" : "text-[#394475]"
                                                                  }`}
                                                      >
                                                            {item.label}
                                                      </span>
                                                </motion.div>

                                                {/* Active Indicator (Dot) */}
                                                {isActive && (
                                                      <motion.div
                                                            layoutId="active-dot"
                                                            className="absolute -top-1 w-1 h-1 bg-[#e9a1b3] rounded-full"
                                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                      />
                                                )}
                                          </Link>
                                    );
                              })}

                        </div>
                  </motion.nav>
            </>
      );
}