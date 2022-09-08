import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import ShelfContainer from './components/Shelves/Shelves';
import Shelf from './components/Shelves/Shelf';

function User() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <ShelfContainer />
      <Shelf />
     </div>
  );
}

export default User;
