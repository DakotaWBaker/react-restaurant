import React from 'react'
import Appetizers from './Appetizers';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Breakfast from './Breakfast';
import Dessert from './Dessert';
import dayjs from 'dayjs';
import {useState, useEffect} from "react"
let now = dayjs();
let time = now.format("h:mm:ss a");

console.log(time.toLocaleString())






export default function Menu({ name, menuItems, menuType,props }) {
    // console.log(menuItems[17].location[0].location)
    // let filteredLocation = menuItems.filter((el) => el.location == 2)
    // console.log(filteredLocation)
    const [location, setLocation] = useState('broadway');
    console.log(location)
    let apps = ''
    let lunch= ''
    let din=  ''
    let breakfast= ''
    let dessert = ''
    
    // console.log(menuItems[17].location[0].location)
    if (location === "broadway") {
     apps = menuItems.filter((el) => el.category.title === "Appetizers" && el.location == 2).map(item => <Appetizers  item= {item} />);
     lunch= menuItems.filter((el) => el.category.title === "Lunch" && el.location == 2 ).map(item => <Lunch  item= {item} />);
     din= menuItems.filter((el) => el.category.title === "Dinner" && el.location == 2 ).map(item => <Dinner  item= {item} />);
     breakfast= menuItems.filter((el) => el.category.title === "Breakfast" && el.location == 2 ).map(item => <Breakfast  item= {item} />);
     dessert = menuItems.filter((el) => el.category.title === "Dessert" && el.location == 2 ).map(item => <Dessert  item= {item} />);
  }
  else {
    apps = menuItems.filter((el) => el.category.title === "Appetizers" && el.location == 1).map(item => <Appetizers  item= {item} />);
    lunch= menuItems.filter((el) => el.category.title === "Lunch" ).map(item => <Lunch  item= {item} />);
    din= menuItems.filter((el) => el.category.title === "Dinner" ).map(item => <Dinner  item= {item} />);
    breakfast= menuItems.filter((el) => el.category.title === "Breakfast" ).map(item => <Breakfast  item= {item} />);
    dessert = menuItems.filter((el) => el.category.title === "Dessert" ).map(item => <Dessert  item= {item} />);
  }
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
  <div className="dropdown mb-3">
  <a
    className="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Select Location
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <button className="dropdown-item" onClick={() => setLocation("main")}>
      Main St
    </button>
    <button className="dropdown-item" onClick={() => setLocation("broadway")}>
      S. Broadway
    </button>
  </div>
</div>

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
    } else if (time > Date.parse('5:00:00 pm') || name == 'appetizers' ) {
      return (
        <>
        <div className = "container-fluid">
        <div className = "row">
      
      </div>
      </div>
      <div className = "container menu">
      <div className = "row text-center header">
      <h1>Menu</h1>
      <div className="dropdown mb-3">
  <a
    className="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Select Location
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <button className="dropdown-item" onClick={() => setLocation("main")}>
      Main St
    </button>
    <button className="dropdown-item" onClick={() => setLocation("broadway")}>
      S. Broadway
    </button>
  </div>
</div>
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
      <div className="dropdown mb-3">
  <a
    className="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Select Location
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <button className="dropdown-item" onClick={() => setLocation("main")}>
      Main St
    </button>
    <button className="dropdown-item" onClick={() => setLocation("broadway")}>
      S. Broadway
    </button>
  </div>
</div>
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
        <h2>lunch</h2> 
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
      <h1 className='menu' >Menu</h1>
      <div className="dropdown mb-3">
  <a
    className="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Select Location
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <button className="dropdown-item" onClick={() => setLocation("main")}>
      Main St
    </button>
    <button className="dropdown-item" onClick={() => setLocation("broadway")}>
      S. Broadway
    </button>
  </div>
</div>
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
        <h2 className='menu'>Breakfast</h2> 
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
      <div className="dropdown mb-3">
  <a
    className="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Select Location
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <button className="dropdown-item" onClick={() => setLocation("main")}>
      Main St
    </button>
    <button className="dropdown-item" onClick={() => setLocation("broadway")}>
      S. Broadway
    </button>
  </div>
</div>
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
  
  


