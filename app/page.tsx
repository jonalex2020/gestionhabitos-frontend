"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHabitsThunk } from "@/feature/habit/habitSlice";
import { AppDispatch, RootState } from "@/Redux/store";
import Habits from "./habits"; 

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const habits = useSelector((state: RootState) => state.habit);
  const status = useSelector((state: RootState) => state.habit.status);

  useEffect(() => {
    //console.log("📢 Ejecutando useEffect para fetchHabitsThunk()");
    dispatch(fetchHabitsThunk());
  }, [dispatch]);

  //console.log("🎯 Estado de Redux en la UI:", { status, habits });

  return (
    <div className="p-8">
     <img 
            src="https://www.galileo.edu/wp-content/uploads/2023/01/Galileo-Sin-slogan.png" 
            alt="Logo Universidad Galileo"
            className="w-40 h-auto mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-center">Técnico en Desarrollo de Software</h2>
        <p className="text-lg font-medium text-gray-700 text-center">Jonny Merida</p>
        {status === "succeeded" ? <Habits habits={habits} status={status} /> : <p>Cargando...</p>}
    </div>
);
}



