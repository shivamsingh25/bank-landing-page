import React from "react";

import FeatureImage from "../../Assets/images/featureImage.jpg";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className="text-gray-200 body-font bg-blue-600">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={FeatureImage}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <h5 className="title-font sm:text-3xl text-2xl mb-16 text-white">
            Sprinkle us in your business to Manage and grow business throughout
            the company and the globe.
          </h5>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                Manage multiple accounts
              </h2>
              <p className="leading-relaxed text-base">
                ABC Bank provides businesses with a unique tech system and user
                experience stitched together to save their time and resources.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="text-blue-700 w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                Manage collection and payout
              </h2>
              <p className="leading-relaxed text-base">
                No need to have sleepless nights on month ends anymore. Manage
                expenses, collections, and payouts on the go around the world in
                real-time.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                Get reports on the company finances
              </h2>
              <p className="leading-relaxed text-base">
                ABC Bank regularly provides clients with deep-dived reports on
                financial spent and flags out faulty and suspicious
                transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
