import React, { useState } from "react";
import { LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Articles",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Write Article",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="w-full p-5 sm:p-0 relative">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="text-black text-lg sm:text-xl md:text-2xl font-semibold font-['Inter']">
          RUNO
        </div>
        <button
          className="block sm:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        <nav
          className={`w-1/2 sm:w-auto mt-4 sm:mt-0 sm:flex-row items-center gap-3.5 flex flex-col  fixed top-0 right-0 h-full bg-white transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } sm:static sm:translate-x-0`}
        >
          {navItems.map((item) =>
            item.active ? (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.slug);
                  setMobileMenuOpen(false);
                }}
                className="text-black text-sm sm:text-base md:text-lg font-semibold cursor-pointer"
              >
                {item.name}
              </button>
            ) : null
          )}
          {authStatus && <LogoutBtn />}
        </nav>
      </div>
    </header>
  );
}

export default Header;
