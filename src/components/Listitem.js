import React from 'react';

function Listitem({list}) {
  return <div>
      <h1>{list.title}</h1>
      <img src= {list.image} />
  </div>;
}

export default Listitem;
