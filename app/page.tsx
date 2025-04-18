'use client';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHabitsThunk } from "@/feature/habit/habitSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { habits, status } = useSelector((state: RootState) => state.habit);

  useEffect(() => {
    dispatch(fetchHabitsThunk());
  }, [dispatch]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hábitos</h1>
      {status === 'loading' && <p>Cargando...</p>}
      {status === 'failed' && <p>Error al cargar hábitos</p>}
      {status === 'succeeded' && (
        <ul className="space-y-2">
          {habits.map(h => (
            <li key={h._id} className="p-2 border rounded">{h.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
