# GastoZen - Frontend

El frontend de GastoZen está desarrollado utilizando **React.js**, un framework de JavaScript para construir interfaces de usuario dinámicas y modulares. React permite crear componentes reutilizables que facilitan la gestión del estado y el renderizado eficiente de la aplicación.

## Estructura del Proyecto

La estructura del frontend sigue las mejores prácticas de React, dividiendo la aplicación en componentes, servicios y utilidades. A continuación, se describen algunos de los directorios principales:

- **src/components/**: Contiene los componentes reutilizables de la interfaz de usuario.
- **src/services/**: Gestiona las interacciones con el backend, como las peticiones HTTP.
- **src/pages/**: Agrupa las distintas vistas o páginas de la aplicación.
- **src/context/**: Maneja el estado global de la aplicación mediante el uso de React Context.
- **src/assets/**: Incluye imágenes, estilos y otros archivos estáticos.

## Tecnologías Usadas

- **React.js**: Framework para la creación de la interfaz de usuario.
- **Axios**: Librería para realizar peticiones HTTP a la API del backend.
- **React Router**: Para la navegación entre las distintas páginas de la aplicación.
- **CSS Modules**: Para la gestión de estilos de forma modular y sin conflictos.

## Requisitos Previos

Antes de iniciar la aplicación, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js** (versión 14.x o superior)
- **npm** o **yarn** para la gestión de dependencias
- **Docker** (opcional, para el despliegue con contenedores)

## Comandos Básicos de Arranque

### Arranque Normal

Para ejecutar el frontend de manera local sin Docker, sigue los siguientes pasos:

1. Clona el repositorio de GastoZen:
   ```bash
   git clone https://github.com/tuusuario/gastozen-frontend.git
   cd gastozen-frontend
   ```
2. Instala las dependencias
    ```bash
    npm install
    # O si usas yarn
    yarn install
    ```
3. Inicia proyecto
    ```bash
    # Iniciar Modo Desarrollo
    npm run dev
    # Iniciar Modo Producción
    npm start
    ```

# Docker
Para correr la aplicación en docker, debera ejecutar el siguiente comando en la terminal.
```bash
docker compose up --build -d
```