import React from 'react';
import styles from './Shelf.module.css';
import * as data from '../foodApi.json';
const shelfString = JSON.stringify(data);
const shelves = JSON.parse(shelfString).shelves;

type Shelf = {
    id: number,
    name: string,
  url: string,
  

}

const Shelves: React.FC<{ shelves: Shelf[] }> = ({ shelves }) => {
  return (
    
    <div className={styles.container}>
      {shelves.map((shelf: Shelf) => {
        return (
          <div className={styles.shelf} key={shelf.id}>
            <img src={shelf.url} width={200} alt="" />
          </div>
        )
      })}
      </div>
    
      )
}

const ShelfContainer: React.FC<{}> = () => {
  return (
    <div>
      <Shelves shelves={shelves} />
    </div>
  )
}
  
// const Shelf = () => {
//   console.log(Foods)
  
//   const foodItems = Foods.map(food => <div className="Shelf"> {food} </div>)
//   return (
    
//       <div>
//         {foodItems}
//       </div>
      
  

  
//   )
// }

export default ShelfContainer;