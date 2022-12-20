import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import {heroData} from '../utils/data'

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery{" "}
          </p>
          <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full bg-white object-contain"
              alt=""
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]]]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus
          perspiciatis, iusto facere quia illo nihil reprehenderit accusamus
          iure praesentium illum quis.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200 md:w-auto"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-300 lg:w-auto w-full lg:h-500"
          alt=""
        />
        <div className="w-full h-full absolute top-0 left-0 lg:px-32 py-4 flex items-center justify-center gap-3 flex-wrap">
         {heroData && heroData.map(n=>(
             <div key={n.id}
             className="lg:w-150
           bg-cardOverlay backdrop-blur-md rounded-2xl p-4 flex items-center justify-center flex-col"
           >
             <img src={n.imageSrc} className="w-20 lg:w-35 -mt-10 lg:-mt-20" alt="i1" />
             <p className=" text-sm font-bold text-textColor mt-2 lg:mt-4">{n.name}</p>
             <p className="lg:text-xs text-lighttextGray font-semibold lg:my-2 mt-1 ">
               {n.decp}
             </p>
             <p className="text-sm font-semibold text-headingColor">
               <span className="text-xs text-red-600">₹</span> {n.price}
             </p>
           </div>
         ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
