import { useState } from 'react'
import { Link } from 'react-router-dom'

// Componente Contacto
function Contacto() {

    // Estados para manejar el formulario, errores y confirmación
    const [errores, setErrores] = useState({})
    const [confirmado, setConfirmado] = useState(false)
    const [form, setForm] = useState({
        nombre: '', email: '', asunto: '', mensaje: ''
    })

    // Información de contacto y preguntas frecuentes
    const infoContacto = [
        { icono: 'bi-envelope', titulo: 'Email', texto: 'contacto@futurex.com' },
        { icono: 'bi-clock', titulo: 'Horario de atención', texto: 'Lunes a viernes, de 9 a 18 hs' },
        { icono: 'bi-chat-dots', titulo: 'Respuesta', texto: 'En menos de 24 horas hábiles' }
    ]

    // Preguntas frecuentes
    const preguntas = [
        { pregunta: '¿Cuánto demora el envío?', respuesta: 'Entre 3 y 7 días hábiles, según tu zona.' },
        { pregunta: '¿Puedo devolver un producto?', respuesta: 'Sí, dentro de los 10 días de recibido y con su embalaje original.' },
        { pregunta: '¿Qué medios de pago aceptan?', respuesta: 'Tarjetas de crédito y débito, y transferencia bancaria.' }
    ]

    // Función para manejar cambios en los campos del formulario
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // Función para manejar el envío del formulario y validar los campos
    function handleSubmit(e) {

        // Prevenir el comportamiento por defecto del formulario
        e.preventDefault()
        const nuevosErrores = {}

        // Validación del campo nombre
        if (form.nombre.trim() === '') {
            nuevosErrores.nombre = 'El nombre es obligatorio'
        } else if (!/^[\p{L}\s'.-]{2,}$/u.test(form.nombre.trim())) {
            nuevosErrores.nombre = 'El nombre solo puede tener letras'
        }

        // Validación del campo email
        if (form.email.trim() === '') {
            nuevosErrores.email = 'El email es obligatorio'
        } else if (!/^\S+@\S+\.\S{2,}$/.test(form.email.trim())) {
            nuevosErrores.email = 'El email no es válido'
        }

        // Validación del campo mensaje
        if (form.mensaje.trim().length < 10) {
            nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres'
        }

        // Actualización del estado de errores
        setErrores(nuevosErrores)

        // Si no hay errores, se confirma el envío del mensaje
        if (Object.keys(nuevosErrores).length === 0) {
            setConfirmado(true)
        }
    }

    // Renderizado condicional según si el mensaje fue confirmado o no.
    if (confirmado) {
        return (
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <i className="bi bi-check-circle fs-1 text-success"></i>
                        <h2 className="mt-2">Mensaje enviado</h2>
                        <p className="text-secondary">
                            Gracias por escribirnos, {form.nombre}. Te vamos a responder a {form.email} lo antes posible.
                        </p>
                        <Link to="/productos" className="btn btn-primary">Volver al catálogo</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>

            {/* Encabezado */}
            <section className="page-hero">

                <div className="container">
                    <p className="text-uppercase fw-semibold small mb-2 etiqueta">Estamos para ayudarte</p>
                    <h1 className="display-5 fw-bold">Contacto</h1>
                    <p className="lead mb-0">¿Tenés alguna consulta sobre un producto, un pedido o una devolución? Escribinos y te respondemos.</p>
                </div>

            </section>

            {/* Contenido principal */}
            <div className="container my-5">
                <div className="row g-4">

                    {/* Formulario */}
                    <div className="col-lg-7">
                        <div className="card">
                            <div className="card-body p-4">

                                {/* Formulario de contacto */}
                                <h2 className="h4 mb-4">Envianos un mensaje</h2>
                                <form onSubmit={handleSubmit} noValidate>

                                    {/* Campo de nombre */}
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                                        <input id="nombre" type="text" name="nombre" className="form-control"
                                               value={form.nombre} onChange={handleChange} />
                                        {errores.nombre && <div className="text-danger">{errores.nombre}</div>}
                                    </div>

                                    {/* Campo de email */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input id="email" type="email" name="email" className="form-control"
                                               value={form.email} onChange={handleChange} />
                                        {errores.email && <div className="text-danger">{errores.email}</div>}
                                    </div>

                                    {/* Campo de asunto */}
                                    <div className="mb-3">
                                        <label htmlFor="asunto" className="form-label">Asunto (opcional)</label>
                                        <input id="asunto" type="text" name="asunto" className="form-control"
                                               value={form.asunto} onChange={handleChange} />
                                    </div>

                                    {/* Campo de mensaje */}
                                    <div className="mb-3">
                                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                        <textarea id="mensaje" name="mensaje" rows="5" className="form-control"
                                                  value={form.mensaje} onChange={handleChange}></textarea>
                                        {errores.mensaje && <div className="text-danger">{errores.mensaje}</div>}
                                    </div>

                                    {/* Botón de envío */}
                                    <button type="submit" className="btn btn-primary btn-lg w-100">Enviar mensaje</button>
                                </form>

                            </div>
                        </div>
                    </div>

                    {/* Datos de contacto y preguntas frecuentes */}
                    <div className="col-lg-5">

                        {/* Información de contacto */}
                        {infoContacto.map(info => (

                            <div className="card mb-3" key={info.titulo}>
                                <div className="card-body d-flex align-items-center gap-3">

                                    <div className="icono-circulo"><i className={`bi ${info.icono}`}></i></div>

                                    <div>
                                        <div className="fw-semibold">{info.titulo}</div>
                                        <div className="text-secondary">{info.texto}</div>
                                    </div>

                                </div>
                            </div>

                        ))}

                        {/* Preguntas frecuentes */}
                        <h2 className="h5 mt-4 mb-3">Preguntas frecuentes</h2>
                        <div className="accordion" id="faq">

                            {preguntas.map((p, i) => (

                                <div className="accordion-item" key={p.pregunta}>

                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target={`#faq-${i}`}>
                                            {p.pregunta}
                                        </button>
                                    </h3>

                                    <div id={`faq-${i}`} className="accordion-collapse collapse" data-bs-parent="#faq">
                                        <div className="accordion-body text-secondary">{p.respuesta}</div>
                                    </div>

                                </div>

                            ))}

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Contacto