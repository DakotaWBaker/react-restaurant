import { useState, useEffect } from "react";

import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Breakfast from "./Breakfast";
import Dessert from "./Dessert";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Home from "./Home";
import Footer from "./Footer";
import Menu from "./Menu";
import Loading from "./Loading";
const api = "https://astute-baton-362318.ue.r.appspot.com/api/json/";

export default function App() {
  const [page, setPage] = useState("home");
  const [menuItems, setMenuItems] = useState([]);
  const [menuType, setMenuType] = useState("appetizers");
  console.log(menuType);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(api);
      setMenuItems(response.data);
    }
    getData();
  }, []);

  console.log(page);
  if (page === "home") {
    return (
      <>
        <Navbar page={setPage} />
        <Home />
      </>
    );
  } else if (page === "about") {
    return <h1>About</h1>;
  } else if (page === "menu") {
    return (
      <>
        <Navbar page={setPage} />
        <Menu name={menuType} menuItems={menuItems} menuType={setMenuType} />

        <Footer />
      </>
    );
  }
}
