import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPhone, deletePhone, addPhone, } from "../../shared/contacts/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (data, { rejectWithValue }) => {
    try {
      return await getPhone();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (data, { rejectWithValue }) => {
    try {
      return addPhone(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const isInclude = contacts.items.find(
        (el) => el.name.toLowerCase() === data.name.toLowerCase()
      );
      if (isInclude) {
        alert(`"${isInclude.name}" is already in your contacts`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  "contacts/remove",
  async (data, { rejectWithValue }) => {
    try {
      return await deletePhone(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);