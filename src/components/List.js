import React from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem"

const List = () => {
<<<<<<< HEAD
  const showList = dataStore.tasks.map ((list) => <Listitem list = {list} />);

  return <div> 
    {showList}
  </div>;
=======
  return (
    <div>
      <h1>List</h1>
    </div>
  );
>>>>>>> 653e45d64cb4f254fb5e9a63423bdfea6baaa099
};

export default List;
