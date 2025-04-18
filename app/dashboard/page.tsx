'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/habits`, {
      credentials: 'include',
    })
      .then(res => {
        if (res.status === 401) router.push('/login');
        return res.json();
      })
      .then(setHabits);
  }, []);
  
  return <pre>{JSON.stringify(habits, null, 2)}</pre>;
}
