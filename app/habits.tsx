type Habit = {
    _id: string;
    id: string;
    name: string;
    description: string;
    frequency: number;
    duration: number;
    priority: number;
    completed: boolean;
  };
  
  type HabitsProps = {
    habits: { habits: Habit[] }; 
    status: "idle" | "loading" | "succeeded" | "failed";
  };
  
  export default function Habits({ habits, status }: HabitsProps) {
   // console.log("🟡 Datos recibidos en Habits.tsx:", habits); 
  
    return (
      <div>
        <h1 className="text-3xl font-bold text-center">Lista de Hábitos</h1>
  
        {status === "loading" && <p>Cargando hábitos...</p>}
        {status === "failed" && <p>Error al cargar los hábitos.</p>}
  
        {habits.habits.length > 0 ? (
          <ul>
            {habits.habits.map((habit) => ( 
              <li key={habit._id} className="border-2 p-4 mb-4 rounded shadow-lg">
                <h2 className="text-xl font-bold">{habit.name}</h2>
                <p className="text-gray-700">{habit.description}</p>
                <p><strong>Frecuencia:</strong> {habit.frequency} veces por semana</p>
                <p><strong>Duración:</strong> {habit.duration} días</p>
                <p><strong>Prioridad:</strong> {habit.priority}</p>
                <p><strong>Completado:</strong> {habit.completed ? "✅ Sí" : "❌ No"}</p>
              </li>
            ))}
          </ul>
        ) : (
          status === "succeeded" && <p>No hay hábitos disponibles.</p>
        )}
      </div>
    );
  }
  