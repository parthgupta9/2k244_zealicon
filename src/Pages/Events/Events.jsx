import React, { useEffect, useState } from "react";
import "./Events.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer.jsx"
import Ghosts from "../../components/Ghosts/Ghosts";
import Eventshead from "../../assets/images/eventshead.png";
import leftFrame from "../../assets/images/leftFrame.png";
import rightFrame from "../../assets/images/rightFrame.png";
import ZealCard from "./ZealCard.jsx";

import axios from "axios";
import zealiconlogo from "../../../public/images/zealicon_logo.svg"
import EventCard from "./EventCard";

import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import ZealiconPDF from "../../assets/EventSchedule/zealicon23.pdf";
import BrochurePDF from "../../assets/EventSchedule/brochure.pdf";
import { Link } from "react-router-dom";

function Events(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [zealevents, setzealevents] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };
  useEffect(() => {
    axios
      .get("https://web-production-799f.up.railway.app/events/all/")
      .then((response) => {
        setzealevents(response?.data);
      })
      .catch((error) => console.log(error));
  }, []);
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
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (
    <>
    <Header setIsModalOpen={setIsModalOpen} windowSize={windowSize} />
      {/* <Ghosts/> */}
       <div className="rotate linear infinite flex justify-center bg-center bg-no-repeat bg-cover bg-backYellow justify-items-center land">
        <div className="event pt-36 flex items-center justify-center">
        </div>
      </div>
      <div className="bands flex flex-row">
        {/* <div className="frame">
          <img className="leftFrame" src={leftFrame} alt="" />
        </div>
        <div className="frame">
          <img className="rightFrame" src={rightFrame} alt="" />
        </div> */}
      </div> 
      <div className="Zeal-bg pt-7">
        {/* <ZealCard /> */}
        
        <div className="py-6">
          <p className=" eventhead text-center text-8xl  text-[#7EF2F6] font-[rabu-kliwon] pb-4">EVENTS</p>
          <p className=" galleryhead text-5xl text-center p-10 font-normal ">
            {" "}
            Gallery
          </p>
          <div className="flex-col flex md:flex-row items-center justify-center gap-5 py-2 w-[100%]">
            <iframe
              className="md:w-[30%] w-[80%] h-[150px] md:h-[250px]"
              src="https://www.youtube.com/embed/NTl15r7MgCM?si=DB4fjlI7EK-3qNkz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              className="md:w-[30%] w-[80%] h-[150px] md:h-[250px]"
              src="https://www.youtube.com/embed/je4QSN3oQ2s?si=1Dmaw5rwS8r7gm_I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="flex-col flex md:flex-row pt-8 items-center justify-center gap-5">
          <Link to={BrochurePDF} target="_blank">
            <button className="text-white border-2 border-[#0A2530] rounded-md px-12 mx-2 py-2">
              Fest Brochure
            </button>
          </Link>
          <Link to={ZealiconPDF} target="_blank">
            <button className=" text-white bg-[#0A2530] text- rounded-md px-12 py-2.5">
              Get Event Schedule <DownloadIcon className="ml-2" />
            </button>
          </Link>
        </div>
        <div className="main-content flex justify-around items-center">
          <div className=" btns flex justify-start items-center mt-20 pr-2.5">
            <div className="pr-2.5">
              {" "}
              <button
                type="Submit"
                className={`daybtn w-24 mt-2.5 pr-2.5 mb-2.5 text-center text-black bg-white rounded-3xl border-2 border-solid border-white ${
                  selectedDay === "All" ? "bg-white-500" : "bg-white-500/50"
                }`}
                onClick={() => handleDayClick("All")}
              >
                All
              </button>
            </div>
            <div className="pr-2.5">
              <button
                type="Submit"
                className={`daybtn w-24 mt-2.5 pr-2.5 mb-2.5 text-center text-black bg-white rounded-3xl border-2 border-solid border-white ${
                  selectedDay === "Day 1" ? "bg-white-500" : "bg-white-500/50"
                }`}
                onClick={() => handleDayClick("Day 1")}
              >
                Day 1
              </button>
            </div>
            <div className="pr-2.5">
              <button
                type="Submit"
                className={`daybtn w-24 mt-2.5 pr-2.5 mb-2.5 text-center text-black bg-white rounded-3xl border-2 border-solid border-white ${
                  selectedDay === "Day 2" ? "bg-white-500" : "bg-white-500/50"
                }`}
                onClick={() => handleDayClick("Day 2")}
              >
                Day 2
              </button>
            </div>
            <div className="pr-2.5">
              <button
                type="Submit"
                className={`daybtn w-24 mt-2.5 pr-2.5 mb-2.5 text-center text-black bg-white rounded-3xl border-2 border-solid border-white ${
                  selectedDay === "Day 1" ? "bg-white-500" : "bg-white-500/50"
                }`}
                onClick={() => handleDayClick("Day 3")}
              >
                Day 3
              </button>
            </div>
            <div className="pr-2.5">
              <button
                type="Submit"
                className={`daybtn w-24 mt-2.5 pr-2.5 mb-2.5 text-center text-black bg-white rounded-3xl border-2 border-solid border-white ${
                  selectedDay === "Day 1" ? "bg-white-500" : "bg-white-500/50"
                }`}
                onClick={() => handleDayClick("Day 4")}
              >
                Day 4
              </button>
            </div>
          </div>

          <div className="search mt-20">
            <div style={{ position: "relative" }}>
              <input
                type="text"
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                placeholder=" Search here"
                className="input w-80 md:w-96 pl-10 bg-white text-black rounded-xl h-10"
              />
              <button
                type="submit"
                style={{ position: "absolute", top: 10, left: 10,display: "flex", justifyContent: "center" }}
              >
                <SearchIcon sx={{ color: "black" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="myevents pl-24">
          <div className="events23 grid grid-cols-3">
            {zealevents && zealevents.length > 0
              ? zealevents
                  .filter((val) => {
                    if (searchQuery === "" || searchQuery === undefined) {
                      // console.log(val.name);
                      return val;
                    } else if (
                      searchQuery &&
                      val.name &&
                      val.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ) {
                      // console.log(val);
                      return val;
                    }
                  })
                  .filter((val) => {
                    if (!selectedDay || selectedDay === "All") {
                      return true;
                    } else {
                      const dateString = val.datetime;
                      const date = new Date(dateString);
                      const dayOfWeek = date.getDay();
                      const selectedDayNum = parseInt(
                        selectedDay.split(" ")[1]
                      );
                      return dayOfWeek === selectedDayNum;
                    }
                  })
                  .map((val, ind) => <EventCard title={val} index={ind} />)
              : null}
          </div>
        </div>
        
      </div>
      <Ghosts/>
      <Footer />
    </>
  );
}

export default Events;
