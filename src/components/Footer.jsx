import { Link } from 'react-router-dom'

// Componente para el pie de página
function Footer() {

    // Definición de los enlaces de navegación
    const enlaces = [
        { ruta: '/', texto: 'Inicio' },
        { ruta: '/productos', texto: 'Productos' },
        { ruta: '/nosotros', texto: 'Nosotros' },
        { ruta: '/contacto', texto: 'Contacto' },
        { ruta: '/carrito', texto: 'Carrito' }
    ]

    return (
        <footer className="bg-body-tertiary border-top mt-5 py-4">

            <div className="container">

                <div className="row g-4 mb-4">

                    {/* Información de la marca */}
                    <div className="col-md-4">
                        <p className="fw-bold fs-5 mb-1">Future<span className="text-primary">X</span></p>
                        <p className="text-secondary mb-0">Tienda de videojuegos, consolas, periféricos y accesorios.</p>
                    </div>

                    {/* Enlaces de navegación */}
                    <div className="col-6 col-md-4">
                        <p className="fw-semibold mb-2">Navegación</p>
                        <ul className="list-unstyled mb-0">
                            {enlaces.map(enlace => (
                                <li key={enlace.ruta}>
                                    <Link to={enlace.ruta} className="link-secondary text-decoration-none">{enlace.texto}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Datos de contacto. */}
                    <div className="col-6 col-md-4">
                        <p className="fw-semibold mb-2">Atención al cliente</p>
                        <ul className="list-unstyled text-secondary mb-0">
                            <li><i className="bi bi-envelope me-2"></i>contacto@futurex.com</li>
                            <li><i className="bi bi-clock me-2"></i>Lunes a viernes, de 9 a 18 hs</li>
                        </ul>
                    </div>

                </div>

                {/* Derechos y aclaración del trabajo */}
                <div className="border-top pt-3 text-center text-secondary">
                    <small>© {new Date().getFullYear()} FutureX. Trabajo práctico de Construcción de Interfaces de Usuario, UNAHUR.</small>
                </div>

            </div>

        </footer>
    )

}

export default Footer