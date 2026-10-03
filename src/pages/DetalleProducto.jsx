import { useParams, Link } from 'react-router-dom'
import { productos } from '../data/productos'
import ProductoCard from '../components/ProductoCard'

function DetalleProducto({ agregarAlCarrito }) {

    const { id } = useParams()
    const producto = productos.find(p => p.id === Number(id))

    // Validación temprana: si no existe el producto, se muestra otro contenido
    if (!producto) {
        return (
            <div className="container my-5 text-center">
                <h2>Producto no encontrado</h2>
                <p className="text-secondary">El producto que buscás no existe o fue retirado.</p>
                <Link to="/productos" className="btn btn-primary">Volver al catálogo</Link>
            </div>
        )
    }

    // Primero los de la misma categoría y después el resto, hasta completar 4
    const relacionados = [
        ...productos.filter(p => p.categoria === producto.categoria && p.id !== producto.id),
        ...productos.filter(p => p.categoria !== producto.categoria)
    ].slice(0, 4)

    return (
        <div className="container my-4">

            {/* Ruta de navegación */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/productos">Productos</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{producto.nombre}</li>
                </ol>
            </nav>

            <div className="row g-5">

                {/* Imagen con marco blanco */}
                <div className="col-md-6">
                    <img src={producto.imagen} className="detalle-img" alt={producto.nombre} />
                </div>

                {/* Datos del producto */}
                <div className="col-md-6">
                    <small className="text-uppercase text-secondary fw-semibold">{producto.categoria}</small>
                    <h1 className="h2 mt-1">{producto.nombre}</h1>

                    <p className="my-3">
                        <span className="display-6 fw-bold text-primary">US${producto.precio.toFixed(2)}</span>
                        {producto.precioAnterior && (
                            <span className="text-secondary text-decoration-line-through ms-3">
                                US${producto.precioAnterior.toFixed(2)}
                            </span>
                        )}
                    </p>

                    <p className="mb-4">{producto.descripcionCompleta}</p>

                    {/* Características como etiquetas */}
                    <div className="mb-4">
                        {producto.caracteristicas.map((caracteristica) => (
                            <span className="badge text-bg-secondary me-2" key={caracteristica}>{caracteristica}</span>
                        ))}
                    </div>

                    {/* Estado del stock */}
                    <p className="mb-4">
                        {producto.stock === 0
                            ? <span className="badge text-bg-danger">Sin stock</span>
                            : producto.stock <= 5
                                ? <span className="stock-bajo">¡Últimas {producto.stock} unidades!</span>
                                : <span className="text-secondary">{producto.stock} unidades disponibles</span>}
                    </p>

                    {/* Botones de acción */}
                    <div className="d-grid gap-2 d-sm-flex">
                        <button onClick={() => agregarAlCarrito(producto)} className="btn btn-primary btn-lg" disabled={producto.stock === 0}>
                            {producto.stock === 0 ? "No disponible" : "Agregar al carrito"}
                        </button>
                        <Link to="/productos" className="btn btn-outline-primary btn-lg">Volver al catálogo</Link>
                    </div>
                </div>

            </div>

            {/* Productos relacionados */}
            <section className="mt-5">
                <h2 className="h4 mb-3">También te puede interesar</h2>
                <div className="row g-4">
                    {relacionados.map(p => (
                        <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
                            <ProductoCard producto={p} agregarAlCarrito={agregarAlCarrito} />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default DetalleProducto