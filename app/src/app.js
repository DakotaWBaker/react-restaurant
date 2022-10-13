import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const api = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
import Appetizers from "./Appetizers";
import Lunch from "./Lunch";
import Dessert from "./Dessert";
import Dinner from "./Dinner";
import Breakfast from "./Breakfast";

export default function App() {
  const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
    async function getData() {
      const response = await axios.get(api);
      setMenuItems(response.data);
    }
    getData();
  }, []); 
  const apps = menuItems.filter((el) => el.category.title === "Appetizer" ).map(item => <Appetizers  item={item} />);
  const lunch= menuItems.filter((el) => el.category.title === "Lunch" ).map(item => <Lunch  item= {item} />);
  const din= menuItems.filter((el) => el.category.title === "Dinner" ).map(item => <Dinner  item= {item} />);
  const breakfast= menuItems.filter((el) => el.category.title === "Breakfast" ).map(item => <Breakfast  item= {item} />);
  const dessert = menuItems.filter((el) => el.category.title === "Dinner" ).map(item => <Dessert  item= {item} />);
// console.log(apps)
return (
  <>
<h2>Appetizers</h2> 
    <div>{apps}</div>
    <h2>Lunch</h2>
    <div>{lunch}</div>
    <h2>Dinner</h2>
    <div>{din}</div>
    <h2>Dessert</h2>
    <div>{dessert}</div>
    <h2>Breakfast</h2>
    <div>{breakfast}</div>
    </>
)
}




