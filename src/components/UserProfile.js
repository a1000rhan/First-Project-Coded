import React from "react";
import authstore from "../store/AuthStore";
import { observer } from "mobx-react";
import { Card } from "react-bootstrap";
import dataStore from "../store/dataStore";
import UpdateUserModal from "./UpdateUserModal";

function UserProfile() {
  const userJam3ia =
    authstore.user &&
    dataStore.jam3yas.filter((jam3ia) =>
      jam3ia.users.some((user) => user._id === authstore.user._id)
    );
  const myJam3ya =
    authstore.user &&
    userJam3ia.map((e) => (
      <div className="w-50">
        <table class="table ">
          <thead>
            <th>title:&nbsp;&nbsp;{e.title}:</th>
            <td className="p-1">Amount:&nbsp;&nbsp;&nbsp;&nbsp;{e.amount}</td>
          </thead>
        </table>
      </div>
    ));
  console.log(userJam3ia);
  return (
    <div>
      {authstore.user && <UpdateUserModal />}
      <div className="container-detail">
        <div className="box">
          <img
            className="profile-image"
            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
            alt="user profile"
          />
          <Card className="card-detail w-75 ">
            <table class="table">
              <tr>
                <th>Username:</th>
                <td>{authstore.user ? authstore.user.username : ""}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{authstore.user ? authstore.user.email : ""}</td>
              </tr>
              <tr></tr>

              <th>Jam3iat:</th>
              <tbody>
                <td>{myJam3ya}</td>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default observer(UserProfile);
