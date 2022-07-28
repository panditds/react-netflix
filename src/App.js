import React from "react";
import { Card } from "./Card";
import Data from "./Data";
import "./index.css";

function ncard() {
  const cr = (val) => {
    return (
      <Card
        imgscr={
            val.imgscr }
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    );
  };
  return (
    <>
      <h1 className="heading">Top 5 Netflix Series</h1>
      <div className="container">
      {Data.map(cr)}
      </div>
    </>
  );
}

export default ncard;
// function ncard(val){
//     return(
//         <Card
//     imgscr={val.imgscr}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
// />
//     );
// }

// {Data.map(ncard)};
