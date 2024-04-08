const Home = () => {
  return (
    <div className="mx-5 lg:max-w-6xl lg:h-full h-96 lg:mx-auto">
      <div className="carousel w-full rounded-md">
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
                Where hospitality meets perfection. Immerse yourself in comfort
                and luxury as we redefine your travel experience.
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
                Embrace serenity in a haven designed for ultimate relaxation and
                refined living.
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
  );
};

export default Home;
