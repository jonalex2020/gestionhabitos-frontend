import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "../feature/habit/habitSlice";

export const makeStore = () => 
  configureStore({
    reducer: {
      habit: habitReducer, 
    },
  });

export const store = makeStore();

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


