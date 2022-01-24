import React from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem";
import CreateModal from "./CreateModal";

const List = () => {
  const showList = dataStore.tasks.map((list) => <Listitem list={list} />);

  return (
  <div>
    <div>
      <CreateModal />
    </div>
  <div>
    {showList}
    </div>
  </div>
  )
};

export default List;
