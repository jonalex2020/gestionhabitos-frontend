import { FC } from 'react';

interface HabitCardProps {
  habit: {
    name: string;
    daysCompleted: number;
  };
}

const HabitCard: FC<HabitCardProps> = ({ habit }) => {
  const percentage = Math.min((habit.daysCompleted / 66) * 100, 100);
  
  const getProgressColor = () => {
    if (percentage < 33) return 'bg-red-500';
    if (percentage < 66) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <article className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">{habit.name}</h2>
      <div className="w-full bg-gray-200 rounded h-4">
        <div
          className={`${getProgressColor()} h-4 rounded transition-all duration-300`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
        />
      </div>
      <p className="text-sm mt-2">
        {habit.daysCompleted} de 66 días completados ({percentage.toFixed(0)}%)
      </p>
    </article>
  );
};

export default HabitCard;