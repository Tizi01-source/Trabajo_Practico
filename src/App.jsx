// Importaciones de React.
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Importaciones de páginas.
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import FinalizarCompra from './pages/FinalizarCompra.jsx'
import DetalleProducto from './pages/DetalleProducto'
import Nosotros from './pages/Nosotros'

// Importaciones de componentes.
import Navbar from './components/Navbar'
import Footer from "./components/Footer.jsx"
import ScrollToTop from './components/ScrollToTop'
import Aviso from './components/Aviso'

// Componente principal de la aplicación.
function App() {

    // Estado del carrito, avisos y tema.
    const [carrito, setCarrito] = useState(() => {
        const guardado = localStorage.getItem('carrito')
        return guardado ? JSON.parse(guardado) : []
    })
    const [avisos, setAvisos] = useState([])
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    const [tema, setTema] = useState(() => {
        return localStorage.getItem('tema') || 'light'
    })

    // Efectos para sincronizar el carrito y el tema con el almacenamiento local y el atributo de tema del documento.
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', tema)
        localStorage.setItem('tema', tema)
    }, [tema])

    // Función para mostrar avisos temporales.
    function mostrarAviso(texto, tipo) {
        const id = Date.now() + Math.random()
        setAvisos(prev => [...prev, { id, texto, tipo }].slice(-3))
        setTimeout(() => {
            setAvisos(prev => prev.filter(a => a.id !== id))
        }, 2500)
    }

    // Funciones para manejar el carrito de compras.
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
    function aumentarCantidad(id) {
        setCarrito(carrito.map(item =>
            item.id === id && item.cantidad < item.stock
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
        ))
    }
    function disminuirCantidad(id) {
        setCarrito(carrito.map(item =>
            item.id === id && item.cantidad > 1
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
        ))
    }
    function eliminarDelCarrito(id) {
        setCarrito(carrito.filter(item => item.id !== id))
    }
    function vaciarCarrito() {
        setCarrito([])
    }

    // Función para alternar entre el tema claro y oscuro.
    function alternarTema() {
        setTema(tema === 'light' ? 'dark' : 'light')
    }

    // Renderizado del componente principal de la aplicación.
    return (
        <div className="d-flex flex-column min-vh-100">

            {/* Renderizado del componente de desplazamiento al inicio. */}
            <ScrollToTop />
            {/* Renderizado del componente de barra de navegación. */}
            <Navbar cantidadTotal={cantidadTotal} tema={tema} alternarTema={alternarTema} />

            {/* Renderizado del componente principal. */}
            <main className="flex-grow-1">

                {/* Renderizado de las rutas de la aplicación. */}
                <Routes>
                    <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />

                    <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/contacto" element={<Contacto />} />


                    <Route path="/carrito" element={<Carrito carrito={carrito} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad} eliminarDelCarrito={eliminarDelCarrito} total={total} cantidadTotal={cantidadTotal} />} />
                    <Route path="/finalizar-compra" element={<FinalizarCompra carrito={carrito} total={total} vaciarCarrito={vaciarCarrito} cantidadTotal={cantidadTotal} />} />
                </Routes>
            </main>

            {/* Renderizado del componente de pie de página. */}
            <Footer />
            {/* Renderizado del componente de avisos. */}
            <Aviso avisos={avisos} />

        </div>
    )
}

// Exportación del componente principal de la aplicación.
export default App