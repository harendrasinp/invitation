"use client"
import { useContext } from "react";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { DataContext } from "../contaxtAPI/contextApi";

export default function Home() {

  const router = useRouter();
  const [localName, setLocalName] = useState("");
  const [localGender, setLocalGender] = useState("");
  const { setUserName, setGender } = useContext(DataContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!localName || !localGender) {
      alert("Please enter your name and select your gender");
      return;
    }
    setUserName(localName);
    setGender(localGender);
    localStorage.setItem("playMusic", "true");
    router.push("/maincard")

  }
  return (
    <div className="h-screen w-full p-2">
      {/* -----------------------ganesh ji image-------------------------------*/}
      <div className="h-100 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ganeshji2.png')" }}></div>
      {/* -------------------------form and title area----------------------------- */}
      <div className="flex flex-col items-center justify-center mt-1 ">
        <h1 className="text-4xl text-pink-800 mb-1 font-great-vibes">Vastu poojan</h1>
        <p className="text-orange-500 mb-2 font-dancing text-2xl text-center">Join us for the inauguration of our new House.</p>
        {/* ---------------------------Form---------------------------- */}
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
          <input type="text" className="mt-1 p-1 border border-gray-300 rounded-lg w-full max-w-sm"
            placeholder="Your Name"
            name="name"
            value={localName}
            onChange={(e) => setLocalName(e.target.value)} />
          <div>
            <label className="block mt-2 text-sm text-gray-700">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={localGender === "male"}
                onChange={(e) => setLocalGender(e.target.value)} /> Male
            </label>

            <label className="block mt-2 text-sm text-gray-700">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={localGender === "female"}
                onChange={(e) => setLocalGender(e.target.value)} /> Female
            </label>
          </div>
          <button type="submit" className="mt-2 px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-pink-700 transition duration-300">Open Invitation</button>
        </form>
      </div>
    </div>
  );
}