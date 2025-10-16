import { configureStore } from "@reduxjs/toolkit";
import { FormReducer, changeName, changeValue } from "./silces/CarFormSlice";

import {
  changeSearch,
  addCar,
  removeCar,
  searchTermReducer,
} from "./silces/CarSearchTermSlice";

const store = configureStore({
  reducer: {
    form: FormReducer,
    searchTerm: searchTermReducer,
  },
});

export { changeName, changeSearch, changeValue, addCar, removeCar, store };
