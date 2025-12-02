"use client";

import { CircleFadingPlus, Gift, Images, Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

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

                  <nav className="w-full h-max fixed z-50 bottom-5 inset-x-0 px-5">
                        <div className="w-full md:max-w-[360px] max-w-none mx-auto h-max bg-[#FEFAFB] rounded-full p-4 
        flex justify-around items-center gap-2 shadow-lg">

                              {menu.map((item, i) => {
                                    const Icon = item.icon;
                                    const isActive = pathname === item.href;

                                    // Special button untuk Music
                                    if (item.type === "music") {
                                          return (
                                                <button
                                                      key={i}
                                                      onClick={toggleMusic}
                                                      className="flex items-center justify-center flex-col gap-1"
                                                >
                                                      {!isPlaying ? (
                                                            <Icon
                                                                  size={20}
                                                                  className="text-[#394475]"
                                                            />
                                                      ) : (
                                                            // Equalizer Animation Spotify-like
                                                            <div className="flex gap-[3px] items-end h-[20px]">
                                                                  <span className="w-[3px] h-2 bg-[#e9a1b3] animate-eq1 rounded"></span>
                                                                  <span className="w-[3px] h-4 bg-[#e9a1b3] animate-eq2 rounded"></span>
                                                                  <span className="w-[3px] h-3 bg-[#e9a1b3] animate-eq3 rounded"></span>
                                                            </div>
                                                      )}

                                                      <span
                                                            className={`text-xs font-medium ${isPlaying ? "text-[#e9a1b3]" : "text-[#394475]"
                                                                  }`}
                                                      >
                                                            Music
                                                      </span>
                                                </button>
                                          );
                                    }

                                    // Normal menu (Link)
                                    return (
                                          <Link
                                                key={i}
                                                href={item.href}
                                                className="flex items-center justify-center flex-col gap-1"
                                          >
                                                <Icon
                                                      size={20}
                                                      className={isActive ? "text-[#e9a1b3]" : "text-[#394475]"}
                                                />
                                                <span
                                                      className={`text-xs font-medium ${isActive ? "text-[#e9a1b3]" : "text-[#394475]"
                                                            }`}
                                                >
                                                      {item.label}
                                                </span>
                                          </Link>
                                    );
                              })}

                        </div>
                  </nav>
            </>
      );
}
