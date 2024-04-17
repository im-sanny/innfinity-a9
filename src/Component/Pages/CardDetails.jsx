import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import DetailsBanner from "./DetailsBanner";

const CardDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const service = details.find((detail) => detail.id == idInt);
  return (
    <>
      <Helmet>
        <title>Innfinity | ShowDetails</title>
      </Helmet>
      <DetailsBanner></DetailsBanner>
      <div className="navbar flex justify-center bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg">
        <button className="flex justify-center font-normal text-2xl">
          Show Details
        </button>
      </div>
      <div className="mx-auto p-10 lg:p-16 md:p-16 bg-blue-50 rounded-lg my-5">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded-lg">
          <img
            src={service.image}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-lg"
          />
          <div className="p-6 pb-6 m-4 mx-auto glass -mt-16 space-y-2 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
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
                  className="text-sm font-normal hover:underline flex items-center gap-1 text-green-600"
                >
                  <FaLocationDot></FaLocationDot> {service.location}
                </a>
              </p>
            </div>
            <div className="dark:text-gray-800">
              {service.description}
              <div className="flex font-normal text-blue-500 gap-5 mt-2">
                <span className="font-bold text-black">Facilities :</span>{" "}
                <p>{service.facilities[0]}</p>
                <p>{service.facilities[1]}</p>
                <p>{service.facilities[2]}</p>
              </div>
              <p className="flex items-center gap-5">
                <span className="font-bold">Segment :</span>
                <span className="text-blue-500">{service.segment_name} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
