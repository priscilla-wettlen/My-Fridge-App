import React from 'react';

const Header = () => {
  const logo:string = "My Fridge";
  return (  
    <header>
      <h1>{logo}</h1>
      <nav>
        <ul>
          <li>Your Fridge</li>
          <li>Your Friends</li>
          <li>Log out</li>
        </ul>
      </nav>
    </header>
    
  );
}
 
export default Header;