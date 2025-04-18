'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-6 border border-gray-300 rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow"
        >
          Entrar
        </button>

        <button
          onClick={() => router.push('/')}
          className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-blue-800 font-semibold py-2 rounded border"
        >
          ⬅ Regresar a Inicio
        </button>
      </div>
    </div>
  );
}
