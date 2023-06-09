import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
// import Popup from "../src/Common/Popup";
import IGNITE_EVENTS from "../src/Constants/ignite_events";

const Home = () => {
  const [height, setHeight] = useState(null);

  // let options = {
  // 	rootMargin: "0px",
  // 	threshold: 0.5,
  // };

  // let callback = (entries, observer) => {
  // 	entries.forEach((entry) => {
  // 		if (entry.isIntersecting) {
  // 			window.location.replace(`/#${entry.target.id}`);
  // 		}
  // 	});
  // };

  useEffect(() => {
    setHeight(window.innerHeight);

    // const observer = new IntersectionObserver(callback, options);
    // let targetIds = ["#Home", "#About", "#Events"];
    // targetIds.forEach((id) => {
    // 	let target = document.querySelector(id);
    // 	observer.observe(target);
    // });
  }, []);

  return (
    <>
      <Head>
        <title>Ignite | Indian Institute of Technology Gandhinagar</title>
        <meta
          name="description"
          content="G20-Ignite, a Sci-tech fest at the Indian Institute of Technology Gandhinagar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.root}>
        <div
          id="Home"
          style={{ height: height }}
          className={styles.ignite_home}
        >
          <div className={styles.ignite_logo_div}>
            <Image
              src="/ignite/assets/icons/ignite-logo.png"
              alt="Ignite"
              className={styles.ignite_logo}
            />
            <h2 className={styles.ignite_text}>G20-IGNITE</h2>
            <h2 className={styles.ignite_sub_text}>A SCI-TECH FAIR</h2>
          </div>
          <div className={styles.ignite_desc}>
            <div className={styles.logos_div}>
              <Image
                src="/ignite/assets/icons/g20-logo.png"
                alt="G20"
                className={styles.main_logos}
              />
              <Image
                src="/ignite/assets/icons/iitgn-logo-white.png"
                alt="IITGN"
                className={styles.main_logos}
              />
              <Image
                src="/ignite/assets/icons/tech-council-logo.png"
                alt="Tech Council"
                className={styles.main_logos}
              />
            </div>
            <h2 className={styles.ignite_iitgn_text}>
              INDIAN INSTITUTE OF TECHNOLOGY GANDHINAGAR
            </h2>
            <hr className={styles.ignite_hr} />
            <h2 className={styles.ignite_dates}>APRIL 15, 2023</h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSenzSO93hAkZmCTq5W28jIqK_Bufg6xbV6uswdrdnhzTNLboQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.register_btn}>Register Now!</button>
            </a>
            {/* <p className="mt-3 font-[oxanium] text-white">
              Deadline: April 14, 2023
            </p> */}
          </div>
        </div>
        {/* <Popup /> */}
        <div id="About" className={styles.mainpage}>
          <h3 className={styles.subtitle}>About G20-IGNITE</h3>
          <p className={styles.desc}>
            G20-Ignite is a Science and Technology Fair that aims to support and
            encourage critical thinking, problem-solving, and curiosity among
            school students from the disciplines of Science, Technology,
            Engineering, Arts, and Mathematics. The event will be a platform to
            introduce a new generation of engineers, scientists, and researchers
            to the diverse dimensions of science and technology. IIT Gandhinagar
            aspires to showcase its in-house technological prowess,
            state-of-the-art infrastructure and research facilities,
            exceptionally talented students, and creative learning programs.
            With a plethora of interactive showcases and exhibitions, hands-on
            training modules, and engaging competitions, Ignite is a celebration
            of technology, inspiration, discovery, and innovation.
          </p>
        </div>
        <div className={styles.event_main}>
          <h2 id="Events" className={styles.title}>
            Events
          </h2>
          <div className={styles.clubsOuter}>
            {IGNITE_EVENTS.map((event) => {
              return (
                <div
                  className={styles.clubCard}
                  key={event.id}
                  style={{
                    backgroundColor: event.backgroundColor,
                  }}
                >
                  <div className={styles.bannerOuter}>
                    <Image
                      src={event.banner}
                      alt=""
                      className={styles.clubBanner}
                    />
                  </div>
                  <div className={styles.clubInfo}>
                    <h2 className={styles.clubName}>{event.name}</h2>
                    <p className={styles.clubDesc}>{event.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="Partners"
          className="flex w-full flex-col justify-center bg-black py-5"
        >
          <h3 className={styles.subtitle}>Our Partners</h3>
          <div className="mx-auto mb-12 grid grid-cols-9 items-center gap-6">
            <Image
              src="/ignite/assets/logos/Firetech_Logo.png"
              alt="Firetech"
              className="col-span-9 mx-auto max-h-16 sm:col-span-4 sm:max-h-24"
            />
            <Image
              src="/ignite/assets/logos/RK_Logo.png"
              alt="RK"
              className="col-span-9 mx-auto max-h-16 sm:col-span-1 sm:max-h-24"
            />
            <Image
              src="/ignite/assets/logos/Aaag_Logo.png"
              alt="Aaag"
              className="col-span-9 mx-auto max-h-20 sm:col-span-4 sm:max-h-32"
            />
          </div>
        </div>
        <div
          id="Covid"
          className="mb-8 flex w-full flex-col justify-center py-5"
        >
          <h3 className={styles.subtitle}>
            Covid Safety Protocols to be Followed
          </h3>
          <Image
            src="/ignite/assets/banner/covid-protocols.jpg"
            alt="Follow Appropriate Covid Protocols"
            className="mx-auto w-5/6 max-w-4xl"
          />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Home;
