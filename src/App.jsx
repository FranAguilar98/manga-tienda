import { useState, useEffect } from 'react';
import datos from './datos.json';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Producto from './pages/Producto';
import Contacto from './pages/Contacto';

function App() {
  const [vista, setVista] = useState('inicio');
  const [categoriaFiltro, setCategoriaFiltro] = useState('todos');

  const [comics, setComics] = useState([]);
  const [cargando, setCargando] = useState(true);

  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setComics(datos);
      setCargando(false);
    }, 1000);

    return () => clearTimeout(temporizador);
  }, []);

  function agregarACarrito(producto) {
    const yaEsta = carrito.some((item) => item.id === producto.id);
    if (yaEsta) {
      alert('Cómic ya incorporado al carrito.');
      return;
    }
    setCarrito([...carrito, { id: producto.id, titulo: producto.titulo, precio: producto.precioOferta }]);
  }

  function quitarDelCarrito(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  function irAProducto(categoria = 'todos') {
    setCategoriaFiltro(categoria);
    setVista('producto');
  }

  return (
    <div className="app-contenedor">
      <Header vista={vista} setVista={setVista} irAProducto={irAProducto} totalCarrito={carrito.length} />

      {vista === 'inicio' && (
        <Inicio comics={comics} cargando={cargando} alAgregar={agregarACarrito} irAProducto={irAProducto} />
      )}

      {vista === 'producto' && (
        <Producto
          comics={comics}
          cargando={cargando}
          categoriaInicial={categoriaFiltro}
          alAgregar={agregarACarrito}
          carrito={carrito}
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