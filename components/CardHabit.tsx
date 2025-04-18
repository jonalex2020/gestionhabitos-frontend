'use client';
import React from 'react';

type Habit = {
  _id: string;
  name: string;
  daysCompleted: number;
};

export default function CardHabit({ habit }: { habit: Habit }) {
  const porcentaje = Math.min((habit.daysCompleted / 66) * 100, 100);
  const color =
    porcentaje < 33
      ? 'bg-red-500'
      : porcentaje < 66
      ? 'bg-yellow-500'
      : 'bg-green-500';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-left">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">{habit.name}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm shadow"
          onClick={() => alert('Marcar como completado (pendiente implementar)')}
        >
          Marcar como hecho
        </button>
      </div>
      <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
        <div
          className={`${color} h-4 rounded transition-all duration-300`}
          style={{ width: `${porcentaje}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        {habit.daysCompleted} de 66 días completados
      </p>
    </div>
  );
}
