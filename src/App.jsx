import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import FinalizarCompra from './pages/FinalizarCompra.jsx'
import Navbar from './components/Navbar'
import DetalleProducto from './pages/DetalleProducto'
import { useState, useEffect } from 'react'
import Footer from "./components/Footer.jsx"
import Nosotros from './pages/Nosotros'
import ScrollToTop from './components/ScrollToTop'
import Aviso from './components/Aviso'

function App() {
    const [carrito, setCarrito] = useState(() => {
        const guardado = localStorage.getItem('carrito')
        return guardado ? JSON.parse(guardado) : []
    })
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    // Avisos (mensajes que aparecen abajo a la derecha)
    const [avisos, setAvisos] = useState([])

    function mostrarAviso(texto, tipo) {
        const id = Date.now() + Math.random()
        setAvisos(prev => [...prev, { id, texto, tipo }].slice(-3))
        setTimeout(() => {
            setAvisos(prev => prev.filter(a => a.id !== id))
        }, 2500)
    }

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

    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

    function vaciarCarrito() {
        setCarrito([])
    }

    const [tema, setTema] = useState(() => {
        return localStorage.getItem('tema') || 'light'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', tema)
        localStorage.setItem('tema', tema)
    }, [tema])

    function alternarTema() {
        setTema(tema === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <ScrollToTop />
            <Navbar cantidadTotal={cantidadTotal} tema={tema} alternarTema={alternarTema} />

            <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />

                    <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/nosotros" element={<Nosotros />} />

                    <Route path="/carrito" element={<Carrito carrito={carrito} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad} eliminarDelCarrito={eliminarDelCarrito} total={total} cantidadTotal={cantidadTotal} />} />
                    <Route path="/finalizar-compra" element={<FinalizarCompra carrito={carrito} total={total} vaciarCarrito={vaciarCarrito} cantidadTotal={cantidadTotal} />} />
                </Routes>
            </main>

            <Footer />
            <Aviso avisos={avisos} />
        </div>
    )
}

export default App