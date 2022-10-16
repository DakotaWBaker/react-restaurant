import React from "react";
import Location from "./Location";
export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-3">
          <p>
            Happy Grillmore <br />
            348 E Main St, Lexington, KY <br />
            (859)414-4124 <br />
            AreYouTooGoodForYourHome@gmail.com
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
