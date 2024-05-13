import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import cartoon from "../../assets/images/pexels-pixabay-264905.jpg";
import Robowars from "../../assets/images/robowars.png";
import Eventshead from "../../assets/images/eventshead.png";
import leftFrame from "../../assets/images/leftFrame.png";
import rightFrame from "../../assets/images/rightFrame.png";

import { useNavigate } from "react-router-dom";
import "./Events.css";
import axios from "axios";
function EventDescription(props) {
  const [allcards, setAllCards] = useState(null);
  // console.log(props.allcards);
  const { uniqueid } = useParams();
  console.log(uniqueid);

  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    axios
      .get("https://web-production-799f.up.railway.app/events/all/")
      .then((response) => {
        // console.log(response?.data);
        setAllCards(response?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // const { name, description, datetime, prizes, venue } = eventData;
  // if (allcards && allcards.length > 0) {
  const card =
    allcards && allcards.length > 0
      ? allcards.find((card) => card.id === Number(uniqueid))
      : null;
  console.log(card);
  // }

  //   const isoString = "2023-04-26T12:00:00+05:30";
  const date = new Date(card?.datetime);

  const year = date.getFullYear(); // 2023
  const month = date.getMonth() + 1; // 4 (months are zero-indexed, so we add 1)
  const day = date.getDate(); // 26
  const hours = date.getHours(); // 12
  const minutes = date.getMinutes(); // 0
  const seconds = date.getSeconds(); // 0
  const timezoneOffset = date.getTimezoneOffset();
  return (
    <>
      
      {/* {console.log(allcards)} */}
      <div className="rotate linear infinite flex justify-center bg-center bg-no-repeat bg-cover bg-backYellow h-full justify-items-center land">
        <div className="event pt-36">
          <img src={Eventshead} alt="" />
        </div>
      </div>
      
      <div className="Zeal-bg card flex flex-col justify-center items-center md:flex-row w-full ">
        <div className="pt-8  leftPanel md:w-1/3  md:pl-16 pr-5">
          <img
            className="w-full border-2 border-solid border-white"
            src={`${card?.event_img}`}
            alt=""
          />
        </div>
        <div className="pt-10 rightPanel md:w-2/3 m-2">
          <div className="title text-brighterYellow text-4xl font-bold ">
            {`${card?.name}`}
          </div>
          <div className="description text-white  text-2xl ">
          
            {`${card?.description}`}
          </div>
          <div className="details grid grid-cols-1 md:grid-cols-2 p-2">
            <div className="date text-xl text-white p-2">
              <CalendarTodayIcon sx={{ color: "white", padding: "2px" }} />
              {/* Date <p>{`${new Date(datetime).toLocaleDateString()}`}</p> */}{" "}
              Date: {`${day}` + "th" + " " + "April"}
            </div>
            <div className="time text-xl text-white p-2">
              <AccessAlarmIcon sx={{ color: "white", padding: "2px" }} />
              {/* Time <p>{`${new Date(datetime).toLocaleTimeString()}`}</p> */}{" "}
              Time: {"12" + "pm"}
            </div>
            <div className="venue text-xl text-white p-2">
              <LocationOnIcon sx={{ color: "white", padding: "2px" }} />
              {/* Venue <p>{`${venue}`}</p> */} Venue: {`${card?.venue}`}
            </div>
            <div className="registration text-xl text-white p-2">
              Registration Deadline:<p>25th April'23</p>
            </div>
            <div className="text-white text-xl font-bold p-2">
              {/* Prizes Worth <p className="">{`${prizes}`}</p> */} Prizes:{" "}
              {`${card?.prizes}`}
            </div>
            <div className="text-white text-xl font-bold p-2">
              Contact <p className=""></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDescription;
