import React from "react";
import { observer } from "mobx-react";

function Jam3yaUsers({ juser }) {
  return (
    <div>
      <p>{juser.username}</p>
    </div>
  );
}

export default observer(Jam3yaUsers);
