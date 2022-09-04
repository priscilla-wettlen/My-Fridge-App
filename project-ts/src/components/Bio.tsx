const Bio = () => {
  const name = "Priscilla";
  const location = "Malmö";
  const diet = "Omnivore";
  return ( 
    <section className="user-bio">
    <svg 
        width="100" 
        height="100" 
        viewBox="0 0 24 24" 
        stroke="#212b36" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        fill="none">
      <circle cx="12" cy="8" r="5" />
      <path d="M3,21 h18 C 21,12 3,12 3,21"/>
      </svg>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>{diet}</h3>
      <p className="bio-info">
        Hello, my name is {name} and I love food but hate food waste.
      </p>
    </section>
   );
}
 
export default Bio;