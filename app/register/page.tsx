'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      alert('Cuenta creada exitosamente');
      router.push('/login');
    } else {
      alert('Error al registrar');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Crear Cuenta</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="mb-2 p-2 border"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="mb-2 p-2 border"
      />
      <button
        onClick={handleRegister}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Registrarse
      </button>
    </div>
  );
}
