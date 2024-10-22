import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        <div className="flex flex-col justify-center items-left">
          <h2 className="font-semibold text-xl sm:py-3 lg:text-2xl leading-relaxed">
            ECommerce
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col justify-center items-left">
          <p className="font-semibold text-xl sm:py-3 lg:text-2xl leading-relaxed">
            COMPANY
          </p>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </div>
        <div className="flex flex-col justify-center items-left">
          <p className="font-semibold text-xl sm:py-3 lg:text-2xl leading-relaxed">
            GET IN TOUCH
          </p>
          <p>
            +91 9999999999 karanamkirankumar51@gmail.com kirankumarr___
            Instagram
          </p>
        </div>
      </div>

      <div>
        <hr></hr>
        <p class="py-5 text-sm text-center">
          Copyright 2024 @ Kiran Kumar Karanam - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
