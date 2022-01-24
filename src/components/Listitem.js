import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function Listitem({list}) {
  return (
      // <div>
      // <div className='container-list'>
      // <div className='align-list'>
      // <div className='text-list'><h1 className='h1-list'>{list.title}</h1></div>
      // <img className='image-list' src= {list.image} />
      // </div>
      // </div>
      // </div>
     <div>
      <Card className='card-list'>
        <div className='image-div'><Card.Img variant="top" className='image-list' src={list.image} /></div>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  ) 
}

export default Listitem;
