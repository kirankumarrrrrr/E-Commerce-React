import React, { useEffect, useRef, useState } from "react";
import heroimage from "../assets/homeecom.jpg";
import "./Global.css";
import { RiExchangeFundsFill } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const Homepage = () => {
  const [productData, SetproductData] = useState([]);
  const userMail = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        SetproductData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from reloading
    console.log("Email Submitted:", userMail.current.value);
    userMail.current.value = "";
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center border-2 rounded">
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
        <img className="w-full sm:w-1/2" src={heroimage} alt="hero-image" />
      </div>

      <div className="pt-10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest
          </h1>
          <h2>Collections</h2>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
        <p className="pd-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>

        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {productData.slice(0, 8).map((product, index) => (
            <div
              key={index}
              className="cursor-pointer flex gap-5 bg-rgb(90, 86, 86)-200 flex flex-col items-center justify-center"
            >
              <img
                className="transform transition-transform duration-300 hover:scale-110 items-center justify-center w-48 h-48 object-contain"
                src={product.image}
                alt={product.title}
              />
              <div className="flex flex-col justify-center">
                <p>{product.title}</p>
                <p className="text-sm font-medium font-bold">
                  $ {product.price}
                </p>
              </div>
              <div className="mt-auto mr-auto flex flex-col justify-center items-center gap-4 pb-5 width-100%">
                  <button
                    className="border px-4 py-2 bg-grey-600 text-black font-semibold rounded-md shadow hover:bg-[rgb(243,132,11)] transition duration-300"
                    onClick={() => addtocart(product, index)}
                  >
                    Add to Cart
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Best Sellers
          </h1>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
        <p className="pd-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>

        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {productData.slice(8, 16).map((product, index) => (
            <div
              key={index}
              className="cursor-pointer flex gap-5 bg-rgb(90, 86, 86)-200 flex flex-col items-center justify-center"
            >
              <img
                className="transform transition-transform duration-300 hover:scale-110 items-center justify-center w-48 h-48 object-contain"
                src={product.image}
                alt={product.title}
              />
              <div className="flex flex-col justify-center">
                <p>{product.title}</p>
                <p className="text-sm font-medium font-bold">
                  $ {product.price}
                </p>
              </div>
              <div className="mt-auto mr-auto flex flex-col justify-center items-center gap-4 pb-5 width-100%">
                  <button
                    className="border px-4 py-2 bg-grey-600 text-black font-semibold rounded-md shadow hover:bg-[rgb(243,132,11)] transition duration-300"
                    onClick={() => addtocart(product, index)}
                  >
                    Add to Cart
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-28 flex flex-row justify-center items-center gap-28">
        <div className="flex flex-col justify-center items-center">
          <RiExchangeFundsFill className="text-8xl pb-8" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p>We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoCheckmarkDoneCircle className="text-8xl pb-8" />
          <p className="font-semibold">7 Days Return Policy</p>
          <p>We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <RiCustomerServiceFill className="text-8xl pb-8" />
          <p className="font-semibold">Best customer support</p>
          <p>we provide 24/7 customer support</p>
        </div>
      </div>

      <div className="pt-24 flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl sm:py-3 lg:text-5xl leading-relaxed">
          Subscribe now & get daily deals
        </h2>
        <p className="w-full sm:w-1/2 text-gray-400 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row justify-center items-center mx-auto my-6 border pl-3"
        >
          <input
            className="w-full sm:flex-1 outline-none gap-4"
            type="email"
            placeholder="Enter your email"
            ref={userMail}
          />
          <button
            type="submit"
            className="bg-black text-white text-xs px-10 py-4"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
