const page = () => {
  return (
    <div  className="w-full h-screen">
        <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="images/fram.mp4" type="video/mp4" />
    </video>
    </div>
  )
}
export default page
