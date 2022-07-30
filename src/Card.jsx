import React from "react";

function Card(props) {
  return (
    <>
    <div className="card-container">
      <div className="card">
        <img src={props.imgscr} alt="pic" className="card_img" />
        <div className="card_info">
          <span className="card_title">{props.title}</span>
          <h3 className="card_category">{props.sname}</h3>
          <a href={props.link} target="blank">
            <button className="wbtn">Watch Now</button>
          </a>
        </div>
      </div>
      </div>
    
    </>
  );
}
export { Card };
