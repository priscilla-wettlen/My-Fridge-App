import './Header.modules.css'; 

const Header = () => {
  const logo = "My Fridge";
  const yourFridge = "Your Fridge"
  const yourFriends = "Your Friends"
  const about = "About My Fridge"
  const logout = "Logout"
  return (  
    <header>
      <h1>{logo}</h1>
      <nav>
        <ul className="ul">
          <li className="li">{yourFridge}</li>
          <li className="li">{yourFriends}</li>
          <li className="li">{about}</li>
          <li className="li">{logout}</li>
        </ul>
      </nav>
    </header>
    
  );
}
 
export default Header;