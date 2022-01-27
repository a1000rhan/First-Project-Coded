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

  const myJam3yaTitle =
    authstore.user && userJam3ia.map((e) => <p>{e.title}</p>);
  const myJam3yaAmount =
    authstore.user && userJam3ia.map((e) => <p>{e.amount}</p>);
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
          <Card className="card-detail w-75 text-start ">
            <table className="table table-sm">
              <tr className="d-flex">
                <th>Username:</th>
                <td>{authstore.user ? authstore.user.username : ""}</td>
              </tr>
              <tr className="d-flex">
                <th>Email:</th>
                <td>{authstore.user ? authstore.user.email : ""}</td>
              </tr>

              <tbody className="d-flex">
                <th>Jam3iat:</th>
                <th>Title:</th>
                <td>{myJam3yaTitle}</td>
                <th>Amount:</th>
                <td>{myJam3yaAmount}</td>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default observer(UserProfile);
