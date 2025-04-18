'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CardHabit from '../../components/CardHabit';

export default function DashboardPage() {
  const router = useRouter();
  const [habits, setHabits] = useState([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'failed' | 'ok'>('idle');
  const [newHabit, setNewHabit] = useState('');

  const fetchHabits = () => {
    setStatus('loading');
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/habits`, {
      credentials: 'include',
    })
      .then(res => {
        if (res.status === 401) {
          router.push('/login');
          return;
        }
        return res.json();
      })
      .then(data => {
        setHabits(data?.habits || []);
        setStatus('ok');
      })
      .catch(err => {
        console.error('Error al obtener hábitos:', err);
        setStatus('failed');
      });
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const handleAddHabit = async () => {
    if (!newHabit) return;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/habits`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newHabit }),
    });

    if (res.ok) {
      setNewHabit('');
      fetchHabits();
    } else {
      alert('Error al crear hábito');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6">Panel de Hábitos</h1>

        <div className="flex gap-2 mb-8 justify-center">
          <input
            type="text"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="Nuevo hábito"
            className="p-2 border rounded w-64"
          />
          <button
            onClick={handleAddHabit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          >
            Agregar
          </button>
        </div>

        {status === 'loading' && <p className="text-gray-600">Cargando hábitos...</p>}
        {status === 'failed' && <p className="text-red-600">Error al cargar hábitos</p>}
        {status === 'ok' && habits.length === 0 && (
          <p className="text-gray-700">No tienes hábitos registrados aún.</p>
        )}

        <div className="grid gap-6 mt-8">
          {habits.map((habit: any) => (
            <CardHabit key={habit._id} habit={habit} />
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={() => router.push('/')}
            className="text-blue-700 hover:underline font-semibold"
          >
            ⬅ Regresar a Inicio
          </button>
        </div>
      </div>
    </div>
  );
}
