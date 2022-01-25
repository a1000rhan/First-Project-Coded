import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import dataStore from "../store/dataStore";
import { observer } from "mobx-react";
import UpdateModal from "./UpdateModal";
import authstore from "../store/AuthStore";

function Listitem({ list }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleDelete = () => {
    dataStore.deleteTask(list._id);
  };

  return (
    <div className="conatiner-list">
      <div className="card-list">
        <div className="image-list">
          <Link to={`/list/${list.slug}`}>
            <img className="theimage" src={list.image} alt={list.slug} />
          </Link>
        </div>
        <p className="title-list">{list.title}</p>
        <div>
          {authstore.user ? (
            <>
              <Button variant="danger" className="delete-edit-btn">
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={handleDelete}
                ></i>
              </Button>
              <Button variant="light" className="delete-edit-btn">
                <i
                  className="fa fa-edit"
                  aria-hidden="true"
                  onClick={openModal}
                ></i>
              </Button>
            </>
          ) : (
            ""
          )}

          <UpdateModal isOpen={isOpen} closeModal={closeModal} list={list} />
        </div>
      </div>
    </div>
  );
}

export default observer(Listitem);
