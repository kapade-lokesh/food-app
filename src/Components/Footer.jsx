import React from "react";
import {
  CiFacebook,
  CiInstagram,
  CiLocationOn,
  CiMail,
  CiPhone,
  CiTwitter,
} from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className=" px-8 py-24 bg-slate-100">
        <div className="py-4  ">
          <div className="">
            <div className="flex justify-around w-full py-6 px-6 sm:flex  flex-wrap">
              <div className="flex-auto">
                <p className="text-black font-semibold text-md mb-6">Links</p>
                <ul className="space-y-5">
                  <li className="text-slate-500">
                    <Link>Home</Link>{" "}
                  </li>
                  <li className="text-slate-500">
                    <Link>About Us</Link>{" "}
                  </li>
                  <li className="text-slate-500">
                    <Link>Cart</Link>{" "}
                  </li>
                  <li className="text-slate-500">
                    <Link>Orders</Link>{" "}
                  </li>
                  <li className="text-slate-500">
                    <Link>Help</Link>{" "}
                  </li>
                </ul>
              </div>

              <div className="flex-auto ms-20 lg:ms-0">
                <p className="text-black font-semibold text-md mb-6 ">
                  Services
                </p>
                <ul className="space-y-5">
                  <li className="text-slate-500">
                    <Link>Cooked</Link>{" "}
                  </li>
                  <li className="text-slate-500">
                    <Link>Delivered</Link>{" "}
                  </li>
                  <li className="text-slate-500">
                    <Link>Quality Foods</Link>{" "}
                  </li>
                  <li className="text-slate-500">
                    <Link>Mixed</Link>{" "}
                  </li>
                </ul>
              </div>

              <div className=" flex-auto mt-20 lg:mt-0 md:mt-0">
                <p className="text-black font-semibold text-md mb-6 lg:mb-6 ">
                  Have a question
                </p>
                <ul className="space-y-9">
                  <li>
                    <CiLocationOn
                      size={23}
                      className="sm:inline  md:-mt-12 lg:-mt-12 inline text-slate-900"
                    />
                    <span className="ms-4 inline-block w-72 text-slate-500  ">
                      203 Fake st, Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <CiPhone
                      size={23}
                      className="inline -mt-1  text-slate-900"
                    />
                    <span className="w-72 ms-4 inline-block text-slate-500">
                      +91-8208497945
                    </span>
                  </li>
                  <li>
                    <CiMail
                      size={23}
                      className="inline -mt-1  text-slate-900"
                    />
                    <span className="w-72 ms-4 inline-block text-slate-500">
                      Foodie@gmail.com
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex-auto">
                <p className="text-lg font-semibold mt-24 lg:mt-0">
                  Connect With Us
                </p>
                <div className="w-full h-1/2 flex justify-start items-center space-x-10">
                  <Link>
                    <CiFacebook
                      size={35}
                      className="text-slate-500 hover:text-indigo-600"
                    />
                  </Link>
                  <Link>
                    <CiInstagram
                      size={35}
                      className="text-slate-500 hover:text-pink-600"
                    />
                  </Link>
                  <Link>
                    <CiTwitter
                      size={35}
                      className="text-slate-500 hover:text-blue-600"
                    />
                  </Link>
                  <Link>
                    <CiMail
                      size={35}
                      className="text-slate-500 hover:text-red-600"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 flex  py-4 mt-8 ">
            {" "}
            &copy; All copyrights reserved at fooDYe.com 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
