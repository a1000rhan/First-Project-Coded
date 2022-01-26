import React, { useState } from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem";
import CreateModal from "./CreateModal";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";

const List = () => {
  const currentDate = Date();
  const [query, setQuery] = useState();
  // console.log("🚀 ~ file: List.js ~ line 11 ~ List ~ query", query);
  const showList = dataStore.jam3yas
    .filter((jam3ya) => jam3ya.amount <= parseInt(query))
    .filter((jam3ya) => jam3ya.startDate <= query)
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
