'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-6">
        <Image
          src="https://informatica.galileo.edu/img/galileo-sin-slogan-optimizada.png"
          alt="Universidad Galileo"
          width={300}
          height={100}
          className="rounded"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3">
        Bienvenido al Sistema de Gestión de Hábitos
      </h1>

      <p className="text-gray-700 max-w-xl mb-8">
        Organiza tu vida, mejora tus hábitos y alcanza tus metas con esta plataforma desarrollada como parte del proyecto final de Programación Avanzada.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => router.push('/login')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => router.push('/register')}
          className="bg-gray-100 hover:bg-gray-200 text-blue-800 font-semibold py-2 px-6 rounded shadow border"
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}