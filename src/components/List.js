import React from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem";
import CreateModal from "./CreateModal";
import { observer } from "mobx-react";
import { Navigate } from "react-router-dom";
const List = () => {
  const showList = dataStore.jam3yas.map((list) => <Listitem list={list} />);
  if (!showList) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="create-btn">
        <CreateModal />
      </div>
      <div className="align-list">{showList}</div>
    </div>
  );
};

export default observer(List);
