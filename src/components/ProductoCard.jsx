import { Link } from "react-router-dom"

function ProductoCard({ producto, agregarAlCarrito }) {
    return (
        <div className="card h-100 producto-card">

            <div className="position-relative">
                {producto.etiqueta && (
                    <span className={`badge position-absolute top-0 start-0 m-2 ${producto.etiqueta === 'Oferta' ? 'text-bg-danger' : 'text-bg-primary'}`}>
                        {producto.etiqueta}
                    </span>
                )}
                <img src={producto.imagen} className="card-img-top producto-img" alt={producto.nombre} />
            </div>

            <div className="card-body d-flex flex-column">
                <small className="text-uppercase text-secondary fw-semibold">{producto.categoria}</small>
                <h5 className="card-title mt-1">{producto.nombre}</h5>
                <p className="card-text text-secondary producto-desc">{producto.descripcion}</p>

                <p className="mb-1">
                    <span className="fs-4 fw-bold text-primary">US${producto.precio.toFixed(2)}</span>
                    {producto.precioAnterior && (
                        <small className="text-secondary text-decoration-line-through ms-2">
                            US${producto.precioAnterior.toFixed(2)}
                        </small>
                    )}
                </p>

                {/* Estado del stock */}
                <p className="mb-3">
                    {producto.stock === 0
                        ? <span className="badge text-bg-danger">Sin stock</span>
                        : producto.stock <= 5
                            ? <small className="stock-bajo">¡Últimas {producto.stock} unidades!</small>
                            : <small className="text-secondary">{producto.stock} disponibles</small>}
                </p>

                <div className="mt-auto d-grid gap-2">
                    <button onClick={() => agregarAlCarrito(producto)} className="btn btn-primary" disabled={producto.stock === 0}>
                        {producto.stock === 0 ? "No disponible" : "Agregar al carrito"}
                    </button>
                    <Link className="btn btn-outline-primary" to={`/producto/${producto.id}`}>Ver detalle</Link>
                </div>
            </div>

        </div>
    )
}

export default ProductoCard