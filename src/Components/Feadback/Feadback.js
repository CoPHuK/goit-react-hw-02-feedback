import React from "react";
import s from "./Feedback.module.css";
import PropTypes from "prop-types";


const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.btn_list}>
    {options.map((option) => (
      <li className={s.list} key={option}>
        <button
          name={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};