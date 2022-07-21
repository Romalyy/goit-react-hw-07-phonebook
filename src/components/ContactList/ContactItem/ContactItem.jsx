import { memo } from "react";
import PropTypes from "prop-types";
import s from "./contactItem.module.css";
const ContactItem = ({ number, name, onClick, id }) => {

  return (
    <li className={s.item}>
       {name} : {number}
      {<button
        onClick={() => {onClick(id);}}
        className={s.button}
        type="button"
      >
        Delete
      </button>}
    </li>
  );
}
ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(ContactItem);
