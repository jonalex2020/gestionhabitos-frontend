'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import HabitCard from '../../components/HabitCard';

export default function DashboardPage() {
  const [habits, setHabits] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/habits`, {
      credentials: 'include',
    })
      .then(res => {
        if (res.status === 401) router.push('/login');
        return res.json();
      })
      .then(data => setHabits(data.habits || []))
      .catch(err => console.error('Error al obtener hábitos', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tus hábitos</h1>
      <div className="grid gap-4">
        {habits.map((habit: any) => (
          <HabitCard key={habit._id} habit={habit} />
        ))}
      </div>
    </div>
  );
}
