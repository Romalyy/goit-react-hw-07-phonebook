import { memo } from "react";
import PropTypes from "prop-types";
import s from "../ContactForm/contactForm.module.css";

const Filter = ({ onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        onChange={onChange}
        className={s.input}
        type="text"
        name="filter"
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(Filter);
