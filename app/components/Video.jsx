import Sky from '../assets/sky1.mov';

const Video = () => {
  return (
    <div
      name="listen"
      className="relative min-h-[50vh] flex justify-center items-center text-center sm:text-left -mt-0.5"
      style={{zIndex: 900}} // Making the z-index less than that of the menu
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover border-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={Sky} type="video/mp4" />
      </video>
      <div className="z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 w-full">
        <p className="text-center text-white text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold p-2 sm:p-0">
          A brand built off of Motivation & Positivity.
        </p>
        <p className="text-center text-white text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold p-2 sm:p-0">
          Hoping for the best, while expecting the worst.
        </p>
      </div>
    </div>
  );
};

export default Video;
