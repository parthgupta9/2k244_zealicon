import React, { useEffect, useState } from "react";
import "./Events.css";
import Header from "../../components/Header/Header.jsx";
import footer from "../../components/Footer/footer.jsx";
import Eventshead from "../../assets/images/eventshead.png";
import leftFrame from "../../assets/images/leftFrame.png";
import rightFrame from "../../assets/images/rightFrame.png";
import ZealCard from "./ZealCard.jsx";

import axios from "axios";
import EventCard from "./EventCard";

import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import ZealiconPDF from "../../assets/EventSchedule/zealicon23.pdf";
import BrochurePDF from "../../assets/EventSchedule/brochure.pdf";
import { Link } from "react-router-dom";

function Events(){
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
  return (
    <>
      {/* <Header/> */}
      {/* <div className="rotate linear infinite flex justify-center bg-center bg-no-repeat bg-cover bg-backYellow h-full justify-items-center land">
        <div className="event pt-36">
          <img src={Eventshead} alt="" />
        </div>
      </div>
      <div className="bands flex flex-row">
        <div className="frame">
          <img className="leftFrame" src={leftFrame} alt="" />
        </div>
        <div className="frame">
          <img className="rightFrame" src={rightFrame} alt="" />
        </div>
      </div> */}
      <div className="Zeal-bg pt-7">
        {/* <ZealCard /> */}
        <div className="py-6">
          <p className=" text-brighterYellow text-4xl pb-6 font-bold pl-4 md:pl-24 ">
            {" "}
            Gallery
          </p>
          <div className="flex-col flex md:flex-row items-center justify-center gap-5 py-2 w-[100%]">
            <iframe
              className="md:w-[30%] w-[80%] h-[150px] md:h-[250px]"
              src="https://www.youtube.com/embed/W0iwArb_s9w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              className="md:w-[30%] w-[80%] h-[150px] md:h-[250px]"
              src="https://www.youtube.com/embed/fiO3yW_GOP8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="flex-col flex md:flex-row pt-8 items-center justify-center gap-5">
          <Link to={BrochurePDF} target="_blank">
            <button className="text-white border-2 rounded-md px-12 mx-2 py-2">
              Fest Brochure
            </button>
          </Link>
          <Link to={ZealiconPDF} target="_blank">
            <button className="text-white bg-landingPink rounded-md px-12 py-2.5">
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
                className="input w-96 pl-10 bg-white text-black rounded-xl h-10"
              />
              <button
                type="submit"
                style={{ position: "absolute", top: 10, left: 10 }}
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
      <footer />
    </>
  );
}

export default Events;
