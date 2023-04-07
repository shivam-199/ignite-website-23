import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Common/Header.module.css";
import menu from "../../public/assets/icons/menu-24.png";
import cross from "../../public/assets/icons/multiply-30.png";
import ROUTES from "../Constants/routes";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className={styles.navbar} id="myTopnav">
      <h1 className={styles.title}>
        <Link href="/">
          <a className={styles.headerLink}>
            <img
              src={"/ignite/assets/icons/g20-logo.png"}
              height="20%"
              width="20%"
              className={styles.iitgn_logo_header}
            />
            <img
              src={"/ignite/assets/icons/iitgn-logo-white.png"}
              height="20%"
              width="20%"
              className={styles.iitgn_logo_header}
            />
            <img
              src={"/ignite/assets/icons/logo_lal_minar.png"}
              height="20%"
              width="20%"
              className={styles.header_logo}
            />
            IGNITE
          </a>
        </Link>
      </h1>
      <nav className={styles.nav_outer}>
        {!isOpen ? (
          <>
            <ul className={styles.navigation}>
              {ROUTES.map((route, id) => {
                return (
                  <li
                    key={id}
                    className={`${
                      router.asPath === route.path && styles.active
                    } ${styles.headerItem}`}
                  >
                    <Link href={route.path}>
                      <a
                        className={styles.navLinks}
                        target={
                          route.path.startsWith("http") ? "_blank" : "_parent"
                        }
                        rel="noreferrer"
                      >
                        {route.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={styles.bars} onClick={() => setIsOpen(true)}>
              <a>
                <Image
                  src={menu}
                  height="20%"
                  width="20%"
                  className={styles.menu_logo}
                />
              </a>
            </div>
          </>
        ) : (
          <ul className={styles.navigation_sm}>
            {ROUTES.map((route, id) => {
              return (
                <li
                  key={id}
                  className={`${
                    router.pathname === route.path && styles.active
                  } ${styles.headerItem_sm}`}
                >
                  <Link href={route.path}>
                    <a
                      className={styles.navLinks}
                      onClick={() => setIsOpen(false)}
                      target={
                        route.path.startsWith("http") ? "_blank" : "_parent"
                      }
                      rel="noreferrer"
                    >
                      {route.name}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className={styles.cross} onClick={() => setIsOpen(false)}>
              <a>
                <Image
                  src={cross}
                  height="20%"
                  width="20%"
                  className={styles.menu_logo}
                />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
