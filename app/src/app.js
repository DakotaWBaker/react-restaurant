import { useState, useEffect} from 'react';
import Appetizers from './Appetizers';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Breakfast from './Breakfast';
import Dessert from './Dessert';
import axios from 'axios'
import Navbar from './Navbar';
import Hero from './Hero';
import Home from './Home';
import Footer from './Footer';
const api = 'https://astute-baton-362318.ue.r.appspot.com/api/json/' 
function Menu({ name, menuItems }) {
  const apps = menuItems.filter((el) => el.category.title === "Appetizer" ).map(item => <Appetizers  item={item} />);
  const lunch= menuItems.filter((el) => el.category.title === "Lunch" ).map(item => <Lunch  item= {item} />);
  const din= menuItems.filter((el) => el.category.title === "Dinner" ).map(item => <Dinner  item= {item} />);
  const breakfast= menuItems.filter((el) => el.category.title === "Breakfast" ).map(item => <Breakfast  item= {item} />);
  const dessert = menuItems.filter((el) => el.category.title === "Dessert" ).map(item => <Dessert  item= {item} />);
  if (name== 'dinner') {
    return(
      <div className = "container">
   <div className = "row">
    <div className = "col text-center">
      <h2>Dinner</h2> 
      </div>
   </div>
    <div className = "row">
    {din}
    </div>
    </div>
    )
  } else if (name == 'appetizers') {
    return (
  
   
  <div className = "container">
   <div className = "row">
    <div className = "col text-center">
      <h2>Appetizers</h2> 
      </div>
   </div>
    <div className = "row">
    {apps}
    </div>
    </div>
    )
  } else if (name == 'lunch') {
    return (
      <div className = "container">
      <div className = "row1">
       <div className = "col text-center">
         <h2>Lunch</h2> 
         </div>
      </div>
       <div className = "row">
       {lunch}
       </div>
       </div>
    )
  } else if (name == 'dessert') {
    return (
      <div className = "container">
      <div className = "row">
       <div className = "col text-center">
         <h2>Dessert</h2> 
         </div>
      </div>
       <div className = "row">
       {dessert}
       </div>
       </div>
    )
  }else if (name == 'breakfast') {
    return (
      <div className = "container">
      <div className = "row">
       <div className = "col text-center">
         <h2>Breakfast</h2> 
         </div>
      </div>
       <div className = "row">
       {breakfast}
       </div>
       </div>
    )
  }
}
export default function App() {
  const [page, setPage] = useState ('menu')
  const [menuItems, setMenuItems] = useState([]);
  const [menuType, setMenuType] = useState('appetizers')
    useEffect(() => {
    async function getData() {
      const response = await axios.get(api);
      setMenuItems(response.data);
    }
    getData();
  }, []); 
  
  const nav = <Navbar page = {setPage} />
  
console.log(page)
  if (page === 'home') {
   return ( 
    <>
   <Home nav = {nav}/>
    </>
   )
  }
   else if (page === 'about') {
    return <h1>About</h1> 
   }
   else {
return (
  <>
  <div className = "container-fluid">
    <div className = "row">
  <Navbar page = {setPage}/>
  </div>
  </div>
  <div className = "container">
  <div className = "row text-center header">
  <h1>Menu</h1>
  </div>
  <div className = "row text-center mb-5">
         <div className = "col"> <button className ="menus" id = "dinner" onClick={() =>  setMenuType('dinner')}>Dinner</button></div>
         <div className = "col"> <button className ="menus"  id = 'lunch' onClick={() =>  setMenuType('lunch')}>Lunch</button> </div>
         <div className = "col"> <button className ="menus" id = 'app' onClick={() =>  setMenuType('appetizers')}>Appetizers</button></div>
         <div className = "col"> <button className ="menus" id = 'des' onClick={() =>  setMenuType('dessert')}>Desserts</button></div>
         <div className = "col"><button className ="menus" id = 'bf' onClick={() =>  setMenuType('breakfast')}>Breakfast</button></div>  
         </div>
         </div>
          <ul>
            <Menu
              name ={menuType}
              menuItems={menuItems}
            />
            <Footer />
          </ul>
     </>
    )
}
}
