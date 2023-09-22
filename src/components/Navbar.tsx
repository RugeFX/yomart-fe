import { useState, MouseEventHandler, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import useOutsideHover from "../hooks/useOutsideHover";
import useAppSelector from "../hooks/redux/useAppSelector";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";

const OldNavbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [mobileNavToggle, setMobileNavToggle] = useState<boolean>(false);

  const user = useAppSelector((state) => state.auth.userInfo);

  const dropdownVariant: Variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  const handleMobileNavButtonClicked: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setMobileNavToggle(!mobileNavToggle);
  };

  const handleDropdownMenuClicked = (val?: boolean): void => {
    if (val !== undefined) {
      setDropdown(val);
      return;
    }
    setDropdown(!dropdown);
  };

  const navbarRef = useOutsideHover(() => handleDropdownMenuClicked(false));

  return (
    <nav
      ref={navbarRef}
      className="bg-white border-gray-200 dark:bg-orange-900 dark:border-gray-700"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            YoMart!
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
          onClick={handleMobileNavButtonClicked}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            mobileNavToggle ? "grid" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 md:dark:text-yellow-500 dark:bg-yellow-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-yellow-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onMouseOver={() => handleDropdownMenuClicked(true)}
              >
                Dropdown{" "}
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <motion.div
                variants={dropdownVariant}
                animate={dropdown ? `open` : `closed`}
                id="dropdownNavbar"
                className={`z-10 absolute ${
                  dropdown ? "block" : "hidden"
                }  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="doubleDropdownButton"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dropdown
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="doubleDropdown"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            My downloads
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            Billing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            Rewards
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                </ul>
                <div className="py-1">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </div>
              </motion.div>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {user.username}
                  </Link>
                </li>
                <li>
                  <span className="text-zinc-500">{user.role}</span>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const user = useAppSelector((state) => state.auth.userInfo);

  return (
    <nav ref={navbarRef} className="fixed top-0 w-full bg-white drop-shadow-sm">
      <div className="max-w-screen-xl flex gap-5 items-center justify-between mx-auto px-4 py-6">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-zinc-800">
            <span className="text-purple-600">Yo</span>Mart
            <span className="text-purple-600">!</span>
          </span>
        </Link>
        <input
          type="search"
          ref={inputRef}
          className="w-2/3 h-full p-2 border border-zinc-400 focus:border-purple-400 rounded-md outline-none"
        />
        <ul className="flex font-medium border-gray-100 rounded-lg flex-row items-center space-x-8 mt-0 border-0">
          <li>
            <Link
              to="#"
              className="block text-purple-700 rounded bg-transparent p-0"
            >
              Home
            </Link>
          </li>
          <li>
            {user ? (
              <Avatar
                className="border-2 border-purple-700 cursor-pointer w-10 h-10"
                onClick={() => alert(user.username)}
              >
                <AvatarImage src="#IMG_URL" />
                <AvatarFallback className="pointer-events-none">
                  {user.username.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ) : (
              <div className="flex gap-3 w-full">
                <button className="py-2 px-3 bg-white border-2 border-purple-700 rounded-md text-sm text-purple-700">
                  Login
                </button>
                <button className="py-2 px-3 bg-purple-700 rounded-md text-sm text-white">
                  Sign Up
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
