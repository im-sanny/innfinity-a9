import { FaArrowRightLong } from "react-icons/fa6";
const ExploreProperties = () => {
  return (
    <div>
      <div className="carousel carousel-center max-w-6xl p-4 mx-5 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item w-[280px] ">
          <img
            src="https://i.ibb.co/72Qx2YK/pexels-alexander-dummer-134469.jpg"
            className="rounded-box object-cover"
          />
        </div>
        <div className="carousel-item w-[280px]">
          <img
            src="https://i.ibb.co/3SscBBV/pexels-medhat-ayad-447592.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item w-[280px]">
          <img
            src="https://i.ibb.co/MRj89rx/pexels-medhat-ayad-439227.jpg"
            className="rounded-box object-cover"
          />
        </div>
        <div className="carousel-item w-[280px]">
          <img
            src="https://i.ibb.co/GCn8TZ8/pexels-fauxels-3184357.jpg"
            className="rounded-box object-cover"
          />
        </div>
        <div className="carousel-item w-[280px]">
          <img
            src="https://i.ibb.co/0nfHCjm/pexels-robin-1020370.jpg"
            className="rounded-box object-cover"
          />
        </div>
        <div>
          <h2>Press {FaArrowRightLong} to swipe</h2>
        </div>
      </div>
    </div>
  );
};

export default ExploreProperties;
