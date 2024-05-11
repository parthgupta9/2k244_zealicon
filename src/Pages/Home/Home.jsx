import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZealId } from "../../actions/zeal";

import styles from "./Home.module.css";

// import Swiper core and required modules
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

import Modal from "../Modal/Modal";

import Button from "../../components/Button/Button";
import { ImageGallery } from "react-image-grid-gallery";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize, false);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "unset";
    };
  }, [isModalOpen]);

  const dispatch = useDispatch();
  const { zealId, isAuthenticated } = useSelector((state) => state.allReducers);

  useEffect(() => {
    const fetchId = async () => {
      dispatch(fetchZealId());
    };
    fetchId();
  }, []);

  return (
    <>
      {isModalOpen && (
        <div className={styles.modalContainer}>
          <div
            className={styles.modalOverlay}
            onClick={() => setIsModalOpen(false)}
          />
          <div className={styles.modalContent}>
            <div className={styles.modalScrollableContent}>
              <Modal setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        </div>
      )}

      {/* Header Section ------------------------------------------------------------ */}

      <Header setIsModalOpen={setIsModalOpen} windowSize={windowSize} />

      <main>
        {/* Hero Section ------------------------------------------------------------ */}

        <div className={styles.heroSection}>
          <p className={styles.eventDate}>
            <time dateTime="2024-05-24 20:00">24th May</time>
            {" - "}
            <time dateTime="2024-05-26 20:00">26th May</time>
          </p>
          <div className={`${styles.btnBox}`}>
            <Button type={"small"} text={"Download App"} action={() => {}} />
            {zealId && isAuthenticated ? (
              <Button
                type={"small"}
                text={"Your Zeal ID"}
                action={() => setIsModalOpen(true)}
              />
            ) : (
              <Button
                type={"small"}
                text={"Register Here"}
                action={() => setIsModalOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Info Section ------------------------------------------------------------ */}

        <div className={styles.sectionsCont}>
          <div className={styles.infoSection}>
            <p className={styles.eventDesc}>
              Zealicon is the annual techno-cultural festival of JSSATE, Noida.
              Dedicated to the celebration of creativity and science, it is a
              stimulating event brimming with youthful dynamism. It transforms
              the campus into a veritable kaleidoscope of people. Involving
              multifarious exciting events from technical scratch to cultural
              zeal. A platform for all the creative minds to express their ideas
              in the form of events including band performances, discussions,
              film screenings that are spread over four days. Apart from the
              exuberant cultural events, Zealicon is also known for its mind
              boggling technical events that creates an ambience for the
              technocrats. Zealicon 2024 will cover the aspects of hysterical
              face of literature along with popular arts, science and
              technology. This edition of Zealicon promises all the trademarks
              of the earlier versions. A plethora of events where academicians
              will vouch out their intellect and artists will showcase the best
              of art. Projecting the fictitious gesture onto the real world,
              Zealicon will act as a connecting link between the fantasy and
              reality. Creating an aura of avidity and togetherness, We hope
              that Zealicon 2024 will turn out to be a memorable experience for
              you !
            </p>

            <div className={styles.imageCollage}>
              <div className={styles.blurBackground}></div>
              <ImageGallery
                imagesInfoArray={collageImages}
                columnWidth={windowSize.width < 900 ? 100 : 200}
                gapSize={10}
              />
            </div>
          </div>

          {/* Sponsors Section ------------------------------------------------------------ */}

          <section className={styles.sponsorsSection}>
            <h2>Our Sponsors</h2>
            <div className={styles.sponsorsPicsCont}>
              <Swiper
                modules={[Autoplay]}
                //   freeMode={true}
                loop={true}
                autoplay={true}
                slidesPerView={"auto"}
                spaceBetween={30}
              >
                <SwiperSlide style={{ width: "auto" }}>
                  <img
                    className={styles.selectDisable}
                    src={`/images/sponsors/1.png`}
                    alt={`Sponsor Logo`}
                  />
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                  <img
                    className={styles.selectDisable}
                    src={`/images/sponsors/2.png`}
                    alt={`Sponsor Logo`}
                  />
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                  <img
                    className={styles.selectDisable}
                    src={`/images/sponsors/1.png`}
                    alt={`Sponsor Logo`}
                  />
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                  <img
                    className={styles.selectDisable}
                    src={`/images/sponsors/2.png`}
                    alt={`Sponsor Logo`}
                  />
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                  <img
                    className={styles.selectDisable}
                    src={`/images/sponsors/1.png`}
                    alt={`Sponsor Logo`}
                  />
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                  <img
                    className={styles.selectDisable}
                    src={`/images/sponsors/2.png`}
                    alt={`Sponsor Logo`}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>

          {/* Offers Section ------------------------------------------------------------ */}

          <section className={styles.offersSection}>
            <h2>Offers</h2>
            <div className={styles.offersCont}></div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

const collageImages = [
  {
    src: "./images/collage/1.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/2.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/3.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/4.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/5.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/6.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/7.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/8.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/9.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/10.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/11.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/12.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/13.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/14.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/15.jpg",
    alt: "zealicon 2023",
  },
  {
    src: "./images/collage/16.jpg",
    alt: "zealicon 2023",
  },
];

export default Home;
