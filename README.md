# ☀️ Buscador de Clima con Next.js y OpenWeatherMap API

¡Bienvenido al Buscador de Clima! Esta es una aplicación web moderna y responsiva construida con Next.js y Tailwind CSS que permite a los usuarios consultar el clima actual de cualquier ciudad del mundo utilizando la API de OpenWeatherMap.

Este proyecto fue desarrollado como parte de mi proceso de aprendizaje y consolidación de habilidades en el desarrollo front-end con React y Next.js.

## 🚀 Ver la Aplicación en Vivo

La aplicación está desplegada y disponible públicamente en Vercel.

[👉 Haz clic aquí para visitar el Buscador de Clima](https://vercel.com/bdhurtados-projects/weather-app-project)




## ✨ Características Principales

* **Búsqueda de Clima:** Consulta el clima actual por nombre de ciudad.
* **Información Detallada:** Muestra temperatura, sensación térmica, humedad, velocidad del viento y descripción del clima.
* **Iconos de Clima Dinámicos:** Muestra iconos relevantes al estado del clima.
* **Diseño Responsivo:** Interfaz adaptable a diferentes tamaños de pantalla (móviles, tabletas, escritorios) gracias a Tailwind CSS.
* **Manejo de Errores:** Notificaciones claras para ciudades no encontradas o problemas de API.

## 🛠️ Tecnologías Utilizadas

* **Next.js 13/14 (App Router):** Framework de React para el desarrollo de aplicaciones web full-stack, con renderizado híbrido.
* **React:** Biblioteca JavaScript para construir interfaces de usuario.
* **Tailwind CSS:** Framework CSS de primera utilidad para estilos rápidos y personalizables.
* **Axios:** Cliente HTTP basado en promesas para hacer peticiones a la API.
* **OpenWeatherMap API:** Fuente de datos climáticos.

## ⚙️ Configuración y Ejecución Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

### Prerrequisitos

Asegúrate de tener instalado:

* Node.js (versión 18 o superior recomendada)
* npm (viene con Node.js) o Yarn

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/BDHURTADO/weather-app-project.git](https://github.com/BDHURTADO/weather-app-project.git)
    cd weather-app-project
    ```
    *(Asegúrate de que la URL de tu repositorio sea correcta.)*

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas yarn
    # yarn install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo llamado `.env.local` en la raíz del proyecto (al mismo nivel que `package.json`).
    Dentro de este archivo, añade tu clave de API de OpenWeatherMap:
    ```
    NEXT_PUBLIC_OPENWEATHER_API_KEY=tu_clave_de_api_aqui_de_openweathermap
    ```
    *Reemplaza `tu_clave_de_api_aqui_de_openweathermap` con tu clave real (por ejemplo, `fa94bd9d2b963533eb8afcece9f88ede`).*
    Puedes obtener una clave de API gratuita en [OpenWeatherMap](https://openweathermap.org/api).

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    # o si usas yarn
    # yarn dev
    ```
    La aplicación estará disponible en `http://localhost:3000`.

## 🤝 Contribuciones

Las contribuciones, informes de errores y sugerencias son bienvenidos. Por favor, abre un "issue" o envía un "pull request".

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## ✉️ Contacto

Puedes contactarme a través de:

GitHub:[BDHURTADO](https://github.com/BDHURTADO)
LinkedIn: https://www.linkedin.com/in/bdhurtado13?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

---