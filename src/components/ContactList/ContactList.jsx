import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import s from "./contactList.module.css";

const ContactList = ({ items, onClick }) => {

  const elements = items.map(({ number, name, id }) => {
    return (
      <ContactItem
        key={id}
        id={id}
        onClick={onClick}
        name={name}
        number={number}
      />
    );
  });
  return (
    <ul className={s.list}>{elements}</ul>
  );
}
ContactList.defaultProps = {
  items: [],
};

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
