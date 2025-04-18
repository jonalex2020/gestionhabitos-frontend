"use client"; 

interface Habit {
  name: string;
  daysCompleted: number;
}

interface HabitCardProps {
  habit: Habit;
}

export const HabitCard = ({ habit }: HabitCardProps) => {
  const percentage = Math.min((habit.daysCompleted / 66) * 100, 100);
  
  const progressColor = 
    percentage < 33 ? 'bg-red-500' :
    percentage < 66 ? 'bg-yellow-500' :
    'bg-green-500';

  return (
    <article className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">{habit.name}</h2>
      <div className="w-full bg-gray-200 rounded h-4">
        <div
          className={`${progressColor} h-4 rounded transition-all duration-300`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p className="text-sm mt-2">
        {habit.daysCompleted} de 66 días completados ({percentage.toFixed(0)}%)
      </p>
    </article>
  );
};