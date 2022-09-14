//import { useState } from 'react';
//import Card from './Card';
import FruitsAndVegs from './FruitsAndVegs';
import DairyProducts from './DairyProducts';
import ReadyToEat from './ReadyToEat';



const Shelf = () => {
  return (
    <div>
      <FruitsAndVegs />
      <DairyProducts />
      <ReadyToEat />
    </div>
  )
}

export default Shelf;