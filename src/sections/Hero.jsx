import React from "react";
import { useState } from "react";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import { shoes } from "../constant";
import { ShoeCard } from "../components";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <>
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-10'
    >
      {/* <section  className='grid xl:grid-row grid-col justify-center min-h-screen gap-10'> */}
      {/* <section className="flex flex-grow gap-10"> */}

        {/* <div className='relative rounded-lg border-blue-900 bg-slate-100 ' > */}
        
        {/* <img src={bigShoeImg} className="object-contain relative z-10" /> */}

         <div className="relative flex-1 basis-1/2 w-1/2 flex justify-center items-center  xl:min-h-screen max-xl:py-20 px-20  bg-slate-400  rounded-2xl "> 
          <img
            src={bigShoeImg}
            alt="shoe colletion"
            width={410}
            height={502}
            className="object-contain relative z-10"
          />
          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {/* <div className="flex h-16 gap-8 absolute bottom-0 transform translate-y-6 pl-20"> */}
            {shoes.map((image, index) => (
              <div key={index}>
                <ShoeCard
                  index={index}
                  imgURL={image}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
  

        <div>
          <h1 className="font-semibold text-6xl font-montserrat">
            The New Arrival{" "}
            <span className="text-blue-400 font-semibold text-6xl font-montserrat">
              Columbia{" "}
            </span>
            Shoes
          </h1>
          <div className="p-3 text-blue-400">
            Discover Stylish Arrivals, Quality,Comfort and Innovation for your
            and active Life
          </div>
          <button className="bg-blue-400 rounded-2xl px-3 py-2 mt-8 ml-6">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
