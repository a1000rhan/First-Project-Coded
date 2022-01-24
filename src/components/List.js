import React from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem";

const List = () => {
  const showList = dataStore.tasks.map((list) => <Listitem list={list} />);

  return <div>{showList}</div>;
};

export default List;
