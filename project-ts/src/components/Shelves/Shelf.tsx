import { useState } from 'react';
import FoodItems from '../foodsAPI.json';

type Food = {
  id: number,
  name: string,
  url: string,
}

const Shelf = () => {
  return (
  <div>
    {
      FoodItems.map(food => {
        return (
          <div key={food.id}>
            {food.name}
            {food.url}
          </div>
        )
      })
      }
    </div>
  )
}

export default Shelf;