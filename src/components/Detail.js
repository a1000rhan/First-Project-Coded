import React from "react";
import { useParams } from "react-router-dom";
import dataStore from "../store/dataStore";
import { Row, Col, Card } from "react-bootstrap";

const Detail = () => {
  const { slug } = useParams();
  const jam3ya = dataStore.tasks.find((elem) => elem.slug === slug);
  console.log(slug);
  return (
    <div>
      <div className="container-detail">
        <h1 className="title-detail">{jam3ya.title}</h1>
        <div className="pic-detail">
          <img className="image-detail" src={jam3ya.image} />
        </div>
        <Card>
          <p>Amount: {jam3ya.amount}</p>
          <p>Limit: {jam3ya.limit}</p>
          <p>Created By: {jam3ya.author.username}</p>
          <p>Start Date: {jam3ya.startDate}</p>
          <p>End Date: {jam3ya.endDate}</p>
        </Card>
      </div>
    </div>
  );
};

export default Detail;
