import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

type formType = {
  name: string;
  value: number;
};

const initialState: formType = {
  name: "",
  value: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeName, changeValue } = formSlice.actions;

export const FormReducer = formSlice.reducer;
