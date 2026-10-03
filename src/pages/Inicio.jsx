import { Link } from 'react-router-dom'
import { productos } from '../data/productos'
import ProductoCard from '../components/ProductoCard'

// Página de inicio, con banner, productos destacados y ventajas.
function Inicio({ agregarAlCarrito }) {

    // Productos destacados: filtramos los que tengan la propiedad destacado en true.
    const destacados = productos.filter(producto => producto.destacado)

    // Ventajas de comprar en FutureX, con íconos de Bootstrap Icons.
    const ventajas = [
        { icono: 'bi-truck', titulo: 'Envío rápido', texto: 'Te entregamos tu pedido en el menor tiempo posible.' },
        { icono: 'bi-patch-check', titulo: 'Productos originales', texto: 'Solo ofrecemos productos auténticos y de calidad.' },
        { icono: 'bi-headset', titulo: 'Soporte', texto: 'Nuestro equipo de atención está siempre dispuesto a ayudarte.' }
    ]

    return (
        <>
            {/* Banner principal, y sección de bienvenida */}
            <section className="hero">
                <div className="container">
                    <h1 className="display-4 fw-bold">El futuro del gaming, aquí.</h1>
                    <p className="lead">Juegos, consolas y accesorios.</p>
                    <Link to="/productos" className="btn btn-primary btn-lg">Ver catálogo</Link>
                </div>
            </section>

            {/* Sección de datos de la tienda */}
            <div className="container my-5">

                {/* Descripción del emprendimiento */}
                <div className="row justify-content-center text-center mb-5">

                    <div className="col-lg-8">

                        <p className="text-uppercase fw-semibold small mb-2 texto-acento">Tu tienda gamer</p>
                        <h2 className="display-6 fw-bold">Bienvenido a Future<span className="text-primary">X</span></h2>
                        <div className="acento"></div>

                        <p className="text-secondary fs-5">
                            FutureX es una tienda online de videojuegos pensada para jugadores.
                            Encontrás los últimos lanzamientos, consolas, periféricos y accesorios
                            en un solo lugar, con stock disponible y una compra simple.
                        </p>

                    </div>

                </div>

                {/* Productos destacados */}
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                    <h2 className="mb-0">Destacados</h2>
                    <Link to="/productos" className="btn btn-outline-primary">
                        Ver catálogo completo <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                </div>
                <div className="row g-4 mb-5">
                    {destacados.map(producto => (
                        <div className="col-12 col-sm-6 col-lg-3" key={producto.id}>
                            <ProductoCard producto={producto} agregarAlCarrito={agregarAlCarrito} />
                        </div>
                    ))}
                </div>

                {/* Ventajas */}
                <div className="row g-4 mb-5">
                    {ventajas.map(ventaja => (
                        <div className="col-md-4" key={ventaja.titulo}>

                            <div className="p-4 rounded bg-body-tertiary h-100 text-center">
                                <i className={`bi ${ventaja.icono} fs-1 text-primary`}></i>
                                <h3 className="h5 mt-2">{ventaja.titulo}</h3>
                                <p className="mb-0 text-secondary">{ventaja.texto}</p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Cierre */}
                <div className="p-5 rounded bg-body-tertiary text-center">

                    <h2>¿Listo para tu próximo juego?</h2>
                    <p className="text-secondary">Recorré el catálogo y armá tu carrito en minutos.</p>
                    <Link to="/productos" className="btn btn-primary btn-lg">Ir al catálogo</Link>

                </div>

            </div>
        </>
    )
}

export default Inicio