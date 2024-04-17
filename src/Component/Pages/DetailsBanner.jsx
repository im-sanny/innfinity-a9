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
  // Generate a random welcome message
  const welcomeText = generateWelcomeText();
  return (
    <>
    <div className="p-5 bg-green-50 my-5 md:my-10 rounded-md max-w-6xl flex justify-center">

      <div className="my-5 rounded-lg max-w-5xl">
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
          loop={true}
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
                 <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h2 className="text-2xl md:text-5xl font-bold text-white">{welcomeText}</h2>
                  <p className="text-lg text-white">Your text here</p>
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
                 <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h2 className="text-2xl md:text-5xl font-bold text-white">{welcomeText}</h2>
                  <p className="text-lg text-white">Your text here</p>
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
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h2 className="text-2xl md:text-5xl font-bold text-white">{welcomeText}</h2>
                  <p className="text-lg text-white">Your text here</p>
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
                 <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h2 className="text-2xl md:text-5xl font-bold text-white">{welcomeText}</h2>
                  <p className="text-lg text-white">Your text here</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default DetailsBanner;
