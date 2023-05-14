"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first: {
    name: "",
    url: "",
    choosenCategory: "",
  },
  second: {
    goal: "",
  },
  list: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setForms: (state, action) => {
      state[action.payload.stepName] = {
        ...state[action.payload.stepName],
        ...action.payload.data,
      };
    },
    setNewItem: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    resetForm: (state) => {
      state.first = { name: "", url: "", choosenCategory: "" };
      state.second = {
        goal: "",
      };
    },
  },
});

export const { setNewItem, setForms, resetForm } = listSlice.actions;

export default listSlice.reducer;
