import React from "react";
import LoginRegisterForm from "../LoginRegisterForm";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const scrollDown = () =>{
    window.scrollTo({
      top: 800, 
      behavior: 'smooth'
    });
  };
  return (
    <section className="text-gray-600 body-font h-full sm:mb-28 sm:mt-16">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-4xl font-bold mb-4 text-gray-900">
            Truly borderless
            <br className="hidden lg:inline-block" />
            banking.
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
            ABC Bank provides businesses with a one-stop portal to manage
            multi-currency accounts, payments, collections, and expenses
            worldwide.
          </p>
          <div className="flex justify-center">
            <button onClick={scrollDown} className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded-lg text-lg">
              Learn more
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 container mx-auto p-4 bg-gray-100 drop-shadow-xl rounded-lg">
          <LoginRegisterForm/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
