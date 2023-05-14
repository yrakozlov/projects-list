"use client";

import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./Features/list/listSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});
