# ComicMania

Este proyecto es una tienda en línea de cómics y manga desarrollada con **React + Vite** y **Bootstrap 5**. Donde se carga el catálogo de forma dinámica, permite agregar y quitar productos del carrito y cambia la interfaz según el estado de la aplicación.

## Funcionalidades

- **Catálogo dinámico:** los productos se cargan desde `datos.json` con una espera simulada de 1 segundo (`useEffect`), mostrando un indicador "Cargando..." mientras tanto.
- **Carrito de compras:** agregar y quitar productos desde la tarjeta o desde el panel del carrito, vaciar el carrito y ver el total a pagar con el precio de oferta.
- **Contador del carrito:** el encabezado y el panel muestran la cantidad de productos agregados.
- **Renderizado condicional:**
  - Mensaje "Aún no has agregado cómics." cuando el carrito está vacío.
  - El botón de cada tarjeta cambia entre "Agregar al carrito" y "En el carrito · Quitar".
  - Mensaje cuando una búsqueda o categoría no tiene resultados.
- **Filtros:** búsqueda por título y filtro por categoría.
- **Formulario de contacto** con validación de campos.
- **Carrusel** de imágenes en la página de inicio.

## Uso de hooks de React

| Hook | Dónde se usa | Para qué |
|---|---|---|
| `useState` | `App.jsx` | Catálogo, carga, carrito y vista actual |
| `useState` | `TarjetaManga.jsx` / `Carrusel.jsx` / `Contacto.jsx` | Botón interactivo, diapositiva activa y campos del formulario |
| `useEffect` | `App.jsx` | Simular la carga de datos y actualizar el estado al terminar |
| `useEffect` | `Producto.jsx` | Sincronizar la categoría seleccionada |

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Carrusel.jsx
│   └── mangas/
│       ├── ListaComics.jsx
│       ├── TarjetaManga.jsx
│       └── Carrito.jsx
├── pages/
│   ├── Inicio.jsx
│   ├── Producto.jsx
│   └── Contacto.jsx
|
├── Cargando.jsx
├── App.jsx
├── datos.json
└── main.jsx
public/
└── img/
```

## Tecnologías

- React
- Vite
- Bootstrap 5
- JavaScript (ES6+)
- GitHub Pages (`gh-pages`)

## Instalación y ejecución local

```bash
# 1. Clonar el repositorio
git clone [URL del repositorio en GitHub]

# 2. Entrar a la carpeta del proyecto
cd [nombre-de-la-carpeta]

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Luego abre en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173`).

## Despliegue en GitHub Pages

```bash
npm run deploy
```

Este comando compila el proyecto y publica el resultado en la rama `gh-pages`.
