import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Smallheader from "../mobileheader/Smallheader";

const Header = () => {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  return (
    <>
 
      <div className="responsive" >
        <Smallheader />
      </div>


      <div className="container">
        <header className="header">
          <nav className="navbar">
            <div>
              <a href="/" className="image">
                <img src="https://girmantech.com/Logo2.svg" alt="logo" />
              </a>
            </div>
            <div className="text">
              <Link
                href="/search"
                className={isActive("/search") ? "link-active" : "link"}
              >
                SEARCH
              </Link>
              <Link href="https://girmantech.com" target="_blank" className="link">
                WEBSITE
              </Link>
              <Link
                href="https://www.linkedin.com/company/girmantech"
                target="_blank"
                className="link"
              >
                LINKEDIN
              </Link>
              <a
                href="mailto:contact@girmantech.com"
                className="link"
              >
                CONTACT
              </a>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
