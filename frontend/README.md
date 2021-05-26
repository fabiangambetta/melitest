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
    cd meli/backend 
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

#Backend
 - Se habilitan CORS para localhost:3000 unicamente.
 - Se utilizan Promises en todas las llamadas a la api.
 - 

### Imagenes
Para el atributo thumbnai en la api https://api.mercadolibre.com/sites/MLA/search?q=:query no siempre tienen un tamaño 90x90 como suguiere la propuesta, debido a esto y para no estiar la imagen en la pantalla que muestra los resultados de las búsquedas decidí que la imagen respete el width 180 px, si la imagen es 90x90 
se mostrará con un tamaño 180x180, sino se mostrará 180 x heigth, con max-heigth 180 px.


 Oportunidades de mejora en el FrontEnd:
 - [Performance] Lazy Loading de componentes con React.Lazy y Suspense.
 - Las imagenes de la vista de resultados se ven pixeladas al utilizar las miniaturas (90x90) provistas por la API. 
 - [Performance] Implementar una caché que permita mantener los resultados de la última búsqueda en memoria durante x segundos.
 - [Performance] Incorporar Server Side Rendering.
 - [PWA] Redireccionar Tráfico https y registrar Service Worker.
 - [Testing] Implementar test automatizados.

 Oportunidades de mejora en el Backend
 - [Arquitectura]
 - [Performance] Implementar una caché para datos reutilizables y que entiendo no cambian frecuentemente, por ejemplo, las currency.
