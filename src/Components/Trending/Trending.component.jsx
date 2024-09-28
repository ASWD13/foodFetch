const TrendingComponent = () => {
  return (
    <div className="container lg:px-5 py-10 mx-auto flex flex-wrap">
      <div className="lg:w-[95%] mx-auto w-[100%]">
        <div
          className="flex flex-wrap w-full bg-gray-800 py-32 lg:px-10 relative mb-4"
          data-aos="flip-up"
        >
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
            src="https://blog.dubailocal.ae/wp-content/uploads/2023/03/banner-23.jpg"
          />
          <div className="text-center relative z-10 w-full">
            <h2 className="text-2xl text-white font-medium title-font mb-2">
              Discover Whats trending in your town
            </h2>
            <p className="leading-relaxed">
              Guess it may be PIZZA or Burgir and what not?
            </p>
            <a className="mt-3 text-indigo-300 inline-flex items-center">
              Dive deep
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
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-1/2" data-aos="fade-right">
            <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://dummyimage.com/542x460"
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-xl text-white font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed">Sanskruti Restaurant</p>
                <a className="mt-3 text-indigo-300 inline-flex items-center">
                  Learn More
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
          </div>
          <div className="px-2 w-1/2" data-aos="fade-left">
            <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://dummyimage.com/542x420"
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-xl text-white font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </p>
                <a className="mt-3 text-indigo-300 inline-flex items-center">
                  Learn More
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingComponent;
