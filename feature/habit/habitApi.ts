import { Habit } from "./habitSlice";

export async function fetchHabits(): Promise<Habit[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/habits`, {
    credentials: 'include',
  });
  if (!res.ok) throw new Error("Error al cargar hábitos");
  return res.json();
}
