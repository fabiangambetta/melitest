# Test - Mercado Libre

# Tecnologías
## FrontEnd
    - HTML
    - Java Script
    - CSS
## Backend
    - ExpressJS
    - Node js (v14.16.0)

# Instalación y despliegue

## Backend:
    cd backend 
    npm install
    node api.js


## Frontend:

- npm install
- npm run build
- npm start

# Nota

Por defecto el servidor corre en localhost:4001, en modo "dev" (desarrollo) y espera que el frontend corra en localhost:3000.
Si es necesario modificar el puerto de la api consumida en el frontend


#Frontend
 - Diseño responsivo usando media queries de CSS.
 - Uso de atributos ARIA para mejorar SEO.
 - Se crea una vista adicional para notificar al usuario cuando no se han encontrado resultados para su búsqueda.
 - Uso PropTypes para definir el formato esperado de props por cada componente.


 Oportunidades de mejora en el FrontEnd:
 - [Performance] Lazy Loading de componentes con React.Lazy y Suspense.
 - Las imagenes de la vista de resultados se ven pixeladas al utilizar las miniaturas (90x90) provistas por la API.
 - [Performance] Implementar una caché que permita mantener los resultados de la última búsqueda en memoria durante x segundos.
 - [Performance] Incorporar Server Side Rendering.
 - [PWA] Redireccionar Tráfico https y registrar Service Worker.

 Oportunidades de mejora en el Backend
 - [Arquitectura]
 - [Performance] Implementar una caché para datos reutilizables y que entiendo no cambian frecuentemente, por ejemplo, las currency.
