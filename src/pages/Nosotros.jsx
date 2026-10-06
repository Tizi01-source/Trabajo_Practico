import { productos } from '../data/productos'

// Página "Nosotros" que describe la historia, misión y valores de la tienda
function Nosotros() {

    // Datos de la tienda y valores que se mostrarán en la página
    const cantidadProductos = productos.length
    const cantidadCategorias = new Set(productos.map(p => p.categoria)).size
    const datos = [
        { icono: 'bi-calendar-event', valor: '2026', texto: 'Año de lanzamiento' },
        { icono: 'bi-controller', valor: cantidadProductos, texto: 'Productos en catálogo' },
        { icono: 'bi-grid', valor: cantidadCategorias, texto: 'Categorías' }
    ]
    const valores = [
        { icono: 'bi-eye', titulo: 'Claridad', texto: 'Un catálogo fácil de recorrer y precios a la vista.' },
        { icono: 'bi-lightning-charge', titulo: 'Rapidez', texto: 'Comprar en pocos pasos, sin vueltas.' },
        { icono: 'bi-shield-check', titulo: 'Confianza', texto: 'Productos originales y atención cercana.' }
    ]

    return (
        <>

            {/* Encabezado con imagen */}
            <section className="page-hero">

                <div className="container">
                    <p className="text-uppercase fw-semibold small mb-2 etiqueta">Conocenos</p>
                    <h1 className="display-5 fw-bold">Sobre Future<span className="x-clara">X</span></h1>
                    <p className="lead mb-0">Una tienda de videojuegos hecha para jugadores.</p>
                </div>

            </section>

            {/* Sección de datos de la tienda */}
            <div className="container my-5">

                {/* Historia y misión */}
                <div className="row g-4 align-items-stretch mb-5">

                    {/* Nuestra historia */}
                    <div className="col-lg-7">
                        <p className="text-uppercase fw-semibold small mb-1 texto-acento">Cómo empezó</p>
                        <h2>Nuestra historia</h2>
                        <div className="border-start border-4 border-primary ps-4 mt-3">
                            <p className="fs-5 mb-0">
                                FutureX nació en 2026 como proyecto de la materia Construcción de Interfaces
                                de Usuario, con una idea simple: una tienda de videojuegos clara, rápida y
                                fácil de recorrer. Reunimos juegos, consolas, periféricos y accesorios en un
                                solo lugar.
                            </p>
                        </div>
                    </div>
                    {/* Nuestra misión */}
                    <div className="col-lg-5">
                        <div className="card h-100 border-primary">
                            <div className="card-body">
                                <h3 className="h5"><i className="bi bi-bullseye text-primary me-2"></i>Nuestra misión</h3>
                                <p className="mb-0">
                                    Que comprar tu próximo juego o equipo sea tan simple como jugarlo.
                                    <br></br>
                                    Buscamos que la experiencia de compra sea rápida, clara y confiable, para que puedas
                                    dedicar más tiempo a lo que realmente importa: jugar.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Datos de la tienda */}
                <div className="row g-4 text-center mb-5">

                    {datos.map(dato => (
                        <div className="col-md-4" key={dato.texto}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <i className={`bi ${dato.icono} fs-2 text-primary`}></i>
                                    <p className="display-6 fw-bold text-primary mb-0">{dato.valor}</p>
                                    <p className="text-secondary mb-0">{dato.texto}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Valores */}
                <h2 className="mb-3">Lo que nos importa</h2>
                <div className="row g-4 mb-5">
                    {valores.map(valor => (
                        <div className="col-md-4" key={valor.titulo}>
                            <div className="p-4 rounded bg-body-tertiary h-100">
                                <i className={`bi ${valor.icono} fs-3 text-primary`}></i>
                                <h3 className="h5 mt-2">{valor.titulo}</h3>
                                <p className="mb-0 text-secondary">{valor.texto}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Integrante */}
                <h2 className="mb-3">Quién lo hizo</h2>
                <div className="card">
                    <div className="card-body d-flex align-items-center gap-3 flex-wrap">

                        <div className="avatar-iniciales">TC</div>

                        <div className="flex-grow-1">
                            <h3 className="h5 mb-1">Tiziano Costantini Marquez</h3>
                            <p className="text-secondary mb-2">Estudiante de la Licenciatura en Informática, UNAHUR.</p>
                            <span className="badge text-bg-secondary me-1">React</span>
                            <span className="badge text-bg-secondary me-1">JavaScript</span>
                            <span className="badge text-bg-secondary me-1">CSS</span>
                            <span className="badge text-bg-secondary">Vite</span>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Nosotros