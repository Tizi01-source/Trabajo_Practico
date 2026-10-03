import { Link } from 'react-router-dom'
import CarritoItem from '../components/CarritoItem'

// Página Carrito
function Carrito({ carrito, aumentarCantidad, disminuirCantidad, eliminarDelCarrito, total, cantidadTotal }) {

    // Si el carrito está vacío, muestra un mensaje indicando que no hay productos y un enlace al catálogo.
    if (carrito.length === 0) {

        return (

            <div className="container my-5 text-center">
                <h2>Tu carrito está vacío</h2>
                <p className="text-secondary">Todavía no agregaste ningún producto.</p>
                <Link to="/productos" className="btn btn-primary">Ir al catálogo</Link>
            </div>

        )

    }

    return (

        <div className="container my-4">

            <h2 className="mb-4">Carrito</h2>

            <div className="row g-4">

                {/* Lista de productos */}
                <div className="col-lg-8">
                    {carrito.map(item => (

                        <CarritoItem
                            key={item.id}
                            item={item}
                            aumentarCantidad={aumentarCantidad}
                            disminuirCantidad={disminuirCantidad}
                            eliminarDelCarrito={eliminarDelCarrito}
                        />

                    ))}
                </div>

                {/* Resumen del carrito */}
                <div className="col-lg-4">

                    <div className="card resumen-carrito">
                        <div className="card-body">

                            {/* Cantidad de productos */}
                            <h5 className="card-title">Resumen del pedido</h5>
                            <div className="d-flex justify-content-between text-secondary mb-2">
                                <span>Productos</span>
                                <span>{cantidadTotal}</span>
                            </div>

                            <hr />

                            {/* Precio total y botones */}
                            <div className="d-flex justify-content-between fs-5 fw-bold mb-3">
                                <span>Total</span>
                                <span className="text-primary">US${total.toFixed(2)}</span>
                            </div>
                            <div className="d-grid gap-2">
                                <Link to="/finalizar-compra" className="btn btn-primary btn-lg">Finalizar compra</Link>
                                <Link to="/productos" className="btn btn-outline-primary">Seguir comprando</Link>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Carrito