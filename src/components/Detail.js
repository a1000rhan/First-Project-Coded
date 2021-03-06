import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dataStore from "../store/dataStore";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authstore from "../store/AuthStore";
import { observer } from "mobx-react";
import Jam3yaUsers from "./Jam3yaUsers";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Payment from "./Payment";
import moment from "moment";

const Detail = () => {
  const { slug } = useParams();
  const jam3ya = dataStore.jam3yas.find((elem) => elem.slug === slug);

  const MySwal = withReactContent(Swal);

  const navigate = useNavigate();

  const jmembers = jam3ya.users.map((juser) => <Jam3yaUsers juser={juser} />);
  const avaUser =
    authstore.user &&
    jam3ya.users.some((user) => user._id === authstore.user._id);
  const handleJoin = () => {
    console.log();
    if (jam3ya.users.length >= jam3ya.limit) {
      MySwal.fire({
        didOpen: () => {
          MySwal.clickConfirm();
        },
      }).then(() => {
        return MySwal.fire({ icon: "error", text: "Jam3ya is Full" });
      });
    } else if (jam3ya.startDate > moment().format()) {
      this.MySwal.fire({
        icon: "error",
        text: `The Date of ${jam3ya.title} Jam3ya is passed`,
      });
    } else if (avaUser == true) {
      MySwal.fire({
        icon: "error",
        text: `You already joined to ${jam3ya.title} Jam3ya`,
      });
    } else {
      dataStore.joinJam3ya(jam3ya);
    }
  };

  const handleleave = () => {
    if (jam3ya.endDate < moment().format()) {
      MySwal.fire({
        icon: "warning",
        text: "the Jam3ya already Started",
      });
    } else {
      dataStore.leaveJam3ya(jam3ya);

      navigate("/list");
    }
  };
  if (!jam3ya) {
  }
  return (
    <div>
      <Link to="/list">
        <Button className="back-btn">back</Button>
      </Link>
      {authstore.user ? <></> : ""}
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
            <table className="table w-50 ">
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
            <div className="d-flex justify-content-end">
              {authstore.user && (
                <>
                  <Button className="back-btn" onClick={handleJoin}>
                    Join
                  </Button>
                  <Button className="back-btn" onClick={handleleave}>
                    Leave
                  </Button>
                  <Link to="/payment">
                    <Button className="back-btn">Pay</Button>
                  </Link>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default observer(Detail);
