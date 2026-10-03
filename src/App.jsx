import { useState, useEffect } from 'react';
import datos from './datos.json';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Inicio from './pages/Inicio';
import Producto from './pages/Producto';
import Contacto from './pages/Contacto';

function App() {
  // Estado de navegación: qué página se muestra y qué categoría está filtrada
  const [vista, setVista] = useState('inicio');
  const [categoriaFiltro, setCategoriaFiltro] = useState('todos');

  // Estado del catálogo y de la carga simulada
  const [comics, setComics] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Estado del carrito: guarda objetos con id, título y precio de oferta
  const [carrito, setCarrito] = useState([]);

  // useEffect: simula la carga de datos externos con 1 segundo de espera
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setComics(datos);
      setCargando(false);
    }, 1000);

    // Limpieza: cancela el temporizador si el componente se desmonta
    return () => clearTimeout(temporizador);
  }, []);

  // Agrega un producto al carrito (si ya está, no lo duplica)
  function agregarACarrito(producto) {
    setCarrito((actual) => {
      if (actual.some((item) => item.id === producto.id)) return actual;
      return [...actual, { id: producto.id, titulo: producto.titulo, precio: producto.precioOferta }];
    });
  }

  // Quita un producto del carrito por su id
  function quitarDelCarrito(id) {
    setCarrito((actual) => actual.filter((item) => item.id !== id));
  }

  // Vacía el carrito completo
  function vaciarCarrito() {
    setCarrito([]);
  }

  // Cambia a la vista de productos con una categoría seleccionada
  function irAProducto(categoria = 'todos') {
    setCategoriaFiltro(categoria);
    setVista('producto');
  }

  return (
    <div className="app-contenedor">
      <Header vista={vista} setVista={setVista} irAProducto={irAProducto} totalCarrito={carrito.length} />

      {/* Renderizado condicional de páginas según la vista actual */}
      {vista === 'inicio' && (
        <Inicio
          comics={comics}
          cargando={cargando}
          carrito={carrito}
          alAgregar={agregarACarrito}
          alQuitar={quitarDelCarrito}
          irAProducto={irAProducto}
        />
      )}

      {vista === 'producto' && (
        <Producto
          comics={comics}
          cargando={cargando}
          categoriaInicial={categoriaFiltro}
          carrito={carrito}
          alAgregar={agregarACarrito}
          alQuitar={quitarDelCarrito}
          alVaciar={vaciarCarrito}
        />
      )}

      {vista === 'contacto' && <Contacto />}

      <Footer />
    </div>
  );
}

export default App;