const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    credentials: 'include', // MUY importante para que se guarde la cookie
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });