import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Efecto para hacer scroll al top de la página cuando cambia la ruta
function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop