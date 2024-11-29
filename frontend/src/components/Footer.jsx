import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div>
          {/* <img className="mb-5 w-35" src={assets.Medi_Appointment} alt="" /> */}
          <img className='w-44'src={assets.Medi_Appointment} alt="Medi Appointment Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* center */}
        <div>
            <p className="text-lg font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* right */}
        <div>
            <p className="text-lg font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>7499657839</li>
                <li>chavandkeh@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        {/* copywrite */}
        <hr />
        <p className="text-center py-5 text-sm">Copyright 2024 @HarishChavandke- All Right Reserved. Happy Coding</p>
      </div>
    </div>
  );
};

export default Footer;
