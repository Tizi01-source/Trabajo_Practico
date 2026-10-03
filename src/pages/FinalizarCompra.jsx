import { useState } from 'react'
import { Link } from 'react-router-dom'

// Página de finalizar la compra, con formulario de datos del cliente y validación.
function FinalizarCompra({ carrito, total, vaciarCarrito, cantidadTotal }) {

    // Estado para el formulario, errores y confirmación de compra.
    const [form, setForm] = useState({
        nombre: '', email: '', telefono: '', direccion: '', entrega: 'envio', mensaje: ''
    })
    const [errores, setErrores] = useState({})
    const [confirmado, setConfirmado] = useState(false)

    // Copia del pedido confirmado. Se guarda antes de vaciar el carrito para poder mostrar el resumen.
    const [pedido, setPedido] = useState(null)

    // Función para manejar cambios en los campos del formulario.
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // Función para manejar el envío del formulario, con validación de campos.
    function handleSubmit(e) {

        // Evita que se recargue la página al enviar el formulario.
        e.preventDefault()
        const nuevosErrores = {}

        // Validación de campos del formulario y del carrito. Si hay errores, se muestran mensajes de error.
        if (carrito.length === 0) nuevosErrores.carrito = 'Tu carrito está vacío'

        // Validación de nombre, email, teléfono y dirección según los criterios establecidos.
        if (form.nombre.trim() === '') {
            nuevosErrores.nombre = 'El nombre es obligatorio'
        } else if (!/^[\p{L}\s'.-]{2,}$/u.test(form.nombre.trim())) {
            nuevosErrores.nombre = 'El nombre solo puede tener letras'
        }

        // Validación de email con expresión regular para formato válido.
        if (form.email.trim() === '') {
            nuevosErrores.email = 'El email es obligatorio'
        } else if (!/^\S+@\S+\.\S{2,}$/.test(form.email.trim())) {
            nuevosErrores.email = 'El email no es válido'
        }

        // Validación de teléfono: solo números, espacios, paréntesis, guiones y signos +, con entre 8 y 15 dígitos.
        const digitosTelefono = form.telefono.replace(/\D/g, '')
        if (form.telefono.trim() === '') {
            nuevosErrores.telefono = 'El teléfono es obligatorio'
        } else if (!/^[+\d\s()-]+$/.test(form.telefono) || digitosTelefono.length < 8 || digitosTelefono.length > 15) {
            nuevosErrores.telefono = 'El teléfono no es válido (entre 8 y 15 números)'
        }

        // Validación de dirección: si eligió envío, la dirección debe tener al menos 5 caracteres.
        if (form.entrega === 'envio' && form.direccion.trim().length < 5) {
            nuevosErrores.direccion = 'Ingresá una dirección o localidad válida'
        }

        // Actualiza el estado de errores con los nuevos errores encontrados.
        setErrores(nuevosErrores)

        // Si no hay errores, se guarda una copia del pedido, se confirma la compra y se vacía el carrito.
        if (Object.keys(nuevosErrores).length === 0) {
            setPedido({ items: carrito, total, cantidadTotal })
            setConfirmado(true)
            vaciarCarrito()
        }
    }

    // Si la compra fue confirmada, se muestra el resumen del pedido y un botón para volver al catálogo.
    if (confirmado) {
        return (
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7">

                        {/* Mensaje de confirmación */}
                        <div className="text-center mb-4">
                            <i className="bi bi-check-circle fs-1 text-success"></i>
                            <h2 className="mt-2">¡Compra confirmada!</h2>
                            <p className="text-secondary mb-0">
                                Gracias por tu compra, {form.nombre}. El detalle se enviaría a {form.email}.
                            </p>
                            <small className="text-secondary">Es una compra simulada: no se realizó ningún cobro.</small>
                        </div>

                        {/* Resumen del pedido */}
                        <div className="card mb-4">
                            <div className="card-body">

                                <h5 className="card-title">Resumen de tu pedido</h5>

                                <ul className="list-group list-group-flush">
                                    {pedido.items.map(item => (
                                        <li className="list-group-item d-flex justify-content-between px-0" key={item.id}>
                                            <span>{item.nombre} × {item.cantidad}</span>
                                            <span>US${(item.precio * item.cantidad).toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="d-flex justify-content-between fs-5 fw-bold mt-3">
                                    <span>Total ({pedido.cantidadTotal} {pedido.cantidadTotal === 1 ? 'producto' : 'productos'})</span>
                                    <span className="text-primary">US${pedido.total.toFixed(2)}</span>
                                </div>

                                <p className="text-secondary mb-0 mt-3">
                                    <i className="bi bi-truck me-2"></i>
                                    {form.entrega === 'envio' ? `Envío a domicilio: ${form.direccion}` : 'Retiro en tienda'}
                                </p>

                            </div>
                        </div>

                        <div className="d-grid">
                            <Link to="/productos" className="btn btn-primary btn-lg">Seguir comprando</Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-4">

            <div className="row justify-content-center">
                <div className="col-lg-7">

                    <h2 className="mb-4">Finalizar compra</h2>

                    {/* Resumen del pedido */}
                    <div className="alert alert-secondary">
                        <strong>Resumen del pedido:</strong> {cantidadTotal} productos · Total: US${total.toFixed(2)}
                    </div>

                    {/* Formulario de datos del cliente */}
                    <form onSubmit={handleSubmit} noValidate>

                        {/* Campos Nombre y apellido */}
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                            <input id="nombre" type="text" name="nombre" className="form-control"
                                   value={form.nombre} onChange={handleChange} />
                            {errores.nombre && <div className="text-danger">{errores.nombre}</div>}
                        </div>

                        {/* Campos Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" type="email" name="email" className="form-control"
                                   value={form.email} onChange={handleChange} />
                            {errores.email && <div className="text-danger">{errores.email}</div>}
                        </div>

                        {/* Campos Teléfono */}
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input id="telefono" type="tel" name="telefono" className="form-control"
                                   value={form.telefono} onChange={handleChange} />
                            {errores.telefono && <div className="text-danger">{errores.telefono}</div>}
                        </div>

                        {/* Campos Dirección */}
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input id="direccion" type="text" name="direccion" className="form-control"
                                   value={form.direccion} onChange={handleChange} />
                            {errores.direccion && <div className="text-danger">{errores.direccion}</div>}
                        </div>

                        {/* Campos Tipo de entrega */}
                        <div className="mb-3">
                            <label htmlFor="entrega" className="form-label">Método de entrega</label>
                            <select id="entrega" name="entrega" className="form-select"
                                    value={form.entrega} onChange={handleChange}>
                                <option value="envio">Envío a domicilio</option>
                                <option value="retiro">Retiro en tienda</option>
                            </select>
                        </div>

                        {/* Campos Mensaje o aclaración */}
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje o aclaración (opcional)</label>
                            <textarea id="mensaje" name="mensaje" className="form-control"
                                      value={form.mensaje} onChange={handleChange}></textarea>
                        </div>

                        {/* Botón de confirmar compra y finalizar */}
                        {errores.carrito && <div className="text-danger mb-3">{errores.carrito}</div>}
                        <button type="submit" className="btn btn-primary btn-lg w-100">Confirmar compra</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default FinalizarCompra