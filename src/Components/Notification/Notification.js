import React from "react";
import propTypes from "prop-types";
import s from "../Notification/Notification.module.css";

const Notification = ({ message }) => {
  return <span className={s.message}>{message}</span>;
};

export default Notification;

Notification.propTypes = {
  message: propTypes.string,
};
