import { NavLink, useMatch } from "react-router-dom";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const homeroute = useMatch("/");
  const navclass = "absolute top-0 left-0 right-0 w-full bg-transparent";
  const handelHamburger = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={`py-12 px-5 lg:px-0 ${homeroute ? navclass : ""}`}>
      <ContentWrapper>
        <div className="flex justify-between items-center">
          {/* logo side  */}
          <div className="flex items-center">
            <div className="flex flex-col ml-5">
            <img src="public/Logo.png" alt="" />
            </div>
          </div>


          <div>
            <ul className="hidden lg:flex items-center text-lg font-normal">
              <li className="mr-14">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="mr-14">
                <NavLink to={"/donations"}>Donation</NavLink>
              </li>
              <li>
                <NavLink to={"/statistics"}>Statistics</NavLink>
              </li>
            </ul>

            {/*  mobile  */}
            <div className="cursor-pointer lg:hidden" onClick={handelHamburger}>
              <GiHamburgerMenu size={"40px"} color="#0b0b0bb3" />
            </div>
            <div
              className={`lg:hidden overflow-hidden absolute w-60 transition-all duration-300 bg-slate-200 shadow-lg shadow-slate-950 top-40 right-6 z-50 ${
                toggle ? "h-80" : "h-0"
              }`}
            >
              <ul className="flex flex-col space-y-5 rounded-lg items-center text-lg font-normal">
                <li className="">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="">
                  <NavLink to={"/donations"}>Donation</NavLink>
                </li>
                <li>
                  <NavLink to={"/statistics"}>Statistics</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </nav>
  );
};

export default Navbar;
