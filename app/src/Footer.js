import React from "react";
import Location from "./Location";
import addy from "./location.svg"
import email from "./Email.svg";
import phone from './Phone.svg';
export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-3">
          <p>
            Happy Grillmore </p>
          <p>  < img src ={addy} /> 348 E Main St, Lexington, KY </p>
           <p> <img id = "logos" src = {phone} /> (859)414-4124 </p>
           <p> <img id = "logos" src = {email} /> AreYouTooGoodForYourHome@gmail.com
          </p>
        </div>
        <div className="col-3"></div>
        <div className="col-6">
          <Location />
        </div>
      </div>
    </div>
  );
}
