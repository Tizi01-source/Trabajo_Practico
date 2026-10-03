// Importaciones de React.
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Importaciones de páginas.
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import FinalizarCompra from './pages/FinalizarCompra.jsx'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

// Importaciones de componentes.
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop'
import Aviso from './components/Aviso'

// Componente raíz de la aplicación. Contiene el estado global y las rutas.
function App() {

    // ESTADOS

    // Carrito de compras, recordado entre visitas. Se inicializa desde localStorage si hay datos guardados.
    const [carrito, setCarrito] = useState(() => {
        try {
            const guardado = localStorage.getItem('carrito')
            return guardado ? JSON.parse(guardado) : []
        } catch {
            return []
        }
    })

    // Tema de la aplicación (claro u oscuro), recordado entre visitas. Se inicializa desde localStorage si hay datos guardados.
    const [tema, setTema] = useState(() => {
        return localStorage.getItem('tema') || 'light'
    })

    // Avisos que se muestran en pantalla cuando se agregan productos al carrito o se intenta agregar más de lo que hay en stock.
    const [avisos, setAvisos] = useState([])

    // VALORES CALCULADOS

    // Cantidad total de productos en el carrito y total a pagar, calculados a partir del estado carrito.
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

    // EFECTOS

    // Guarda el carrito en localStorage cada vez que cambia, para que se recuerde entre visitas.
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    // Aplica el tema actual al documento y lo guarda en localStorage cada vez que cambia, para que se recuerde entre visitas.
    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', tema)
        localStorage.setItem('tema', tema)
    }, [tema])

    // FUNCIONES

    // Muestra un aviso en pantalla durante 2.5 segundos. Se limita a 3 avisos simultáneos.
    function mostrarAviso(texto, tipo) {
        const id = Date.now() + Math.random()
        setAvisos(prev => [...prev, { id, texto, tipo }].slice(-3))
        setTimeout(() => {
            setAvisos(prev => prev.filter(a => a.id !== id))
        }, 2500)
    }

    // Agrega un producto al carrito. Si ya está, aumenta la cantidad hasta el stock disponible.
    function agregarAlCarrito(producto) {
        const existente = carrito.find(item => item.id === producto.id)

        if (existente) {
            if (existente.cantidad >= producto.stock) {
                mostrarAviso(`No hay más stock de ${producto.nombre}`, 'warning')
                return
            }
            setCarrito(carrito.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item))
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }])
        }

        mostrarAviso(`${producto.nombre} se agregó al carrito`, 'primary')
    }

    // Aumenta la cantidad de un item, sin pasar del stock disponible.
    function aumentarCantidad(id) {
        setCarrito(carrito.map(item =>
            item.id === id && item.cantidad < item.stock
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
        ))
    }

    // Disminuye la cantidad de un item, sin pasar de 1.
    function disminuirCantidad(id) {
        setCarrito(carrito.map(item =>
            item.id === id && item.cantidad > 1
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
        ))
    }

    // Elimina un item del carrito.
    function eliminarDelCarrito(id) {
        setCarrito(carrito.filter(item => item.id !== id))
    }

    // Vacía el carrito, dejándolo como un array vacío.
    function vaciarCarrito() {
        setCarrito([])
    }

    // Alterna el tema entre claro y oscuro.
    function alternarTema() {
        setTema(tema === 'light' ? 'dark' : 'light')
    }

    return (

        <div className="d-flex flex-column min-vh-100">

            {/* ScrollToTop se encarga de llevar el scroll a la parte superior al cambiar de página. */}
            <ScrollToTop />

            {/* Navbar muestra el menú de navegación en todas las páginas. */}
            <Navbar cantidadTotal={cantidadTotal} tema={tema} alternarTema={alternarTema} />

            <main className="flex-grow-1">

                {/* Rutas de la aplicación */}
                <Routes>
                    <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />

                    <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/contacto" element={<Contacto />} />

                    <Route path="/carrito" element={
                        <Carrito
                            carrito={carrito}
                            aumentarCantidad={aumentarCantidad}
                            disminuirCantidad={disminuirCantidad}
                            eliminarDelCarrito={eliminarDelCarrito}
                            total={total}
                            cantidadTotal={cantidadTotal}
                        />
                    } />
                    <Route path="/finalizar-compra" element={
                        <FinalizarCompra
                            carrito={carrito}
                            total={total}
                            vaciarCarrito={vaciarCarrito}
                            cantidadTotal={cantidadTotal}
                        />
                    } />
                </Routes>

            </main>

            {/* Footer se muestra en todas las páginas. */}
            <Footer />

            {/* Aviso muestra mensajes temporales en pantalla. */}
            <Aviso avisos={avisos} />

        </div>
    )
}

export default App