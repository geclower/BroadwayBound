import React from "react";
import "./show.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";


function Show({ show }) {

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal(){
    setIsOpen(true)
  }

  function closeModal(){
    setIsOpen(false)
  }

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
      onClick={modalIsOpen ? closeModal : openModal}
    >
      <Modal
        isOpen={modalIsOpen}
        className="show-modal-popup"
        >
          <h1 className="modal-show-title">{show.title}</h1>
          <button className="modal-buy-button" onClick= {()=> window.open(show.buyTickets, '_blank')}>BUY TICKETS</button>
      </Modal>
      <div className="show-info">
        <h1 className="show-title">{show.title}</h1>
      </div>
    </div>
  );
}

export default Show;
