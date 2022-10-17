import React from "react";
import dining1 from "./dining1.jpg";
import dining2 from "./dining2.jpg";
import dining3 from "./dining3.jpg";
import dining4 from "./dining4.jpg";
import dining5 from "./dining5.jpg";
import dining6 from "./dining6.jpg";
export default function DiningRoom() {
  return (
    <div className="container dining">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="explore">Explore</h1>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12">
          <h5>Our dining room</h5>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          {" "}
          <img className="diningpics" src={dining1} />{" "}
        </div>
        <div className="col-4">
          {" "}
          <img className="diningpics" src={dining2} />{" "}
        </div>
        <div className="col-4">
          {" "}
          <img className="diningpics" src={dining3} />{" "}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          {" "}
          <img className="diningpics" src={dining4} />{" "}
        </div>
        <div className="col-4">
          {" "}
          <img className="diningpics" src={dining5} />{" "}
        </div>
        <div className="col-4">
          {" "}
          <img className="diningpics" src={dining6} />{" "}
        </div>
      </div>
    </div>
  );
}
