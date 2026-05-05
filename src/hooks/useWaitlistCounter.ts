"use client";

import { useState, useEffect } from "react";

// Estado global simple para mantener sincronizados los componentes
let globalCount = 142;
let initialized = false;
const subscribers = new Set<() => void>();

const notifySubscribers = () => {
  subscribers.forEach((cb) => cb());
};

export const incrementWaitlistCount = (amount: number = 1) => {
  globalCount += amount;
  if (typeof window !== "undefined") {
    localStorage.setItem("creative_waitlist_count", globalCount.toString());
  }
  notifySubscribers();
};

export const getWaitlistCount = () => globalCount;

export function useWaitlistCounter() {
  const [count, setCount] = useState(globalCount);

  useEffect(() => {
    // Solo inicializamos el contador una vez por sesión
    if (!initialized && typeof window !== "undefined") {
      initialized = true;
      
      // 1. Calculamos un número base falso pero realista basado en los días que han pasado
      const startDate = new Date("2026-05-04T00:00:00Z").getTime();
      const now = Date.now();
      const hoursPassed = Math.max(0, Math.floor((now - startDate) / (1000 * 60 * 60)));
      let baseCount = 142 + (hoursPassed * 2); // Simula ~2 registros por hora
      
      // 2. Revisamos si ya teníamos un contador guardado en este navegador
      const savedCount = localStorage.getItem("creative_waitlist_count");
      if (savedCount && parseInt(savedCount) > baseCount) {
        baseCount = parseInt(savedCount);
      }
      
      globalCount = baseCount;
      localStorage.setItem("creative_waitlist_count", globalCount.toString());
      notifySubscribers();

      // 3. Hacemos que el contador suba aleatoriamente mientras la persona ve la página
      setInterval(() => {
        // 30% de probabilidad de que alguien se registre cada 8 segundos
        if (Math.random() > 0.7) {
          globalCount += 1;
          localStorage.setItem("creative_waitlist_count", globalCount.toString());
          notifySubscribers();
        }
      }, 8000);
    }

    // Suscribirse a los cambios
    setCount(globalCount);
    const handleUpdate = () => setCount(globalCount);
    subscribers.add(handleUpdate);
    
    return () => {
      subscribers.delete(handleUpdate);
    };
  }, []);

  return count;
}
