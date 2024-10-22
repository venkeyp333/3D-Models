import React from "react";
import ChessSetModel from "./ChessSetModel";
import BMWM4Model from "./CarModels/BMWM4";
import NisanR33 from "./CarModels/NisanR33";
import Lamborghini from "./CarModels/lamborghini";
import SportsBike from "./CarModels/SportsBike";
import Raider from "./CarModels/Raider";
import { useSelector } from "react-redux";
import { FaMouse, FaSearchPlus, FaSearchMinus } from 'react-icons/fa'; // Importing icons for instructions

function Hobbies() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div id="hobbies">
      <h3 className={`text-3xl font-bold mt-4 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
        Hobbies
      </h3>

      
    
     

   
      <ChessSetModel />
      <BMWM4Model />
      <NisanR33 />
      <Lamborghini />
      <SportsBike />
      <Raider />
    </div>
  );
}

export default Hobbies;
