import React from "react";
import teamData from "./data.jsx";
import teamDataTech from "./techteamdata.jsx";
import teamDataMan from "./dataman.jsx";
import { useEffect, useState } from "react";
import "./Team.css";
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/footer";
import Ghosts from "../../components/Ghosts/Ghosts";

function Team() {
  const [team, setTeam] = useState([]);
  const [techTeam, setTechTeam] = useState([]);
  const [manTeam, setManTeam] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setTeam(teamData);
    setTechTeam(teamDataTech);
    setManTeam(teamDataMan);
  }, []);

  return (
    <>
    <Header/>
    <Ghosts/>
    
      <div className="rotate linear infinite flex justify-center bg-center bg-no-repeat bg-cover bg-backYellow justify-items-center topteam">
        <div className="team pt-36 px-4">
       
        </div>
      </div>
      <div className="frames flex flex-row">
        <div className="hidden md:block frame">
          <img
            className="leftframe"
            src="/assets/images/leftframe.png"
            alt=""
          />
        </div>
        <div className="hidden md:block frame">
          <img
            className="rightframe"
            src="/assets/images/rightframe.jpg"
            alt=""
          />
        </div>
      </div>

      {/* <div className=" topteam py-32 flex justify-center bg-center bg-no-repeat bg-cover bg-backYellow h-full justify-items-center land">
        <div className=" px-3 h-full flex justify-center justify-items-center items-center">
          <img className="" src="/assets/images/Teampage.png" alt="" />
        </div>
      </div> */}

      <div className="main">
        <div className="pt-6 ">
          <p className=" text-brighterYellow px-8 text-3xl font-bold">
            {" "}
            Management Team Committee
          </p>
          <div>
            <div className="cards11 pt-16  flex flex-wrap justify-center w-33%">
              {manTeam.map((member) => (
                <div className="w-33% px-10 pb-20 mb-32 pp">
                  <img
                    className="object-cover"
                    src={member.photo}
                    alt={member.name}
                  />
                  <h3 className="bg-brighterYellow w-full text-center">
                    {member.name}
                  </h3>
                  <h3 className="bg-brighterYellow  w-full text-center">
                    {member.designation}
                  </h3>
                </div>
              ))}
            </div>
            {/* //prashant sir principal sir images */}
          </div>
        </div>
        <div class="px-10 grid grid-cols-2 md:grid-cols-3 justify-around">
          <div>
            <p className=" text-brighterYellow px-8 pt-6 text-s md:text-l lg:text-3xl font-bold">
              {" "}
              Technical Committee
            </p>
            <div className="pb-32 text-white text-left px-8 text-xs md:text-md lg:text-xl">
              Dr. K.S. Sujata(Chairman)
              <br />
              Dr. Dheeraj Pandey(Convener)
              <br />
              Dr. Suvandan Saraswat(Member)
              <br />
              Dr. Richa Verma(Member)
              <br />
            </div>
          </div>
          <div>
            <p className=" text-brighterYellow px-8 pt-6 text-s md:text-l lg:text-3xl font-bold">
              {" "}
              Cultural and Literary Committee
            </p>
            <div className="pb-32 text-white text-left px-8 text-xs md:text-md lg:text-xl">
              Dr. Roli Verma(Chairman)
              <br />
              Dr. Ashima Srivastava(Convener)
              <br />
              Dr. Nishi Sharma(Member)
              <br />
              Dr. Kirti Srivastava(Member)
              <br />
            </div>
          </div>
          <div>
            <p className=" text-brighterYellow px-8 pt-6 text-s md:text-l lg:text-3xl font-bold">
              {" "}
              Finance Committee
            </p>
            <div className="pb-32 text-white text-left px-8 text-xs md:text-md lg:text-xl">
              Dr. Manoj Kumar N S(Chairman)
              <br />
              Dr. R S Jagdish(Convener)
              <br />
              Dr. S.S. Shirur(member) <br />
              Dr. Prashant Chauhan(member) <br />
            </div>
          </div>
          <div>
            <p className=" text-brighterYellow px-8 pt-6 text-s md:text-l lg:text-3xl font-bold">
              {" "}
              Discipline Committee
            </p>
            <div className="pb-32 text-white text-left px-8 text-xs md:text-md lg:text-xl">
              Dr. Mayank Singh(Chairman)
              <br />
              Dr. Arun Kumar G.(Convener)
              <br />
              Dr. Sanjiba Kr Bisoyi(member)
              <br />
              Dr. B P Mishra(member)
              <br />
              Ms. Chhaya Grover(member)
              <br />
            </div>
          </div>
          <div>
            <p className=" text-brighterYellow px-8 pt-6 text-s md:text-l lg:text-3xl font-bold">
              {" "}
              Publicity/Media/ Banner
            </p>
            <div className="pb-32 text-white text-left px-8 text-xs md:text-md lg:text-xl">
              Dr. Yogendra Singh (Chairman)
              <br />
              Mr. A N Veerendra Kumar (Convener)
              <br />
              Mr. Naveen J.(member)
              <br />
              Mr. Girish B.E(member)
              <br />
            </div>
          </div>
          <div>
            <p className=" text-brighterYellow px-8 pt-6 text-s md:text-l lg:text-3xl font-bold">
              {" "}
              Sponsorship Committee
            </p>
            <div className="pb-32 text-white text-left px-8 text-xs md:text-md lg:text-xl">
              Dr. Prashant Chauhan (Chairman)
              <br />
              Dr. Nitin Kumar Chauhan(Convener)
              <br />
              Dr. Nirmal Agarwal(member)
              <br />
            </div>
          </div>
          <div>
            <p className=" text-brighterYellow px-8 pt-6 text-s md:text-l lg:text-3xl font-bold">
              {" "}
              Inauguration Committee
            </p>
            <div className="pb-32 text-white text-left px-8 text-xs md:text-md lg:text-xl">
              Dr. Pranava Manjari (Chairman)
              <br />
              Dr. Ranu Pandey (Convener)
              <br />
              Ms. Priyanka Singh(member)
              <br />
              Ms. Divya Chandra(member)
              <br />
            </div>
          </div>
          <div>
            <p className=" text-brighterYellow px-8 pt-6 text-s md:text-l lg:text-3xl font-bold">
              {" "}
              Registration Committee
            </p>
            <div className="pb-32 text-white text-left px-8 text-xs md:text-md lg:text-xl">
              Dr. Bhupender Parashar (Chairman)
              <br />
              Dr. Nikunj Agarwal (Convener)
              <br />
              Mr. Rajesh Kumar(member)
              <br />
              Mr. Madan Prasad(member)
            </div>
          </div>
          <div>
            <p className=" text-brighterYellow px-8 pt-6 text-s md:text-l lg:text-3xl font-bold">
              {" "}
              Stationary Committee
            </p>
            <div className="pb-32 text-white text-left px-8 text-xs md:text-md lg:text-xl">
              Dr. S.S Shirur(Chairman)
              <br />
              Mr. Deependra Sharma (Convener)
              <br />
              Mr. Udit Mittal(member)
              <br />
              Ms. Sangeeta Singh(member)
              <br />
            </div>
          </div>
        </div>
        <p className=" text-brighterYellow px-8 pt-6 text-3xl font-bold">
          {" "}
          Core Team Committee
        </p>
        <div className=" ">
          <div className="cards11 pt-16  flex flex-wrap justify-center w-full">
            {team.map((member) => (
              <div className="w-33% px-10 pb-20 mb-32 pp">
                <img
                  className="object-cover"
                  src={member.photo}
                  alt={member.name}
                />
                <h3 className="bg-brighterYellow w-full text-center">
                  {member.name}
                </h3>
                <h3 className="bg-brighterYellow  w-full text-center">
                  {member.designation}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <p className=" text-brighterYellow px-8 pt-10 text-3xl font-bold">
          {" "}
          Tech Team
        </p>
        <div className=" pb-36">
          <div className="cards11 pt-16  flex flex-wrap justify-center w-full">
            {techTeam.map((member) => (
              <div className="w-33% px-10 pb-20 mb-32 pp">
                <img
                  className="object-cover"
                  src={member.photo}
                  alt={member.name}
                />
                <h3 className="bg-brighterYellow w-full text-center">
                  {member.name}
                </h3>
                <h3 className="bg-brighterYellow  w-full text-center">
                  {member.designation}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;