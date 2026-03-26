

export default function Home() {
  return (
    <div className="h-screen w-full p-5">
      <div className="h-100 w-full bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/ganeshji2.png')" }}></div>
      <div className="flex flex-col items-center justify-center mt-1">
        <h1 className="text-4xl  text-purple-800 mb-4 font-great-vibes">Vastu poojan</h1>
        <p className="text-amber-600 mb-2 font-dancing text-2xl text-center">Join us for the inauguration of our new House.</p>
        <a href="/rsvp" className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-pink-700 transition duration-300">Open Invitation</a>
      </div>
    </div>
  );
}