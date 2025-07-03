'use client'; // Indica que este componente es para el cliente (navegador)

import { useState, FormEvent } from 'react'; // Importamos hooks de React
import axios from 'axios'; // Importamos Axios para hacer peticiones HTTP

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

export default function WeatherSearch() {
  const [city, setCity] = useState<string>(''); // Estado para la ciudad que el usuario escribe
  const [weather, setWeather] = useState<WeatherData | null>(null); // Estado para los datos del clima
  const [loading, setLoading] = useState<boolean>(false); // Estado para saber si estamos cargando
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY; // Obtenemos la clave de API

  const fetchWeather = async (e: FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    setLoading(true);
    setError(null); // Reseteamos errores previos
    setWeather(null); // Reseteamos datos de clima previos

    if (!city) {
      setError('Por favor, ingresa una ciudad.');
      setLoading(false);
      return;
    }

    if (!API_KEY) {
      setError('Clave de API no configurada. Revisa tu archivo .env.local.');
      setLoading(false);
      return;
    }
    

   try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
      );
      setWeather(response.data);
      setCity(''); // Limpiamos el input después de la búsqueda
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        if (err.response && err.response.status === 404) {
          setError('Ciudad no encontrada. Por favor, verifica el nombre.');
        } else {
          setError(`Error al obtener datos: ${err.message}`);
        }
      } else {
        setError(`Ocurrió un error inesperado: ${err.message}`);
      }
      console.error(err); // Para ver el error completo en la consola del navegador/servidor
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-4">
      <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-lg">Buscador de Clima</h1>

      <form onSubmit={fetchWeather} className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Ej: Medellin"
          className="flex-grow p-4 text-lg rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Buscando...' : 'Buscar Clima'}
        </button>
      </form>

      {error && (
        <p className="text-red-700 bg-red-100 p-3 rounded-lg mb-4 text-center font-medium shadow-md">
          {error}
        </p>
      )}

      {weather && (
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full text-center text-gray-800 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4">{weather.name}</h2>
          <div className="flex items-center justify-center mb-4">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="w-24 h-24"
            />
            <p className="text-6xl font-extrabold text-blue-700">
              {Math.round(weather.main.temp)}°C
            </p>
          </div>
          <p className="text-2xl capitalize mb-2">{weather.weather[0].description}</p>
          <p className="text-xl mb-2">Sensación térmica: {Math.round(weather.main.feels_like)}°C</p>
          <p className="text-lg">Humedad: {weather.main.humidity}%</p>
          <p className="text-lg">Viento: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
