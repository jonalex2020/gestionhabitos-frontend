import React from 'react';

export default function HabitCard({ habit }: { habit: any }) {
  const porcentaje = Math.min((habit.daysCompleted / 66) * 100, 100);
  const color =
    porcentaje < 33
      ? 'bg-red-500'
      : porcentaje < 66
      ? 'bg-yellow-500'
      : 'bg-green-500';

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">{habit.name}</h2>
      <div className="w-full bg-gray-200 rounded h-4">
        <div className={\`\${color} h-4 rounded\`} style={{ width: \`\${porcentaje}%\` }}></div>
      </div>
      <p className="text-sm mt-2">{habit.daysCompleted} de 66 días completados</p>
    </div>
  );
}
