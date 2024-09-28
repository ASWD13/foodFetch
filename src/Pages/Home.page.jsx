import { useEffect, useState } from "react";
import { appAxios } from "../utils/apiConfig";
import TrendingComponent from "../Components/Trending/Trending.component";

function HomePage() {
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
          <h2 className="title-font text-center font-medium sm:text-4xl py-3 text-3xl text-gray-900">
            Craving? 🍜 We’ve got your favorites on the way 💖
          </h2>
          <hr />
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                {pupularCities?.map((city, i) => (
                  <div
                    key={i}
                    className="p-4 sm:w-1/4 w-1/2"
                    data-aos="flip-left"
                    data-aos-duration="1500"
                  >
                    <h2 className="title-font font-medium sm:text-3xl text-2xl text-gray-900">
                      {city.attributes.Description}
                    </h2>
                    <p className="leading-relaxed text-2xl">
                      {city.attributes.Name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <TrendingComponent />
    </>
  );
}

export default HomePage;
