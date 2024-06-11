import React from "react";
import { LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
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
    <header className="w-full p-5 sm:p-0   ">

      <div className="w-full flex flex-col sm:flex-row justify-between items-center ">

        <div className="text-black text-lg sm:text-xl md:text-2xl font-semibold  font-['Inter']">
          RUNO
        </div>
        <nav className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row items-center gap-3.5">
          {navItems.map((item) =>
            item.active ? (
              <button
                key={item.name}
                onClick={() => navigate(item.slug)}
                className="text-black text-sm sm:text-base md:text-lg font-semibold cursor-pointer "
              >
                {item.name}
              </button>
            ) : null
          )}
          {authStatus && (
            <LogoutBtn />
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
