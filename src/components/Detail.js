import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dataStore from "../store/dataStore";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authstore from "../store/AuthStore";
import { observer } from "mobx-react";
import Jam3yaUsers from "./Jam3yaUsers";

const Detail = () => {
  const { slug } = useParams();
  const jam3ya = dataStore.jam3yas.find((elem) => elem.slug === slug);
  const jmembers = jam3ya.users.map((juser) => <Jam3yaUsers juser={juser} />);

  const handleJoin = () => {
    // console.log(jam3ya.limit);
    // console.log(jam3ya.users.length);

    dataStore.joinJam3ya(jam3ya);
  };
  return (
    <div>
      <Link to="/list">
        <Button className="back-btn">back</Button>
      </Link>

      <Button className="back-btn" onClick={handleJoin}>
        Join this Jam3ya
      </Button>

      <div className="container-detail">
        <div className="box">
          <h1 className="title-detail">{jam3ya.title}</h1>
          <div className="pic-detail">
            <img
              className="image-detail"
              src={jam3ya.image}
              alt={jam3ya.slug}
            />
          </div>
          <Card className="card-detail">
            <table>
              <tr>
                <th>Amount:</th>
                <td>{jam3ya.amount}</td>
              </tr>

              <tr>
                <th>Limit:</th>
                <td>{jam3ya.limit}</td>
              </tr>
              <tr>
                <th>Created By:</th>
                <td>{jam3ya.author.username}</td>
              </tr>
              <tr>
                <th>Start Date:</th>
                <td>{jam3ya.startDate}</td>
              </tr>
              <tr>
                <th>End Date:</th>
                <td>{jam3ya.endDate}</td>
              </tr>

              <tr>
                <th>Members</th>
                <td>{jmembers}</td>
              </tr>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default observer(Detail);
