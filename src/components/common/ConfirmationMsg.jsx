
import React from "react";

function ConfirmationMsg(props) {
  return (
    <div className="confirmation-msg">
      <p>{props.msg}</p>
    </div>
  );
}

export {ConfirmationMsg};