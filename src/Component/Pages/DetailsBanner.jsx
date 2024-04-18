import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DetailsBanner = () => {
  const welcomeMessages = [
    "Welcome to our website!",
    "Hello and welcome!",
    "We're glad to have you here!",
    "Welcome aboard!",
    "Thanks for visiting us!",
    "Welcome to the family!",
  ];

  const generateWelcomeText = () => {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    return welcomeMessages[randomIndex];
  };
  return (
    <>
      <div className="my-5 rounded-lg max-w-6xl md:p-8 p-5 lg:p-10 bg-green-50">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          // loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="">
            <SwiperSlide>
              <div
                className="slide slide1 rounded-lg"
                style={{
                  backgroundImage: `url('https://i.ibb.co/VJQVm82/pexels-mikhail-nilov-7820324.jpg')`,
                  backgroundSize: "100% auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "400px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <h2 className="text-2xl md:text-5xl font-bold glass p-10 rounded-lg text-white">
                    {generateWelcomeText()}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide slide2 rounded-lg"
                style={{
                  backgroundImage: `url('https://i.ibb.co/bdzbRjz/pexels-andrea-piacquadio-3771811.jpg')`,
                  backgroundSize: "100% auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "400px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <h2 className="text-2xl md:text-5xl font-bold glass p-10 rounded-lg text-white">
                    {generateWelcomeText()}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide slide3 rounded-lg"
                style={{
                  backgroundImage: `url('https://i.ibb.co/zxvt4mP/pexels-cottonbro-studio-6466292.jpg')`,
                  backgroundSize: "100% auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "400px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <h2 className="text-2xl md:text-5xl font-bold glass p-10 rounded-lg text-white">
                    {generateWelcomeText()}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide slide4 rounded-lg"
                style={{
                  backgroundImage: `url('https://i.ibb.co/GCn8TZ8/pexels-fauxels-3184357.jpg')`,
                  backgroundSize: "100% auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "400px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <h2 className="text-2xl md:text-5xl font-bold glass p-10 rounded-lg text-white">
                    {generateWelcomeText()}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default DetailsBanner;
