"use client";

import { useContext, useEffect, useRef } from "react";
import { DataContext } from "@/contaxtAPI/contextApi";

const Page = () => {
  const { userName, gender } = useContext(DataContext);
  const audioRef = useRef<any>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => { })
    }
  }, []);

  return (
    <div className="w-full h-200 relative overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/fram.mp4" type="video/mp4" />
      </video>

      {/* 🔊 Music */}
      <audio ref={audioRef} loop>
        <source src="/sound/bgsound.mp3" type="audio/mp3" />
      </audio>
      {/* -------------------------ganesh ji top image----------------------------- */}
      <div className="flex justify-center items-center mt-20">
        <img src="/images/g1.png" alt="Ganeshji" className="absolute w-32 h-32 object-contain" />
      </div>
      {/* -------------------------name of user--------------------------------------- */}
      {/* ✨ Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold text-center bg-black/40 px-6 py-3 rounded-xl">
          {userName
            ? `Hello ${gender === "male" ? "Mr." : "Miss"} ${userName}, you are invited to the poojan`
            : "Oops"}
        </h1>
      </div>
      {/* -------------------------address----------------------------- */}
      <div className="absolute flex flex-col justify-center items-center bottom-10 w-full">
        <div className="flex flex-col  items-center w-66 bg-amber-100/20 backdrop-blur-lg rounded-2xl mb-1 border-2 border-amber-500/60">
          <p className="text-gray-700 sm:font-semibold">Our New Addreass</p>
          <p className="text-gray-800 text-center">74,shivshakti park society,near Chaudhari samaj vadi ,musa road</p>
        </div>
         <div className="border-[6px] border-gray-800/60 rounded-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10528.465593096736!2d73.38571250251644!3d21.09762227475814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be07f80c2ec6345%3A0xddad74394e2241a2!2sShiv%20Shakti%20Park%2CMusa%20Road!5e0!3m2!1sen!2sin!4v1774701008053!5m2!1sen!2sin" width="250" height="100"></iframe>
        </div>
      </div>
      {/* -------------------------bottom----------------------------- */}
    </div>
  );
};

export default Page;