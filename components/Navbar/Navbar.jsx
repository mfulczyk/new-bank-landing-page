import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Navbar.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMobileNavbar, setIsMobileNavbar] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={classNames(styles.darkBackground)}>
        <nav className={classNames(styles.navBar)}>
          <Link passHref href="/#Hero">
            <img
              height="50px"
              width="100%"
              style={{
                objectFit: "cover",
                marginRight: "15px",
                cursor: "pointer",
              }}
              alt="mbank logo"
              src="/mbank-logo.jpeg"
            />
          </Link>

          <Link
            passHref
            href={
              router.route === "/kampus-it"
                ? `${"/kampus-it/#ChooseYourTeam"}`
                : `${"/#JobOffers"}`
            }
          >
            <ScrollLink
              spy={true}
              activeClass={classNames(styles.active)}
              className={classNames(styles.navItem)}
              to={
                router.route === "/kampus-it"
                  ? `${"/kampus-it/#ChooseYourTeam"}`
                  : `${"JobOffers"}`
              }
            >
              <button aria-label="aplikuj" className={classNames(styles.btn)}>
                aplikuj
              </button>
            </ScrollLink>
          </Link>
        </nav>
        <nav className={classNames(styles.navBarMobile)}>
          <Link passHref href="/">
            <img
              onClick={() => setIsMobileNavbar(!isMobileNavbar)}
              height="50px"
              style={{
                objectFit: "cover",
                marginTop: "10px",
                marginLeft: "10px",
              }}
              alt=""
              src="/mbank-logo.jpeg"
            />
          </Link>
          <div onClick={() => setIsMobileNavbar(!isMobileNavbar)}>
            <div
              className={
                !isMobileNavbar
                  ? classNames(styles.untoggled)
                  : classNames(styles.toggled)
              }
            >
              <div></div>
            </div>
          </div>
        </nav>
      </div>
      {isMobileNavbar ? (
        <ul
          onClick={() => setIsMobileNavbar(!isMobileNavbar)}
          className={classNames(styles.navBarMobileHolder)}
        >
          <li onClick={() => setIsMobileNavbar(!isMobileNavbar)}>
            <Link aria-label="Kariera w mBanku" href="/#Hero">
              Kariera w mBanku!
            </Link>
          </li>

          <li onClick={() => setIsMobileNavbar(!isMobileNavbar)}>
            <Link
              aria-label="aplikuj"
              passHref
              href={
                router.route === "/kampus-it"
                  ? `${"/kampus-it/#ChooseYourTeam"}`
                  : `${"/#JobOffers"}`
              }
            >
              <button className={classNames(styles.btn)}>aplikuj</button>
            </Link>
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default Navbar;
