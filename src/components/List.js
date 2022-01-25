import React from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem";
import CreateModal from "./CreateModal";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";

const List = () => {
  const showList = dataStore.tasks.map((list) => <Listitem list={list} />);
  const s = () => {
    const l = amount.amount.filter((s) => <SearchBar s={s} />);
  };
  return (
    <div>
      <div className="create-btn">
        <CreateModal />
      </div>
      <div className="align-list">{showList}</div>
      <SearchBar />
    </div>
  );
};

export default observer(List);
