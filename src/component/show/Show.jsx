import React from "react";
import "./show.css";

function Show({ show }) {
  const notClosingStyle = {
    backgroundImage: `url(${show.posterImage})`,
    border: "5px solid white",
  };

  const closingStyle = {
    backgroundImage: `url(${show.posterImage})`,
    border: "5px solid red",
  };

  return (
    <div
      className="show-container"
      style={show.isClosing ? closingStyle : notClosingStyle}
    >
      <div className="show-info">
        <h1 className="show-title">{show.title}</h1>
      </div>
    </div>
  );
}

export default Show;
