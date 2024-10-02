import { useEffect, useState } from "react";
import { appAxios } from "../utils/apiConfig";
import TrendingComponent from "../Components/Trending/Trending.component";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel"



function HomePage({ locationDetails }) {
  const [pupularCities, setPupularCities] = useState([]);

  useEffect(() => {
    getallCities();
  }, []);
  const getallCities = async () => {
    const { data } = await appAxios.get("/cities");

    setPupularCities(data?.data);
  };
  return (
    <>
      <section className="text-gray-400  body-font">
        <div>
          <h2 className="title-font text-center font-medium sm:text-4xl py-3 text-3xl dark:text-gray-200  text-gray-800">
            Craving? 🍜 We’ve got your favorites on the way 💖
          </h2>
          <hr />
          <section className="text-gray-600 body-font">
            <div className="container py-5 mx-auto">
              <div className="mx-16">
                <Carousel

                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {pupularCities?.map((city, i) => (
                      <CarouselItem
                        className="pl-1 md:basis-1/3 lg:basis-1/4"

                        key={i}
                      >

                        <div
                          className="p-4 sm:w-1/4 w-1/2"
                          data-aos="flip-left"
                          data-aos-duration="1500"
                        >
                          <h2 className="title-font font-medium sm:text-3xl text-2xl dark:text-gray-200 text-gray-900">
                            {city.attributes.Description}
                          </h2>
                          <p className="leading-relaxed dark:text-gray-400 text-2xl">
                            {city.attributes.Name}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>



              </div>
            </div>
          </section>
        </div>
      </section>
      <TrendingComponent locationDetails={locationDetails} />
    </>
  );
}

export default HomePage;
