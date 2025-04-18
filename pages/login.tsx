import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });

    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      alert('Login fallido');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo" />
      <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}
