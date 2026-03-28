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
    <div className="w-full h-screen relative overflow-hidden">

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
      <div className="flex justify-center items-center mt-20">
        <img src="/images/g1.png" alt="Ganeshji" className="absolute w-32 h-32 object-contain" />
      </div>

      {/* ✨ Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold text-center bg-black/40 px-6 py-3 rounded-xl">
          {userName
            ? `Hello ${gender === "male" ? "Mr." : "Miss"} ${userName}, you are invited to the poojan`
            : "Oops"}
        </h1>
      </div>

    </div>
  );
};

export default Page;