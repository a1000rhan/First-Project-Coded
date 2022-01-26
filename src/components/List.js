import React, { useState } from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem";
import CreateModal from "./CreateModal";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";

const List = () => {
  const [query, setQuery] = useState("");
  const showList = dataStore.jam3yas
    .filter((list) => list.amount >= query)

    .map((list) => <Listitem list={list} />);

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
