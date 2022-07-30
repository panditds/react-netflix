import React, { useState } from "react";
import { Card } from "./Card";
// import Data from "./Data";
import "./index.css";
import Newcard from "./Newcard";

const Daata = [
  {
    imgscr:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6d2s0GY2VDEf9ldU_vycF3FF1c9fVsOYvsg&usqp=CAU",
    sname: "Peaky Blinders",
    title: "A Netflix original series",
    link: "https://www.netflix.com/in/title/80002479",
  },

  {
    imgscr:
      "https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    sname: "The GRAY MAN",
    title: "A Netflix original series",
    link: "https://www.netflix.com/in/title/81160697",
  },

  {
    imgscr:
      "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    sname: "Money Heist",
    title: "A Netflix original series",
    link: "https://www.netflix.com/in/title/80192098",
  },
  {
    imgscr:
      "https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    sname: "NARCOS",
    title: "A Netflix original series",
    link: "https://www.netflix.com/in/title/80025172",
  },

  {
    imgscr:
      "https://upload.wikimedia.org/wikipedia/en/d/da/DarkNetflixPosterEnglish.jpg",
    sname: "DARK",
    title: "A Netflix original series",
    link: "https://www.netflix.com/in/title/80100172",
  },
];

function Ncard() {
  const cr = (val) => {
    return (
      <Card
        imgscr={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    );
  };

  const [Data, setData] = useState(Daata);

  const addData = (dta) => {
    const updatedData = [dta, ...Data];
    setData(updatedData);
  };

  return (
    <>
      <h1 className="heading">Top Netflix Series</h1>
      <div className="container">
        {Data.map(cr)}
        <Newcard className="newcard" onAddnew={addData} />
      </div>
    </>
  );
}

export default Ncard;
