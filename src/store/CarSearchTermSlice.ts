import { createSlice, nanoid } from "@reduxjs/toolkit";

type searchType = {
  searchTerm: string;
  cars: {
    name: string;
    value: number;
    id: number;
  }[];
};
const initialState: searchType = {
  searchTerm: "",
  cars: [],
};

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    changeSearch(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {},
    removeCar(state, action) {},
  },
});
