"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "@/contaxtAPI/contextApi";
import { motion } from "framer-motion";

const Page = () => {
  const { userName, gender } = useContext(DataContext);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [start, setStart] = useState(false);

  const prefix = gender === "male" ? "Mr." : "Ms.";

  // 👉 Start audio on user interaction
  const handleStart = () => {
    setStart(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">

      {/* 👉 Start Screen (Mobile Fix) */}
      {!start && (
        <div
          onClick={handleStart}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white text-xl cursor-pointer"
        >
          Tap to Enter 🎉
        </div>
      )}

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/fram.mp4" type="video/mp4" />
      </video>

      {/* 🔊 Audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/sound/bgsound2.mp3" type="audio/mp3" />
      </audio>

      {/* 🎬 Main Content */}
      {start && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full relative"
        >

          {/* 🪔 Ganesh Image */}
          <div className="flex justify-center mt-16">
            <motion.img
              src="/images/g1.png"
              alt="Ganeshji"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="w-32 h-32"
            />
          </div>

          {/* 💌 Invitation Letter */}
          <div className="absolute h-80 w-full flex items-center justify-center">
            <motion.img
              src="/images/latter1.png"
              alt="letter"
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-80 h-60"
            />

            {/* ✨ Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-orange-200 text-[1.2rem] font-dancing text-center px-6 py-3 w-60"
              >
                <p>Namashkar {prefix} {userName}</p>
                <p>You are invited to the Vastu poojan</p>
              </motion.div>
            </div>
          </div>

          {/* 📍 Address */}
          <div className="absolute flex flex-col items-center bottom-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col items-center w-72 bg-amber-100/20 backdrop-blur-lg rounded-2xl mb-2 border-2 border-amber-500/60"
            >
              <p className="text-gray-700 font-semibold">Our New Address</p>
              <p className="text-gray-800 text-center px-2">
                74, Shivshakti Park Society, near Chaudhari Samaj Vadi, Musa Road
              </p>
            </motion.div>

            <div className="border-[6px] border-gray-800/60 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10528.465593096736!2d73.38571250251644!3d21.09762227475814"
                width="250"
                height="100"
              ></iframe>
            </div>
          </div>

        </motion.div>
      )}
    </div>
  );
};

export default Page;