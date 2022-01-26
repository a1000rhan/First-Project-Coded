import React from 'react';
import authstore from "../store/AuthStore";
import { observer } from "mobx-react";
import { Card } from 'react-bootstrap';
import dataStore from '../store/dataStore';
import { tab } from '@testing-library/user-event/dist/tab';

function UserProfile() {
    const userJam3ia = authstore.user && dataStore.jam3yas.filter(jam3ia => jam3ia.users.some(user => user._id === authstore.user._id))
    const myJam3ya=authstore.user && userJam3ia.map(e=>(<table>
    <th>{e.title}:&nbsp;&nbsp;</th>
    <td>{e.amount}</td>
    </table>));
   console.log(userJam3ia);
  return <div>
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
                <td>{authstore.user ?  authstore.user.email : ""}</td>
              </tr>
              <th>Jam3iat:</th>
              <td>{myJam3ya}</td>
              </table>
              </Card>
        </div>
        
        </div>
  </div>;
}

export default observer(UserProfile);
