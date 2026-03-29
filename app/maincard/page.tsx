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
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true" && audioRef.current) {
    audioRef.current.play().catch(() => {});
  }

  const playOnClick = () => {
    audioRef.current?.play().catch(() => {});
    document.removeEventListener("click", playOnClick);
  };

  document.addEventListener("click", playOnClick);

  return () => {
    document.removeEventListener("click", playOnClick);
  };
}, []);

  // ⏳ Countdown Timer
  const targetDate = new Date("2026-04-23T08:00:00").getTime();

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
    <div className="relative w-full min-h-screen text-white">

      {/* 🎥 Background Video (FIXED ✅) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
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
          initial={{ height: 20 }}
          animate={{ height: 352 }}
          transition={{ duration: 2, ease: "easeInOut" }}>
          <div className=" relative flex items-center justify-center w-full h-auto">

            <img
              src="/images/latter1.png"
              alt="latter-image"
              className="w-80 h-auto object-contain"
            />

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
                <p className="text-white"> Ankur.U.chaudhary</p>
              </div>
            </div>

          </div>
        </motion.div>

        <div>
          <img src="/images/family.png" alt="family photo" width={500} />
        </div>

        {/* ⏳ Countdown Timer */}
        <div className="mt-8 text-center bg-black/20 backdrop-blur-[5px] px-6 py-4 rounded-xl">
          <h2 className="mb-3 text-pink-900">
            Date:<span className="text-pink-900 font-bold font-dancing"> 23/04/2026, તિથિ-વૈશાખ સુદ  સાતમ</span>
          </h2>

          <div className="flex gap-6  text-yellow-200">
            <div>
              <p>{timeLeft.days}</p>
              <span className="text-xl mb-3 text-pink-900 ">Days</span>
            </div>
            <div>
              <p>{timeLeft.hours}</p>
              <span className="text-xl mb-3 text-pink-900">Hours</span>
            </div>
            <div>
              <p>{timeLeft.minutes}</p>
              <span className="text-xl mb-3 text-pink-900">Minutes</span>
            </div>
            <div>
              <p>{timeLeft.seconds}</p>
              <span className="text-xl mb-3 text-pink-900">Seconds</span>
            </div>
          </div>
        </div>

        {/* 📍 Address */}
        <div className="mt-10 flex flex-col items-center">
          <div className="bg-amber-100/20 backdrop-blur-md rounded-xl border border-amber-400 px-4 py-2 text-center">
            <p className="text-pink-800 font-bold">Our New Address</p>
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

        <div className="w-full bg-blue-950/60 backdrop-blur-md p-1 text-center mt-1 text-[0.8rem]">
          <p>© 2026 VayuSoftware | Harendrasinh Parmar </p>
          <p>Contact:+91-9867775626</p>
        </div>

      </div>
    </div>
  );
};

export default Page;