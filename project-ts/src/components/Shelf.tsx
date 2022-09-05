
import Foods from './fakeApi.json';

const Shelf = () => {
  console.log(Foods)
  return (
    <div className='shelf'>
      <p>hello</p>
      <div>
        {Foods[0].item.name}
      </div>
      
    </div>
  )
}

export default Shelf;