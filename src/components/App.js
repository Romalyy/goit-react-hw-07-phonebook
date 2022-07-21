import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import {
  fetchContacts,
  removeContact,
  addContact,
} from "../redux/contacts/contacts-operations";
import { getContacts } from "../redux/contacts/contacts-selector";

import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";


import s from "./ContactList/contactList.module.css";

const App = () => {
  const [filter, setFilter] = useState("");
  const contactsStore = useSelector(getContacts);
  const dispatch = useDispatch();

  const { items, error, loading } = contactsStore;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAdd = useCallback(
    (el) => dispatch(addContact(el)),
    [dispatch]
  );
  const onRemove = useCallback(
    (id) => {
      dispatch(removeContact(id));
    },
    [dispatch]
  );

  const changeFilter = useCallback(
    ({ target: { value } }) => setFilter(value.trim()),
    [setFilter]
  );

    const getVisibleContacts = () => {
    if (!filter) {
      return items;
    }
    return items.filter((e) => {
      const { name } = e;
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    };
  
  const visibleContacts = getVisibleContacts();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={onAdd} />
      <h2 className={s.title}>Contacts</h2>
      <Filter onChange={changeFilter} />
      {loading && <p>Loading...</p>}
      {error && <p>Такого контакта нет!</p>}
      {items.length > 0 && !error && !loading && (
      <ContactList items={visibleContacts} onClick={onRemove} />
      )}
    </div>
  );
};

export default App;
