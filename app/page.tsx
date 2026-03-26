"use client"
import { clear } from "console";
import { use, useState } from "react"


export default function Home() {
  const [formData, setFormData] = useState({name: "", gender: ""});
  const handleChange=(e:any)=>{
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    alert(`Welcome ${formData.name}, you are invited to the Vastu poojan!`);
    setFormData({
    name: "",
    gender: "",
  });
  }
  return (
    <div className="h-screen w-full p-2">
      <div className="h-100 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ganeshji2.png')" }}></div>
      <div className="flex flex-col items-center justify-center mt-1">
        <h1 className="text-4xl text-pink-800 mb-1 font-great-vibes">Vastu poojan</h1>
        <p className="text-orange-500 mb-2 font-dancing text-2xl text-center">Join us for the inauguration of our new House.</p>
        {/* ---------------------------Form---------------------------- */}
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
          <input type="text"className="mt-1 p-1 border border-gray-300 rounded-lg w-full max-w-sm"
          placeholder="Your Name" 
          name="name" 
          value={formData.name}
          onChange={handleChange} />
          <div>
            <label className="block mt-2 text-sm text-gray-700">
              <input 
              type="radio" 
              name="gender" 
              value="male" 
              checked={formData.gender === "male"}
              onChange={handleChange}/> Male
            </label>

            <label className="block mt-2 text-sm text-gray-700">
              <input 
              type="radio" 
              name="gender" 
              value="female" 
              checked={formData.gender === "female"}
              onChange={handleChange}/> Female
            </label>
          </div>
          <button type="submit" className="mt-2 px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-pink-700 transition duration-300">Open Invitation</button>
        </form>
      </div>
    </div>
  );
}