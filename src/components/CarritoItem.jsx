
// Componente para mostrar un item del carrito de compras.
function CarritoItem({ item, aumentarCantidad, disminuirCantidad, eliminarDelCarrito }) {

    return (

        <div className="card mb-3">

            <div className="card-body">

                <div className="row align-items-center g-3">

                    {/* Imagen del producto */}
                    <div className="col-4 col-md-2">
                        <img src={item.imagen} alt={item.nombre} className="carrito-img" />
                    </div>

                    {/* Información del producto */}
                    <div className="col-8 col-md-4">
                        <h5 className="h6 mb-1">{item.nombre}</h5>
                        <small className="text-secondary">US${item.precio.toFixed(2)} c/u</small>
                    </div>

                    {/* Cantidad y acciones */}
                    <div className="col-6 col-md-3">
                        <div className="input-group input-group-sm">
                            <button
                                onClick={() => disminuirCantidad(item.id)}
                                className="btn btn-outline-primary"
                                aria-label={`Quitar una unidad de ${item.nombre}`}
                                disabled={item.cantidad <= 1}
                            >−</button>
                            <span className="input-group-text">{item.cantidad}</span>
                            <button
                                onClick={() => aumentarCantidad(item.id)}
                                className="btn btn-outline-primary"
                                aria-label={`Agregar una unidad de ${item.nombre}`}
                                disabled={item.cantidad >= item.stock}
                            >+</button>
                        </div>
                    </div>

                    {/* Total del item y botón de eliminar */}
                    <div className="col-6 col-md-3 text-end">
                        <div className="fw-bold">US${(item.precio * item.cantidad).toFixed(2)}</div>
                        <button
                            onClick={() => eliminarDelCarrito(item.id)}
                            className="btn btn-outline-danger btn-sm mt-1"
                            aria-label={`Eliminar ${item.nombre} del carrito`}
                            title="Eliminar"
                        >
                            <i className="bi bi-trash"></i>
                        </button>
                    </div>

                </div>
            </div>

        </div>

    )

}

export default CarritoItem