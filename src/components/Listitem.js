import { Link } from "react-router-dom";
import React from "react";

function Listitem({ list }) {
  return (
    <div className="conatiner-list">
      <div className="card-list">
        <div className="image-list">
          <Link to={`/list/${list.slug}`}>
            <img className="theimage" src={list.image} />
          </Link>
        </div>
        <p className="title-list">{list.title}</p>
      </div>
    </div>
  );
}

export default Listitem;
