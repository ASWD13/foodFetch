import { useEffect, useState } from "react";
import HotelCardComponent from "./hotel.card.component";
import { appAxios } from "../../utils/apiConfig";
import HomeBannerImg from "../../images/HomeBannerImg.jpg";
import Banner1 from "../../images/Banner1.jpg";
import Banner2 from "../../images/Banner2.jpg";
const TrendingComponent = () => {
  const [allRestarunts, setAllRestarunts] = useState([]);

  const getRestrauts = async () => {
    const {
      data: { data },
    } = await appAxios.get("/restaurants", {
      params: {
        populate: "*",
      },
    });
    setAllRestarunts(data);
  };

  useEffect(() => {
    getRestrauts();
  }, []);

  return (
    <div className="container lg:px-5 py-10 mx-auto flex flex-wrap">
      <div className="lg:w-[95%] mx-auto w-[100%]">
        <div
          className="flex flex-wrap w-full bg-gray-800 py-32 lg:px-10 relative mb-4"
          data-aos="flip-up"
        >
          <img
            alt="gallery"
            className="w-full object-center h-full object-center block opacity-50 absolute inset-0"
            src={HomeBannerImg}
          />
          <div className="text-center relative z-10 w-full">
            <h2 className="text-2xl text-white font-medium title-font mb-2">
              For Those Who Live to Eat!
            </h2>
            <p className="leading-relaxed text-white">
              Explore. Taste. Indulge!
            </p>
            <a className="mt-3 text-indigo-300 inline-flex items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-center">
            Find your Favourite Restaurant just one click away!
          </h2>
          <hr className="bg-black  mb-4" />

          <div className="flex flex-wrap gap-8 justify-center">
            {allRestarunts?.map((hotel) => {
              return (
                <HotelCardComponent
                  key={hotel.id}
                  hotelData={{ ...hotel.attributes, id: hotel.id }}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mt-3">
          <div className="px-2 w-1/2" data-aos="fade-right">
            <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src={Banner2}
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-xl text-white font-medium title-font mb-2">
                  Where Every Dish Tells a Story!
                </h2>
              </div>
            </div>
          </div>
          <div className="px-2 w-1/2" data-aos="fade-left">
            <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src={Banner1}
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-xl text-white font-medium title-font mb-2">
                  Eat, Share, Repeat!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingComponent;
