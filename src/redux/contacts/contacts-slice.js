import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, removeContact, addContact } from "./contacts-operations";

const initialState = { items: [], loading: false, error: null };

const panding = (store) => ({
  ...store,
  loading: true,
  error: null,
});

const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload,
});

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [fetchContacts.pending]: panding,
    [fetchContacts.rejected]: rejected,
    [fetchContacts.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: payload,
    }),
    [addContact.pending]: panding,
    [addContact.rejected]: rejected,
    [addContact.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: [...store.items, payload],
    }),
    [removeContact.pending]: panding,
    [removeContact.rejected]: rejected,
    [removeContact.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: store.items.filter((el) => el.id !== payload.id),
    }),
  },
});

export default contactsSlice.reducer;
