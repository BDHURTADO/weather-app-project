import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Acerca de este Buscador de Clima</h1>
      <p className="text-lg text-gray-600 text-center max-w-prose">
        Este buscador de clima es una aplicación web que te permite consultar el clima actual y pronósticos
        para diferentes ubicaciones. Utiliza la API de OpenWeatherMap para obtener datos meteorológicos en tiempo real.
        Puedes buscar por ciudad, país o coordenadas geográficas. La interfaz es simple y fácil de usar, diseñada para
        ofrecerte la información que necesitas de manera rápida y eficiente.
      </p>
      <Link href="/" className="text-xl text-purple-600 hover:underline">
        Volver a la página principal
      </Link>
</main>
  );
}