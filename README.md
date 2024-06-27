# Repositorio del Curso de JavaScript

Bienvenidos al repositorio oficial del curso de JavaScript. Este es el lugar donde realizarán las entregas de sus trabajos prácticos y el trabajo práctico integrador. Aquí encontrarán toda la información necesaria para comenzar, incluyendo cómo instalar Node.js, cómo gestionar dependencias, y cómo entender la estructura del proyecto.

*Para la Práctica 1, los ejercicios se van a hacer en el directorio `practicas/practica-01`, sin necesidad de instalar o ejecutar nada de lo que se describe en éste README.*

## Requerimientos
Para trabajar en los proyectos de este curso, necesitarás:
- Node.js (Versión LTS)
- NPM (Viene instalado con Node.js)
- Un editor de texto (Recomendamos [Visual Studio Code](https://code.visualstudio.com/))

### Instalación de Node.js
Node.js es un entorno de ejecución para JavaScript construido sobre el motor V8 de Chrome. Te permitirá ejecutar las aplicaciones JavaScript en el lado del servidor.

Windows, Linux y macOS
Para instalar la versión LTS de Node.js, visita https://nodejs.org/ y descarga el instalador para tu sistema operativo. 
Sigue las instrucciones del instalador para completar la instalación.

Para verificar la instalación, abre una terminal y ejecuta:
```bash
node -v
npm -v
```
Estos comandos deberían mostrar las versiones de Node.js y NPM instaladas.

## Instalación de Dependencias
Las dependencias son librerías o paquetes de terceros que un proyecto necesita para funcionar correctamente. Para instalarlas, utiliza NPM, el gestor de paquetes de Node.js.

Abre una terminal en el directorio raíz del proyecto y ejecuta:
```bash
npm install
```
Este comando leerá el archivo package.json del proyecto, descargará e instalará todas las dependencias listadas en él.

## Iniciar el proyecto en Modo Desarrollo
Para iniciar el proyecto en modo de desarrollo ejecuta:

```bash
npm run dev
```
Esto iniciará el servidor Express y habilitará el live-reload para agilizar el proceso de desarrollo, lo que significa que el servidor se reiniciará automáticamente cada vez que realices un cambio en el código.

Una vez el servidor esté corriendo, puedes acceder a la aplicación mediante http://localhost:3000 en tu navegador.

## Acceso y Rutas Disponibles
Las rutas disponibles en este proyecto incluyen:

- `GET /`: Retorna "Hello World!".
- `POST /`: Ejemplo de cómo manejar una solicitud POST.
- `PUT /`: Ejemplo de cómo manejar una solicitud PUT.
- `DELETE /`: Ejemplo de cómo manejar una solicitud DELETE.
- `GET /users`: Retorna un JSON con los datos de los usuarios.
- `GET /vistas/index`: Retorna el archivo index.html del directorio `/views`.

## Estructura del Proyecto
La estructura básica del proyecto es la siguiente:
```
/
    /app
        /routes
        index.js
    /data
        /
    /public
        /css
        /js
        /img
    /views              
    package.json
```

- **`app/`**: Contiene el código del servidor Express.
    - **`routes/`**: Archivos que definen las rutas de la aplicación.
    - **`index.js`**: Punto de entrada de la aplicación Express que configura el servidor y rutas.
- **`data/`**: Contiene archivos JSON que actúan como una base de datos simulada para la aplicación.
- **`public/`**: Almacena archivos estáticos como CSS, JS e imágenes para el frontend.
- **`views/`**: Guarda las vistas de la aplicación, como archivos HTML o plantillas EJS.
- **`package.json`**: Define las dependencias y scripts disponibles para el proyecto.

## Comandos Disponibles
- `npm start`: Corre el proyecto en modo producción.
- `npm run dev`: Inicia el proyecto en modo desarrollo con live-reload, lo que significa que el servidor se reiniciará automáticamente cada vez que realices un cambio en el código.
- `npm run prettier`: Ejecuta Prettier para formatear el código según las convenciones establecidas, mejorando la legibilidad y consistencia.
