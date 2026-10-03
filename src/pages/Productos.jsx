import { productos } from "../data/productos.js"
import ProductoCard from "../components/ProductoCard.jsx"
import { useState } from "react"

function Productos({ agregarAlCarrito }) {

    const [busqueda, setBusqueda] = useState('')
    const [categoria, setCategoria] = useState('Todas')
    const [orden, setOrden] = useState('ninguno')

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
        (categoria === 'Todas' || producto.categoria === categoria)
    )

    // sort modifica el array sobre el que se llama, por eso se trabaja sobre una copia
    const productosOrdenados = [...productosFiltrados].sort((a, b) => {
        if (orden === 'menor') return a.precio - b.precio
        if (orden === 'mayor') return b.precio - a.precio
        return 0
    })

    const hayFiltros = busqueda !== '' || categoria !== 'Todas' || orden !== 'ninguno'

    function limpiarFiltros() {
        setBusqueda('')
        setCategoria('Todas')
        setOrden('ninguno')
    }

    return (
        <div className="container my-4">

            <h2 className="mb-3">Productos</h2>

            <div className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por nombre..."
                        aria-label="Buscar productos por nombre"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
                <div className="col-6 col-md-3">
                    <select
                        className="form-select"
                        aria-label="Filtrar por categoría"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="Todas">Todas las categorías</option>
                        <option value="Juego">Juego</option>
                        <option value="Consola">Consola</option>
                        <option value="Periférico">Periférico</option>
                        <option value="Accesorio">Accesorio</option>
                    </select>
                </div>
                <div className="col-6 col-md-3">
                    <select
                        className="form-select"
                        aria-label="Ordenar productos"
                        value={orden}
                        onChange={(e) => setOrden(e.target.value)}
                    >
                        <option value="ninguno">Ordenar por</option>
                        <option value="menor">Precio: menor a mayor</option>
                        <option value="mayor">Precio: mayor a menor</option>
                    </select>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <small className="text-secondary">
                    {productosOrdenados.length} {productosOrdenados.length === 1 ? 'producto' : 'productos'}
                </small>
                {hayFiltros && (
                    <button className="btn btn-link btn-sm p-0" onClick={limpiarFiltros}>Limpiar filtros</button>
                )}
            </div>

            {productosOrdenados.length === 0 && (
                <div className="text-center my-5">
                    <i className="bi bi-search fs-1 text-secondary"></i>
                    <p className="mt-2">No se encontraron productos.</p>
                    <button className="btn btn-outline-primary" onClick={limpiarFiltros}>Limpiar filtros</button>
                </div>
            )}

            <div className="row g-4">
                {productosOrdenados.map(producto => (
                    <div className="col-12 col-sm-6 col-lg-3" key={producto.id}>
                        <ProductoCard producto={producto} agregarAlCarrito={agregarAlCarrito} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Productos