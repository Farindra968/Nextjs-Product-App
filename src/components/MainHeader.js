"use client";
import { useState } from "react";
import { HiOutlineLogout, HiOutlineMenuAlt2 } from "react-icons/hi";
import MegaMart from "@/assets/images/MegaMart.svg";
import { FiPackage, FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CiCreditCard2, CiLight } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoInvertModeSharp, IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { PRODUCT_ROUTE, SIGNUP_ROUTE } from "@/constant/routes";
import { useDispatch, useSelector } from "react-redux";
import userProfile from "@/assets/images/userProfile.jpg";
import Image from "next/image";
import { logOutUser } from "@/redux/auth/authSlice";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { DARK_MODE, LIGHT_MODE } from "@/constant/theme";
import { toggleTheme } from "@/redux/userPreference/userPrefrenceSlices";

function MainHeader() {
  const { user } = useSelector((state) => state.auth); /// extreact user from redux state management
  const { theme } = useSelector((state) => state.userPreferences); /// extreact theme from redux state management

  const dispatch = useDispatch(); /// dispatch function to dispatch action

  function switchTheme() {
    dispatch(toggleTheme());
  }
  const [showProfile, setShowProfile] = useState(false); // hide and show profile function
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  function logout() {
    dispatch(logOutUser());
    setShowProfile(false);
  }

  const menuItems = [
    { icon: FaRegUserCircle, text: "Account", href: "/" },
    { icon: IoSettingsOutline, text: "Settings", href: "/" },
    { icon: FiPackage, text: "Products", href: `${PRODUCT_ROUTE}` },
    { icon: CiCreditCard2, text: "Billing", href: "/" },
    { icon: IoMdHelpCircleOutline, text: "Help", href: "/" },
  ];
  return (
    <section className=" h-auto w-full z-50 sticky top-0 bg-white dark:bg-gray-800  border-b-2 border-primary-50 dark:border-gray-700">
      <div className="flex justify-between items-center max-w-[1200px] m-auto p-3">
        {/* Icon and Logo */}
        <div className="flex items-center justify-center gap-4 w-auto h-auto">
          <div className=" md:hidden flex justify-center items-center text-3xl text-primary-700 w-10 h-10 rounded-md  bg-primary-50 ">
            <HiOutlineMenuAlt2 />
          </div>
          <Image
            src={MegaMart}
            alt={MegaMart}
            className="hidden w-24 sm:inline-block"
          />
        </div>
        {/* Search Box*/}
        <div className="w-full sm:w-1/2 flex mx-2 md:mx-0 ">
          <div className="bg-primary-50  w-full h-11 rounded-md md:px-4 relative">
            <TfiMenuAlt className="lg:text-xl hidden sm:inline-block text-primary-700 absolute right-5 top-3" />
            <BsSearch className="lg:text-xl  text-primary-700 absolute left-2 md:left-5 top-3" />
            <input
              type="search"
              placeholder="Search essentials, groceries and more..."
              className="w-full font-Poppins border-0 h-11 bg-transparent text-text-secondary pl-8 focus:outline-none md:px-10 text-sm"
            />
          </div>
        </div>
        {/*and other */}

        <div className=" w-auto flex justify-end  items-center">
          <div className="flex items-center gap-2  lg:border-r-2 px-4 border-gray-300 dark:border-gray-500">
            <span className="text-3xl text-primary-700 dark:text-primary-400 relative">
              <AiOutlineShoppingCart />
              <p className=" absolute top-0 right-0 text-xs bg-secondary-500 text-white w-4 h-4 flex justify-center items-center rounded-full">
                5
              </p>
            </span>
            <span className="font-Poppins  text-text-muted dark:text-primary-50 hidden md:block">
              Cart
            </span>
          </div>
          <div className="w-auto flex items-center gap-2 px-4 relative ">
            {user ? (
              <div
                onClick={toggleProfile}
                className=" flex items-center gap-2 font-Poppins  text-text-muted dark:text-primary-50 "
              >
                <div className="border-2 border-primary-700 rounded-full w-10 h-10">
                  <Image
                    src={userProfile}
                    alt={MegaMart}
                    className=" w-20  sm:inline-block rounded-full"
                  />
                </div>
                <div className="md:flex md:flex-col hidden">
                  <span className="font-poppins-medium text-sm">
                    Welcome {user.name}
                  </span>
                  <span className="font-poppins-medium text-xs">
                    {user.email}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2 font-Poppins ">
                <Link href={SIGNUP_ROUTE} className="flex items-center">
                  <p className="text-3xl text-primary-700 dark:text-primary-400">
                    <FiUser />
                  </p>
                  <p className="font-Poppins  text-text-muted dark:text-primary-50 hidden md:block">
                    Sign Up/Sign In
                  </p>
                </Link>
                <div
                  onClick={switchTheme}>
                  <p
                    className={`${
                      theme == LIGHT_MODE ? "text-gray-600" : "text-white"
                    } text-[16px]`}
                  >
                    <MdLightMode />
                  </p>
                </div>
              </div>
            )}
            {/* User Profile */}
            <div
              className={`${
                showProfile
                  ? "py-1 bg-white dark:bg-gray-700 w-52 z-40 rounded-md shadow-md shadow-gray-500 dark:shadow-gray-600 absolute top-14 right-0"
                  : "hidden"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-500 hover:text-gray-900"
                  role="menuitem"
                >
                  <item.icon
                    className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-100"
                    aria-hidden="true"
                  />
                  {item.text}
                </Link>
              ))}

              <div onClick={switchTheme} className="w-full flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500 hover:text-gray-900">
                <p className="flex items-center dark:text-gray-100">
                  <IoInvertModeSharp
                    className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-100"
                    aria-hidden="true"
                  />
                  Preferences
                </p>
                {/* Switchtheme */}
                <div
                  onClick={switchTheme}>
                  <p
                    className={`${
                      theme == LIGHT_MODE ? "text-gray-600" : "text-white"
                    } text-[16px]`}
                  >
                    <MdLightMode />
                  </p>
                </div>
              </div>
              {/* Logout */}
              <button
                onClick={logout}
                className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-100  hover:bg-gray-100 dark:hover:bg-gray-500 hover:text-gray-900"
                role="menuitem"
              >
                <HiOutlineLogout
                  className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-100"
                  aria-hidden="true"
                />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHeader;
