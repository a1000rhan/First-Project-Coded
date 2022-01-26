import React from "react";
import authstore from "../store/AuthStore";
import { observer } from "mobx-react";
import { Card } from "react-bootstrap";
import dataStore from "../store/dataStore";

function UserProfile() {
  const userJam3ia = dataStore.jam3yas.filter(
    (juser) => juser.users == authstore.user
  );
  console.log(userJam3ia);
  return (
    <div>
      <div className="container-detail">
        <div className="box">
          <img
            className="profile-image"
            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
            alt="user profile"
          />
          <Card className="card-detail">
            <table>
              <tr>
                <th>Username:</th>
                <td>{authstore.user ? authstore.user.username : ""}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{authstore.user ? authstore.user.email : ""}</td>
              </tr>
              <p>{userJam3ia}</p>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default observer(UserProfile);
