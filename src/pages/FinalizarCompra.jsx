import { useState } from 'react'
import { Link } from 'react-router-dom'

function FinalizarCompra({ carrito, total, vaciarCarrito, cantidadTotal }) {
    const [form, setForm] = useState({
        nombre: '', email: '', telefono: '', direccion: '', entrega: 'envio', mensaje: ''
    })
    const [errores, setErrores] = useState({})
    const [confirmado, setConfirmado] = useState(false)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const nuevosErrores = {}

        if (carrito.length === 0) nuevosErrores.carrito = 'Tu carrito está vacío'

        if (form.nombre.trim() === '') {
            nuevosErrores.nombre = 'El nombre es obligatorio'
        } else if (!/^[\p{L}\s'.-]{2,}$/u.test(form.nombre.trim())) {
            nuevosErrores.nombre = 'El nombre solo puede tener letras'
        }

        if (form.email.trim() === '') {
            nuevosErrores.email = 'El email es obligatorio'
        } else if (!/^\S+@\S+\.\S{2,}$/.test(form.email.trim())) {
            nuevosErrores.email = 'El email no es válido'
        }

        const digitosTelefono = form.telefono.replace(/\D/g, '')
        if (form.telefono.trim() === '') {
            nuevosErrores.telefono = 'El teléfono es obligatorio'
        } else if (!/^[+\d\s()-]+$/.test(form.telefono) || digitosTelefono.length < 8 || digitosTelefono.length > 15) {
            nuevosErrores.telefono = 'El teléfono no es válido (entre 8 y 15 números)'
        }

        if (form.entrega === 'envio' && form.direccion.trim().length < 5) {
            nuevosErrores.direccion = 'Ingresá una dirección o localidad válida'
        }

        setErrores(nuevosErrores)

        if (Object.keys(nuevosErrores).length === 0) {
            setConfirmado(true)
            vaciarCarrito()
        }
    }

    if (confirmado) {
        return (
            <div className="container my-4">
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Compra confirmada</h4>
                    <p>Gracias por tu compra, {form.nombre}.</p>
                </div>
                <Link to="/productos" className="btn btn-primary">Volver al catálogo</Link>
            </div>
        )
    }

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-lg-7">

                    <h2 className="mb-4">Finalizar compra</h2>

                    <div className="alert alert-secondary">
                        <strong>Resumen del pedido:</strong> {cantidadTotal} productos · Total: US${total.toFixed(2)}
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                            <input id="nombre" type="text" name="nombre" className="form-control"
                                   value={form.nombre} onChange={handleChange} />
                            {errores.nombre && <div className="text-danger">{errores.nombre}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" type="email" name="email" className="form-control"
                                   value={form.email} onChange={handleChange} />
                            {errores.email && <div className="text-danger">{errores.email}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input id="telefono" type="tel" name="telefono" className="form-control"
                                   value={form.telefono} onChange={handleChange} />
                            {errores.telefono && <div className="text-danger">{errores.telefono}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input id="direccion" type="text" name="direccion" className="form-control"
                                   value={form.direccion} onChange={handleChange} />
                            {errores.direccion && <div className="text-danger">{errores.direccion}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="entrega" className="form-label">Método de entrega</label>
                            <select id="entrega" name="entrega" className="form-select"
                                    value={form.entrega} onChange={handleChange}>
                                <option value="envio">Envío a domicilio</option>
                                <option value="retiro">Retiro en tienda</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje o aclaración (opcional)</label>
                            <textarea id="mensaje" name="mensaje" className="form-control"
                                      value={form.mensaje} onChange={handleChange}></textarea>
                        </div>

                        {errores.carrito && <div className="text-danger mb-3">{errores.carrito}</div>}
                        <button type="submit" className="btn btn-primary btn-lg w-100">Confirmar compra</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default FinalizarCompra