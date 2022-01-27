import { Link, Navigate } from "react-router-dom";
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
        <Link to={`/list/${list.slug}`}>
          <div className="image-list">
            <img className="theimage" src={list.image} alt={list.slug} />
          </div>
          <p className="title-list">{list.title}</p>
        </Link>
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
