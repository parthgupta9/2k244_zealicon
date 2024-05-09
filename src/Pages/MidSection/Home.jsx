import React, { useState, useEffect } from "react";
import style from './home.module.css'
import collage from '../../assets/collage.png'
import bingo from '../../assets/bingo.png'
import hdfc from '../../assets/hdfc.png'
import xoxoday from '../../assets/xoxoday.png'
import honda from '../../assets/honda.png'

import Button from "../../components/Button/Button";

const Home = () => {
    const [btn, setBtn] =useState(false);

    const handleShowMore =() =>{
        setBtn(!btn);
        document.getElementById("show").style.display = "block"
    }

    const handleShowLess =() =>{
        setBtn(!btn);
        document.getElementById("show").style.display = "none"
    }

    return (
    <div className={`${style.main}`}>
        <div className={`${style.container}`}>
            <div className={`${style.intro}`}>
                <div className={`${style.left}`}>
                    <p className={`${style.para}`}>
                    Zealicon is the annual techno-cultural festival of JSSATE, Noida. Dedicated to the celebration of creativity and science, it is a stimulating event brimming with youthful dynamism. It transforms the campus into a veritable kaleidoscope of people. Involving multifarious exciting events from technical scratch to cultural zeal. A platform for all the creative minds to express their ideas in the form of events including band performances, discussions, film screenings that are spread over four days. Apart from the exuberant cultural events, Zealicon is also known for its mind boggling technical events that creates an ambience for the technocrats.
                    </p>
                   {!btn && <div onClick={handleShowMore} className={`${style.hide}`}>Show More</div>}
                    <br />
                    
                    <p className={`${style.para} ${style.show1}` } id="show">
                    Zealicon 2023 will cover the aspects of hysterical face of literature along with popular arts, science and technology. This edition of Zealicon promises all the trademarks of the earlier versions. A plethora of events where academicians will vouch out their intellect and artists will showcase the best of art. Projecting the fictitious gesture onto the real world, Zealicon will act as a connecting link between the fantasy and reality. Creating an aura of avidity and togetherness, We hope that Zealicon 2023 will turn out to be a memorable experience for you !
                    </p>
                    {btn && <div onClick={handleShowLess} className={`${style.hide}`}>Show Less</div>}
                </div > 
                <div className={`${style.right}`}>
                    <div className={`${style.glass}`}>
                        <img src={collage} alt="" className={`${style.collageimg}`}/>
                    </div>
                </div>
                <div className={`${style.sponsors}`}>
                    <h2 className={`${style.sphead}`}>Our sponsors</h2>
                    
                    <div className={`${style.spcontent}`}>
                        <img src={hdfc} alt="" className={`${style.hdfcimg}`} />
                        <img src={bingo} alt="" />
                        <img src={xoxoday} alt="" />
                        <img src={honda} alt="" />
                    </div>
                </div>
                
            </div>
            
            

        </div>
       

    </div>
  )
}

export default Home