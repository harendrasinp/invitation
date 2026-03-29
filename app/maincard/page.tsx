"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "@/contaxtAPI/contextApi";
import { motion } from "framer-motion";

const Page = () => {
  const { userName, gender } = useContext(DataContext);
  const audioRef = useRef<any>(null);
  const prefix = gender === "Male" ? "Mr." : "Ms.";

  // 🔊 Audio autoplay
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => { });
    }
  }, []);

  // ⏳ Countdown Timer
  const targetDate = new Date("2026-04-23T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) return clearInterval(timer);

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/fram.mp4" type="video/mp4" />
      </video>

      {/* 🔊 Audio */}
      <audio ref={audioRef} loop>
        <source src="/sound/bgsound2.mp3" type="audio/mp3" />
      </audio>

      {/* 🌟 Main Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* 🪔 Ganesh Image */}
        <img
          src="/images/g1.png"
          alt="Ganeshji"
          className="w-28 h-28 mt-10"
        />

        {/* 🕉️ Moving Shlok */}
        <div className="w-full overflow-hidden">
          <motion.p
            className="text-pink-800 whitespace-nowrap text-lg"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </motion.p>
        </div>

        {/* 📩 Letter Section */}
        <motion.div
          className=" w-full  flex items-center justify-center overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height:280 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center w-full h-auto">

            {/* 📩 Letter Image */}
            <img
              src="/images/latter1.png"
              alt="latter-image"
              className="w-96 h-[300px]"
            />

            {/* ✨ Text (NO animation here ❗) */}
            <div className="absolute flex items-center justify-center w-full h-full">
              <div className="text-orange-200 text-[1.2rem] font-semibold font-dancing text-center rounded-xl w-48">
                <p>Namashkar </p>
                <p>
                  {prefix} <span className="text-white">{userName}</span>
                </p>
                <p>
                  We are excited to invite you to our Housewarming Ceremony (Griha Pravesh).
                  Your presence will add joy to our celebration.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
        {/* ⏳ Countdown Timer */}
        <div className="mt-8 text-center bg-black/20 backdrop-blur-[5px] px-6 py-4 rounded-xl">
          <h2 className="text-xl mb-3 text-pink-800">
            Countdown to Griha Pravesh
          </h2>

          <div className="flex gap-6 text-lg text-yellow-200">
            <div>
              <p>{timeLeft.days}</p>
              <span>Days</span>
            </div>
            <div>
              <p>{timeLeft.hours}</p>
              <span>Hours</span>
            </div>
            <div>
              <p>{timeLeft.minutes}</p>
              <span>Minutes</span>
            </div>
            <div>
              <p>{timeLeft.seconds}</p>
              <span>Seconds</span>
            </div>
          </div>
        </div>

        {/* 📍 Address */}
        <div className="mt-10 flex flex-col items-center">
          <div className="bg-amber-100/20 backdrop-blur-md rounded-xl border border-amber-400 px-4 py-2 text-center">
            <p className="text-pink-800 font-semibold">Our New Address</p>
            <p className="text-pink-800 text-sm">
              74, Shivshakti Park Society, Near Chaudhari Samaj Vadi, Musa Road
            </p>
          </div>

          <div className="mt-3 border-4 border-gray-700 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10528.465593096736!2d73.38571250251644!3d21.09762227475814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be07f80c2ec6345%3A0xddad74394e2241a2!2sShiv%20Shakti%20Park%2CMusa%20Road!5e0!3m2!1sen!2sin"
              width="250"
              height="120"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;