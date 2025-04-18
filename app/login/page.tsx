'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="mb-2 p-2 border" />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} className="mb-2 p-2 border" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Entrar</button>
    </div>
  );
}
