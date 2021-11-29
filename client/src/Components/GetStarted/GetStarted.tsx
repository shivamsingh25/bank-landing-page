import React from "react";

// icon images
import cash from "../../Assets/images/cash.png";
import wallet from "../../Assets/images/wallet.png";
import Smoney from "../../Assets/images/Smoney.png";
import Rmoney from "../../Assets/images/Rmoney.png";
import Vcards from "../../Assets/images/Vcards.png";
import Rcards from "../../Assets/images/Rcards.png";

interface GetStartedProps {}

const GetStarted: React.FC<GetStartedProps> = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Get quality features under one roof
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            We want finance to be a seamless experience for everyone. We will
            take care of all business jargon and complex codes for you while you
            relax.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center space-x-4">
              <img src={cash} alt="e-Cash" />
              <span className="title-font font-medium">e-Cash</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center space-x-4">
              <img src={wallet} alt="e-Wallet" />
              <span className="title-font font-medium">e-Wallet</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center space-x-4">
              <img src={Smoney} alt="Send Money" />
              <span className="title-font font-medium">Send Money</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center space-x-4">
              <img src={Rmoney} alt="Receive Money" />
              <span className="title-font font-medium">Receive Money</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center space-x-4">
              <img src={Vcards} alt="Virtual Cards" />
              <span className="title-font font-medium">Virtual Cards</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center space-x-4">
              <img src={Rcards} alt="Real Cards" />
              <span className="title-font font-medium">Real Cards</span>
            </div>
          </div>
        </div>
        <button onClick={scrollToTop} className="flex mx-auto mt-16 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 rounded-lg text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
