import React, { useState } from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem";
import CreateModal from "./CreateModal";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";

import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const List = () => {
  const [query, setQuery] = useState("");
  if (dataStore.isLoading) {
    return (
      <div className="spinner">
        <Spinner animation="border" />
      </div>
    );
  }
  const showList = dataStore.jam3yas
    .filter((list) => list.amount >= query)

    .map((list) => <Listitem list={list} />);

  if (!showList) {
    return <Navigate to={"/404"} />;
  }
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <div className="create-btn">
        <CreateModal />
      </div>
      <div className="align-list">{showList}</div>
    </div>
  );
};

export default observer(List);
