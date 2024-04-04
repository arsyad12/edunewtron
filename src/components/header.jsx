import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <>
      {/* header */}

      <header className="pt-5 pb-5 overflow-hidden bg-blue-800">
        <nav className="flex justify-between">
          <Link to="/">
            <img
              className="px-[15px] md:px-[10px] w-52 h-10"
              src="/img/newtroniclogo.png"
              alt="logo"
            />
          </Link>
       
            <div className="invisible md:visible flex gap-3 mr-4 items-center">
              <Link to="/login">
                <button className="p-1 rounded  btn-signin w-1/8  text-white">
                  Signin
                </button>
              </Link>
              <Link to="/">
                <button className="p-1 rounded-xl border-4 btn-signup w-1/8  border-white bg-white text-blue-800">
                  Register
                </button>
              </Link>
            </div>
       
          <section className="MOBILE-MENU flex md:hidden ">
            <div
              className="HAMBURGER-ICON h-[50px] w-[50px] pr-4"
              onClick={() => setIsNavOpen((isFalse) => !isFalse)} // toggle isNavOpen state on click
            >
              <img src="/img/ham.png" alt="" />
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute -top-0 right-0 px-4 pt-4"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-[#3c26ff]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
          
                <div className="container ">
                  <div className="flex items-center justify-center pt-[15px] text-[#3e19c3]">
                   
                      <p>Signin</p>
               
                  </div>
                  <div className="flex items-center justify-center pt-[15px] text-[#3e19c3]">
                   
                      <p>Register</p>
                  
                  </div>
                </div>
            
            </div>
          </section>
        </nav>
      </header>
      {/* header */}
    </>
  );
}

export default Header;
