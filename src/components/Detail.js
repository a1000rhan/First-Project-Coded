import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dataStore from "../store/dataStore";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authstore from "../store/AuthStore";
import { set } from "mobx";

const Detail = () => {
  const { slug } = useParams();
  const jam3ya = dataStore.tasks.find((elem) => elem.slug === slug);
  const [members, setMembers] = useState();

  const handleJoin = () => {
    setMembers(authstore.user);
    dataStore.joinJam3ya(members);
    console.log(members);
  };
  return (
    <div>
      <Link to="/list">
        <Button className="back-btn">back</Button>
      </Link>

      <Button className="back-btn" onClick={handleJoin}>
        Join to Jam3ya
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
                <td>{}</td>
              </tr>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Detail;
