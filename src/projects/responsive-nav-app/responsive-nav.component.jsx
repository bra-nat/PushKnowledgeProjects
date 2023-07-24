import NavItem from "../components/nav-item/nav-item.component";
import { NavStyle, NavItemsStyle } from "./responsive-nav.styles";
import "./responsive-nav.styles";
import { useState, useEffect } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const ResponsiveNav = () => {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  });

  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    window.onresize = () => {
      let windowWidth = window.innerWidth;
      // console.log(windowWidth)

      windowWidth > 600 &&
        setShowElement({ navbarNav: true, hamburgerIcon: false });
      windowWidth < 600 &&
        setShowElement({ navbarNav: false, hamburgerIcon: true });
    };
  }, []);

  const openNav = () => {
    setShowElement({
      navbarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    });
  };
  const closeNav = () => {
    setShowElement({
      navbarNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    });
  };

  const handleActive = (e) => {
    document
      .querySelectorAll(".nav-link")
      .forEach((navLink) => navLink.classList.remove("active"));
      e.target.classList.add('active');
      setPageTitle(e.target.innerText)
  };

  return (
    <>
    <NavStyle
      className={`navbar px-3 py-1 navbar-collapse bg-info navbar-dark `}>
      <div className="navbar-brand w-100 d-flex align-items-center px-3 justify-content-between">
        <a href="#" className="navbar-brand">
          BraNat
        </a>
        {/**Open and close icon */}
        {showElement.hamburgerIcon && <AiOutlineMenu onClick={openNav} />}
        {showElement.closeIcon && <AiOutlineClose onClick={closeNav} />}
      </div>
      {console.log(showElement.navbarNav)}
      {showElement.navbarNav ? (
        <NavItemsStyle className={`navbar-nav`}>
          <NavItem
            navItemClasses={"navLink"}
            text={"Home"}
            active={"active"}
            onClick={handleActive}
          />
          <NavItem
            navItemClasses={"navLink"}
            text={"About"}
            onClick={handleActive}
          />
          <NavItem
            navItemClasses={"navLink"}
            text={"Contact"}
            onClick={handleActive}
          />
        </NavItemsStyle>
      ) : null}
    </NavStyle>

    <h1 className="title text-center fs-1 text-info">
      {!pageTitle ? "Home" : pageTitle}
    </h1>
    </>
  );
};

export default ResponsiveNav;
