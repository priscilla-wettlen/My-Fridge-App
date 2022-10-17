import Bio from '../components/Bio/Bio';
import Shelf from '../components/Shelves/Shelf';


function User() {
  return (
    <div className="App">
      <Bio name="Britney Spears" city="Los Angeles, CA" diet="Omnivore" bio="Britney💁🏼‍♀️ 40 years old🥳 I love food🍕🍔 but hate food waste😒🙅🏼‍♀️" />
      <Shelf />
     </div>
  );
}

export default User;
