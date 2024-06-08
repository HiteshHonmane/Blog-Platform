import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
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
      name: "Write Ar",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="sm:w-[1216px] sm:h-[60px] sm:py-2.5 sm:justify-between sm:items-center sm:inline-flex 
    w-[390px] h-[72px] p-5 justify-between items-center inline-flex
    
    ">


      <Container>

        <nav className="flex flex-row w-[100vw]   justify-between gap-[60vw] items-center ">
          <div className="text-gray-50 text-xl font-bold font-spartan">
            RUNO
          </div>
          <ul className="w-[1440px] h-20 bg-black/opacity-20 flex  items-center  justify-around ">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="text-white text- font-bold font-roboto "
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>


      </Container>
    </header>
  );
}

export default Header;
