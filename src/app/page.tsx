'use client'; // Esta línea es CRUCIAL y debe ir al principio

import WeatherSearch from '@/components/WeatherSearch'; // ¡IMPORTANTE: Usa el alias @/ !

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Aquí es donde renderizamos nuestro componente del buscador de clima */}
      <WeatherSearch />
    </main>
  );
}