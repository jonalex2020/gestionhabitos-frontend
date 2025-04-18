import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHabits } from "./habitApi";

export interface Habit {
  _id: string;
  id: string;
  name: string;
  description: string;
  frequency: number;
  duration: number;
  priority: number;
  completed: boolean;
}

export const fetchHabitsThunk = createAsyncThunk("habits/fetchHabits", async (): Promise<Habit[]> => {
 // console.log("🟡 Ejecutando fetchHabitsThunk...");
  const response = await fetchHabits();
  //console.log("✅ Datos obtenidos de la API:", response);
  return response;
});

const habitSlice = createSlice({
  name: "habit",
  initialState: {
    habits: [] as Habit[],
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabitsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHabitsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        //console.log("🔵 Datos almacenados en Redux:", action.payload);
        state.habits = action.payload;
      })
      .addCase(fetchHabitsThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default habitSlice.reducer;
