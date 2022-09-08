import userList from '../userList.json';

type UserInfo ={
    name: string,
    location: string,
    diet: string
  } 
const Bio = () => {
  console.log(userList)
  return ( 
    <div className="userBio">
      <h1>{userList[0].name}</h1>
   </div>
   );
}
 
export default Bio;