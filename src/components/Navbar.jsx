import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// Componente de la barra de navegación.
function Navbar({ cantidadTotal, tema, alternarTema }) {
    const { pathname } = useLocation()

    useEffect(() => {
        const menu = document.getElementById('menu')
        if (menu && menu.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click()
        }
    }, [pathname])

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container">

                {/* Logo y nombre de la marca */}
                <Link className="navbar-brand" to="/">
                    <img src={tema === 'dark' ? '/img/logo-oscuro.png' : '/img/logo-claro.png'}
                         alt="FutureX" height="32" />
                </Link>

                {/* Botón del menú en dispositivos móviles */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Abrir menú">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menú de navegación */}
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                        {/* Inicio del menú */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" end>Inicio</NavLink>
                        </li>
                        {/* Productos */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/productos">Productos</NavLink>
                        </li>
                        {/* Nosotros */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                        </li>
                        {/* Contacto */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                        </li>
                        {/* Carrito */}
                        <li className="nav-item">
                            <NavLink className="nav-link d-flex align-items-center gap-2" to="/carrito">
                                Carrito
                                {cantidadTotal > 0 && (
                                    <span className="badge rounded-pill text-bg-primary">{cantidadTotal}</span>
                                )}
                            </NavLink>
                        </li>
                        {/* Botón de tema */}
                        <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                            <button className="btn btn-outline-secondary btn-sm" onClick={alternarTema}>
                                {tema === 'dark' ? 'Modo claro' : 'Modo oscuro'}
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default Navbar