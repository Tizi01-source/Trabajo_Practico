

// Componente para el pie de página
function Footer() {

    return (
        <footer className="bg-body-tertiary border-top mt-5 py-4">

            <div className="container text-center text-secondary">
                <p className="mb-1">FutureX · Tienda de videojuegos</p>
                <small>© {new Date().getFullYear()} FutureX. Trabajo práctico de Construcción de Interfaces de Usuario, UNAHUR.</small>
            </div>

        </footer>
    )

}

export default Footer