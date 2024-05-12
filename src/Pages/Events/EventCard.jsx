import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import Robowars from "../Images/robowars.png";
import Robowars from "../../assets/images/robowars.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Events.css";
import axios from "axios";
import EventDescription from "./EventDescription";
export default function EventCard(props) {
  // console.log(props.index);
  // const [meracard, setmeracard] = useState("");
  // // console.log(props.title);
  // setmeracard(props.title);
  // <EventDescription allcards={meracard} />;
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  // console.log(props);
  const imageurl = props.title.event_img;
  // console.log(imageurl);
  let str = props.title.name;
  str = str.charAt(0).toUpperCase() + str.slice(1);

  const dateString = props.title.datetime;
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  let myString = dayOfWeek.toString();
  // if (props.day === `Day ${myString}`) {

  // }
  // console.log(dayOfWeek); // Output: "Wednesday"
  // props.title.datetime has date now find day and just display the day.

  // const navigate = useNavigate();
  const handleClick = (cardData) => {
    if (cardData != null) {
      setSelectedCard(cardData);
      // <EventDescription cardDescription={selectedCard} />;
      // console.log(cardData.id);
      const cardId = cardData?.id;

      navigate(`/events/description/${cardId}`);
      // console.log("Navigating to:", `/events/description/${selectedCard}`);
      // axios
      //   .get("https://web-production-799f.up.railway.app/events/all/")
      //   .then((response) => console.log(response?.data?.[props.ind]));
      // navigate(`/events/description/${selectedCard}`);
      // <EventDescription uniqueid={selectedCard} />;
    }
  };
  return (
    <>
      <div
        onClick={() => handleClick(props.title)}
        className="pl-0 card pt-20 rounded-md"
      >
        <Card
          sx={{
            maxWidth: 300,
            borderRadius: 4,
            border: "1px solid white",
            borderColor: "white",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="80"
              image={props.title.event_img}
              alt="green iguana"
              className="my-card-media"
            />
            {/* <img src={imageurl} alt="green" /> */}
            <div className="bg-brighterYellow flex justify-around items-center content">
              <CardContent className="bg-brighterYellow flex flex-col-reverse justify-start items-baseline">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 700 }}
                >
                  {str}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Day {dayOfWeek}
                </Typography>
              </CardContent>
              <div className="border-2 border-solid bg-landingPink rounded-full">
                <ChevronRightIcon />
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
