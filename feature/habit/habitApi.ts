import { Habit } from "./habitSlice";

export const fetchHabits = async (): Promise<Habit[]> => {
  //console.log("📡 Llamando a la API de hábitos...");

  const response = await fetch("http://localhost:3000/habits");
  if (!response.ok) {
    throw new Error(`Error al obtener hábitos: ${response.statusText}`);
  }

  const data = await response.json();
  //console.log("✅ Datos recibidos de la API:", data);

  return data.habits as Habit[];
};
