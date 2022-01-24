import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Listitem({ list }) {
  return (
    <div className="conatiner-list">
      <div className="card-list">
        <div className="image-list">
          <img className="theimage" src={list.image} />
        </div>
        <p className="title-list">{list.title}</p>
      </div>
    </div>
  );
}

export default Listitem;
