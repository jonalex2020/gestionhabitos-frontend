"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from '../Redux/store.js';

interface StoreProviderProps {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = useRef<AppStore>();
  
  if (!storeRef.current) {
    // Initialize the store only once
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}