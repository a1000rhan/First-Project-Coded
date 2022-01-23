import React from 'react';

function Listitem({list}) {
  return <div className='container'>
      <div>
      <h1>{list.title}</h1>
      <img className='image' src= {list.image} />
      </div>
  </div>;
}

export default Listitem;
