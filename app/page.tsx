

export default function Home() {
  return (
    <div className="h-screen w-full p-10">
      <div className="h-80 w-full bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/ganeshji2.png')" }}></div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">VASTU POOJAN</h1>
        <p className="text-lg text-green-500 mb-8">Join us for the inauguration of our new business.</p>
        <a href="/rsvp" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">RSVP Now</a>
      </div>
    </div>
  );
}