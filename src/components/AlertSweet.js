import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AlertSweet = ({ title }) => {
  const MySwal = withReactContent(Swal);
  return (
    <div>
      {MySwal.fire({
        didOpen: () => {
          MySwal.clickConfirm();
        },
      }).then(() => {
        return MySwal.fire(<p>{title}</p>);
      })}
    </div>
  );
};

export default AlertSweet;
