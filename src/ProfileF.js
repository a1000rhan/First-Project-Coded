import axios from "axios";
import React, { useState } from "react";

const [profile, setProfile] = useState();
const upDateForm = async (f) => {
  const resp = await axios.post(
    "https://coded-miniproject-jam3ya-be.herokuapp.com/",
    update
  );
};
setProfile({ ...profile, f });

export const ProfileF = () => {
  return (
    <div className="table">
      <table>
        <tr>
          <th>userName</th>
          <th>password</th>
          <th>email</th>
        </tr>
        {jam3yas.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.username}</td>
              <td>{val.password}</td>
              <td>{val.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
