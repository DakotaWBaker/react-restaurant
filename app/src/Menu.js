import React from 'react'
import Appetizers from './Appetizers';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Breakfast from './Breakfast';
import Dessert from './Dessert';
import Navbar from './Navbar';





export default function Menu({ name, menuItems, menuType,props }) {
    const apps = menuItems.filter((el) => el.category.title === "Appetizer").map(item => <Appetizers  item= {item} />);
    const lunch= menuItems.filter((el) => el.category.title === "Lunch" ).map(item => <Lunch  item= {item} />);
    const din= menuItems.filter((el) => el.category.title === "Dinner" ).map(item => <Dinner  item= {item} />);
    const breakfast= menuItems.filter((el) => el.category.title === "Breakfast" ).map(item => <Breakfast  item= {item} />);
    const dessert = menuItems.filter((el) => el.category.title === "Dessert" ).map(item => <Dessert  item= {item} />);
    console.log(menuItems);
 
    if (name== 'dinner') {
      return( 
        <>
        <div className = "container-fluid">
    <div className = "row">
  </div>
  </div>
  <div className = "container menu">
  <div className = "row text-center header">
  <h1>Menu</h1>
  </div>
  <div className = "row text-center mb-5">
         <div className = "col"> <button className ="menus" id = "dinner" onClick={() =>  menuType('dinner')}>Dinner</button></div>
         <div className = "col"> <button className ="menus"  id = 'lunch' onClick={() =>  menuType('lunch')}>Lunch</button> </div>
         <div className = "col"> <button className ="menus" id = 'app' onClick={() =>  menuType('appetizers')}>Appetizers</button></div>
         <div className = "col"> <button className ="menus" id = 'des' onClick={() =>  menuType('dessert')}>Desserts</button></div>
         <div className = "col"><button className ="menus" id = 'bf' onClick={() =>  menuType('breakfast')}>Breakfast</button></div>  
         </div>
         </div>
          <ul>
            <Menu
              name ={menuType}
              menuItems={menuItems}
            />
          </ul>
        <div className = "container menu">
     <div className = "row">
      <div className = "col text-center">
        <h2>Dinner</h2> 
        </div>
     </div>
      <div className = "row">
      {din}
      </div>
      </div>
      </>
      )
    } else if (name == 'appetizers') {
      return (
        <>
        <div className = "container-fluid">
        <div className = "row">
      
      </div>
      </div>
      <div className = "container menu">
      <div className = "row text-center header">
      <h1>Menu</h1>
      </div>
      <div className = "row text-center mb-5">
             <div className = "col"> <button className ="menus" id = "dinner" onClick={() =>  menuType('dinner')}>Dinner</button></div>
             <div className = "col"> <button className ="menus"  id = 'lunch' onClick={() =>  menuType('lunch')}>Lunch</button> </div>
             <div className = "col"> <button className ="menus" id = 'app' onClick={() =>  menuType('appetizers')}>Appetizers</button></div>
             <div className = "col"> <button className ="menus" id = 'des' onClick={() =>  menuType('dessert')}>Desserts</button></div>
             <div className = "col"><button className ="menus" id = 'bf' onClick={() =>  menuType('breakfast')}>Breakfast</button></div>  
             </div>
             </div>
              <ul>
                <Menu
                  name ={menuType}
                  menuItems={menuItems}
                />
              </ul>
     
    <div className = "container menu">
     <div className = "row">
      <div className = "col text-center">
        <h2>Appetizers</h2> 
        </div>
     </div>
      <div className = "row">
      {apps}
      </div>
      </div>
      </>
      )
    } else if (name == 'lunch') {
      return (
        <>
        <div className = "container-fluid">
        <div className = "row">
      </div>
      </div>
      <div className = "container menu">
      <div className = "row text-center header">
      <h1>Menu</h1>
      </div>
      <div className = "row text-center">
             <div className = "col"> <button className ="menus" id = "dinner" onClick={() =>  menuType('dinner')}>Dinner</button></div>
             <div className = "col"> <button className ="menus"  id = 'lunch' onClick={() =>  menuType('lunch')}>Lunch</button> </div>
             <div className = "col"> <button className ="menus" id = 'app' onClick={() =>  menuType('appetizers')}>Appetizers</button></div>
             <div className = "col"> <button className ="menus" id = 'des' onClick={() =>  menuType('dessert')}>Desserts</button></div>
             <div className = "col"><button className ="menus" id = 'bf' onClick={() =>  menuType('breakfast')}>Breakfast</button></div>  
             </div>
             </div>
              <ul>
                <Menu
                  name ={menuType}
                  menuItems={menuItems}
                />
              </ul>
     
    <div className = "container menu">
     <div className = "row mb">
      <div className = "col text-center">
        <h2>Lunch</h2> 
        </div>
     </div>
      <div className = "row">
      {lunch}
      </div>
      </div>
      </>
      )
    }else if (name == 'breakfast') {
      return (
        <>
        <div className = "container-fluid">
        <div className = "row">
      </div>
      </div>
      <div className = "container menu">
      <div className = "row text-center header">
      <h1>Menu</h1>
      </div>
      <div className = "row text-center mb-5">
             <div className = "col"> <button className ="menus" id = "dinner" onClick={() =>  menuType('dinner')}>Dinner</button></div>
             <div className = "col"> <button className ="menus"  id = 'lunch' onClick={() =>  menuType('lunch')}>Lunch</button> </div>
             <div className = "col"> <button className ="menus" id = 'app' onClick={() =>  menuType('appetizers')}>Appetizers</button></div>
             <div className = "col"> <button className ="menus" id = 'des' onClick={() =>  menuType('dessert')}>Desserts</button></div>
             <div className = "col"><button className ="menus" id = 'bf' onClick={() =>  menuType('breakfast')}>Breakfast</button></div>  
             </div>
             </div>
              <ul>
                <Menu
                  name ={menuType}
                  menuItems={menuItems}
                />
              </ul>
     
    <div className = "container menu">
     <div className = "row">
      <div className = "col text-center">
        <h2>Breakfast</h2> 
        </div>
     </div>
      <div className = "row">
      {breakfast}
      </div>
      </div>
      </>
      )
    } else if (name == 'dessert') {
      return (
        <>
        <div className = "container-fluid">
        <div className = "row">
      </div>
      </div>
      <div className = "container menu">
      <div className = "row text-center header">
      <h1>Menu</h1>
      </div>
      <div className = "row text-center mb-5">
             <div className = "col"> <button className ="menus" id = "dinner" onClick={() =>  menuType('dinner')}>Dinner</button></div>
             <div className = "col"> <button className ="menus"  id = 'lunch' onClick={() =>  menuType('lunch')}>Lunch</button> </div>
             <div className = "col"> <button className ="menus" id = 'app' onClick={() =>  menuType('appetizers')}>Appetizers</button></div>
             <div className = "col"> <button className ="menus" id = 'des' onClick={() =>  menuType('dessert')}>Desserts</button></div>
             <div className = "col"><button className ="menus" id = 'bf' onClick={() =>  menuType('breakfast')}>Breakfast</button></div>  
             </div>
             </div>
              <ul>
                <Menu
                  name ={menuType}
                  menuItems={menuItems}
                />
              </ul>
     
    <div className = "container menu">
     <div className = "row">
      <div className = "col text-center">
        <h2>Dessert</h2> 
        </div>
     </div>
      <div className = "row">
      {dessert}
      </div>
      </div>
      </>
      )
    }
  }
  
  


