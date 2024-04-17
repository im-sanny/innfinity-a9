import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import DetailsBanner from "./DetailsBanner";

const CardDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const service = details.find((detail) => detail.id == idInt);
  // console.log(service);
  return (
    <>
      <Helmet>
        <title>Innfinity | ShowDetails</title>
      </Helmet>
      <div className="navbar flex justify-center bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg">
        <button className="flex justify-center font-bold text-xl">
          Show Details
        </button>
      </div>
      <DetailsBanner></DetailsBanner>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-blue-50 rounded-lg my-5">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded-lg">
          <img
            src={service.image}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-lg"
          />
          <div className="p-6 pb-6 m-4 mx-auto -mt-16 space-y-2 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {service.estate_title}
              </a>
              <p className="text-xs dark:text-gray-600">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline flex items-center gap-1"
                >
                  <FaLocationDot></FaLocationDot> {service.location}
                </a>
              </p>
            </div>
            <div className="dark:text-gray-800">
              {service.description}
              <div className="flex gap-5 mt-2">
                <p>{service.facilities[0]}</p>
                <p>{service.facilities[1]}</p>
                <p>{service.facilities[2]}</p>
              </div>
              <p className="flex items-center gap-1">
                Segment: {service.segment_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
