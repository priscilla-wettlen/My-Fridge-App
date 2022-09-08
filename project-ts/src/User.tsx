import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import ShelfContainer from './components/Shelves/Shelves';

function User() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <ShelfContainer />
     </div>
  );
}

export default User;
