import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import ExploreProperties from "../ServiceCard/ExploreProperties";
import ChoseSection from "../ServiceCard/ChoseSection";
import { Helmet } from "react-helmet";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);

  return (
    <>
    <Helmet>
      <title>Innfinity | Home</title>
    </Helmet>
      {/* banner section */}
      <div className="mx-5 lg:max-w-6xl lg:h-full lg:mx-auto">
        <div className="carousel w-full rounded-md my-5">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/m9MWpdm/hotel-7885138-1920.jpg"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "calc(100vh - 8rem)" }} // Set maximum height to maintain aspect ratio
              alt="Hotel Image"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <div className="glass p-2 text-center lg:max-w-96 mx-auto rounded-lg overflow-hidden">
                <h1 className="lg:text-4xl text-2xl text-black font-bold">
                  Welcome to Innfinity
                </h1>
                <p className="">
                  Where hospitality meets perfection. Immerse yourself in
                  comfort and luxury as we redefine your travel experience.
                </p>
                <a href="#slide4" className="btn btn-sm btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-sm btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/yWpBqhW/house-8294010-1920.jpg"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "calc(100vh - 8rem)" }}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <div className="glass p-2 text-center lg:max-w-96 mx-auto rounded-lg overflow-hidden">
                <h1 className="lg:text-3xl text-2xl text-black font-bold">
                  Indulge in luxury at Innfinity.
                </h1>
                <p>
                  Experience impeccable service, exquisite accommodations, and
                  unforgettable moments. Welcome to unparalleled hospitality.
                </p>
                <a href="#slide1" className="btn btn-sm btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-sm btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/YbyB9bh/usa-4468255-1920.jpg"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "calc(100vh - 8rem)" }}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <div className="glass p-2 text-center lg:max-w-96 mx-auto rounded-lg overflow-hidden">
                <h1 className="lg:text-3xl text-2xl">Elegance and comfort</h1>
                <p>
                  {" "}
                  define Innfinity define every stay is a blend of luxury,
                  sophistication, and impeccable hospitality.
                </p>
                <a href="#slide2" className="btn btn-sm btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-sm btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/QPYfxvb/pexels-c-trung-o-17748656.jpg"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "calc(100vh - 8rem)" }}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <div className="glass p-2 text-center lg:max-w-96 mx-auto rounded-lg overflow-hidden">
                <h1 className="lg:text-3xl text-2xl">
                  At Innfinity, tranquility meets luxury.
                </h1>
                <p>
                  Embrace serenity in a haven designed for ultimate relaxation
                  and refined living.
                </p>
                <a href="#slide3" className="btn btn-sm btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-sm btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* estate section */}
      <div className="text-center flex justify-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl  lg:mx-0 mx-5 mb-5"> Discover Our Best Deals</h1>
          <p className="mt-2 lg:mx-0 mx-10 lg:mb-0 mb-5">
            Discover unbeatable deals across our array of accommodations:
            hotels, motels, resorts, vacation rentals, lodges, and guesthouses.
            Experience luxury and savings with Innfinity.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:mx-0 mx-5 grid-cols-1 gap-5 lg:my-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      
      {/* more properties */}
      <div className="text-center max-w-6xl mx-5">
        <h2 className="text-5xl font-normal mt-5 lg:mt-0 mb-5">
          Discover more services we provide
        </h2>
        <div className="flex justify-center">

        <p className="max-w-3xl flex justify-center mb-5">
          Innfinity offers unmatched luxury. Impeccable service, elegant
          accommodations, and breathtaking ambiance. A haven for unforgettable
          experiences awaits. Book now!
        </p>
        </div>
        <ExploreProperties></ExploreProperties>
      </div>
      <div className="my-10">
        <ChoseSection></ChoseSection>
      </div>
    </>
  );
};

export default Home;
