import React from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem";
import CreateModal from "./CreateModal";
import { observer } from "mobx-react";

const List = () => {
  const showList = dataStore.tasks.map((list) => <Listitem list={list} />);

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
