import { FaArrowRightLong } from "react-icons/fa6";
const ExploreProperties = () => {
  return (
    <>
      <div className="carousel carousel-center w-full lg:w-6xl p-4 lg:mx-auto space-x-4  rounded-box">
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
      </div>
      <div className="">
        <h2 className="flex justify-center items-center text-2xl">
          Press <FaArrowRightLong className="mx-2"></FaArrowRightLong> to swipe
        </h2>
      </div>
    </>
  );
};

export default ExploreProperties;
