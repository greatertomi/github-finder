import React from "react";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Alert = ({alert}) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FontAwesomeIcon icon={faInfoCircle}/> {alert.msg}
      </div>
    )
  )
};

export default Alert;
