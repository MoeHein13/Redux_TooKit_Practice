import { createSlice, nanoid } from "@reduxjs/toolkit";

type searchType = {
  searchTerm: string;
  cars: {
    name: string;
    value: number;
    id: number | string;
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
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        value: action.payload.value,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const update = state.cars.filter((car) => car.id !== action.payload);
      state.cars = update;
    },
  },
});

export const { changeSearch, addCar, removeCar } = searchTermSlice.actions;

export const searchTermReducer = searchTermSlice.reducer;
