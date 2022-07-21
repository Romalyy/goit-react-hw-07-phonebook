import { combineReducers } from "@reduxjs/toolkit";

import contactsReduce from "./contacts/contacts-slice";

const rootReducer = combineReducers({
  contacts: contactsReduce,
});

export default rootReducer;
