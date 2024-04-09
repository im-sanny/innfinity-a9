import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ServiceCard = ({ service }) => {
  const {
    estate_title,
    image,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    view_property_button,
  } = service;
  return (
    <div>
      <Card className="px-4 pb-4 bg-base-300 rounded-lg h-full">
        <CardHeader shadow={false} floated={false} className="h-96 rounded-lg">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <div className="card-actions justify mt-2">
          <div className="badge badge-outline">{status}</div>
          <div className="badge badge-outline">{area}</div>
        </div>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {estate_title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 lg:h-20 items-stretch"
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-around ">
          <Button
            ripple={false}
            fullWidth={""}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 btn mt-2"
          >
            {view_property_button}
          </Button>
          <Button
            ripple={false}
            fullWidth={""}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 btn mt-2"
          >
            View details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ServiceCard;
