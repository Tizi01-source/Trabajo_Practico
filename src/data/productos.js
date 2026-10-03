// Catálogo de la tienda. Todos los productos tienen los mismos campos que el primero.
// Campos opcionales, solo en algunos productos:
//   - precioAnterior: precio antes de la oferta (se muestra tachado).
//   - etiqueta: texto destacado en la card ("Oferta", "Más vendido", "Nuevo").

export const productos = [
    {
        id: 1, // Id para identificar el producto. Tipo number.
        nombre: "Call Of Duty Vanguard", // Nombre del producto. Tipo string.
        categoria: "Juego", // Categoría del producto. Tipo string.
        precio: 39.90, // Precio del producto. Tipo number.
        imagen: "/img/juego1.jpg", // Ruta de la imagen del producto. Tipo string.
        descripcion: "Juego de disparos en primera persona ambientado en la Segunda Guerra Mundial.", // Descripción breve del producto. Tipo string.
        descripcionCompleta: "Call of Duty es un juego de disparos en primera persona ambientado en la Segunda Guerra Mundial. Los jugadores asumen el papel de soldados en diferentes campañas y escenarios históricos, participando en intensas batallas y misiones. El juego ofrece una experiencia inmersiva con gráficos realistas, sonido envolvente y una narrativa emocionante que captura la esencia de la guerra.", // Descripción completa del producto. Tipo string.
        stock: 15, // Cantidad de unidades disponibles en stock. Tipo number.
        destacado: true, // Indica si el producto es destacado. Tipo boolean.
        caracteristicas: ["Disparos", "FPS", "Multijugador"] // Lista de características del producto. Tipo array de strings.
    }, // Juego 1
    {
        id: 2,
        nombre: "Nintendo Switch",
        categoria: "Consola",
        precio: 300.00,
        imagen: "/img/consola1.jpg",
        descripcion: "Consola de videojuegos híbrida que se puede usar como consola doméstica o portátil.",
        descripcionCompleta: "La Nintendo Switch es una consola de videojuegos híbrida que puede usarse como consola doméstica en el hogar o como consola portátil cuando se desea jugar en movimiento. Ofrece una experiencia de juego versátil y emocionante.",
        stock: 8,
        destacado: true,
        caracteristicas: ["Portátil", "Híbrida"]
    }, // Consola 1
    {
        id: 3,
        nombre: "DualShock 4",
        categoria: "Periférico",
        precio: 69.99,
        imagen: "/img/periferico1.jpg",
        descripcion: "Control inalámbrico para la consola PlayStation 4 con tecnología de vibración y sensor de movimiento.",
        descripcionCompleta: "El DualShock 4 es un control inalámbrico diseñado para la consola PlayStation 4. Cuenta con tecnología de vibración, un sensor de movimiento y un panel táctil que permite una experiencia de juego más inmersiva. Su diseño ergonómico proporciona comodidad durante largas sesiones de juego.",
        stock: 0,
        destacado: false,
        caracteristicas: ["Negro", "Inalámbrico"]
    }, // Periférico 1
    {
        id: 4,
        nombre: "Cargador",
        categoria: "Accesorio",
        precio: 15.00,
        imagen: "/img/accesorio1.jpg",
        descripcion: "Cargador para dispositivos electrónicos.",
        descripcionCompleta: "Cargador para dispositivos electrónicos. Compatible con una amplia gama de dispositivos y ofrece una carga rápida y eficiente.",
        stock: 5,
        destacado: false,
        caracteristicas: ["Eficiente", "Rápido"]
    }, // Accesorio 1
    {
        id: 5,
        nombre: "Audífonos",
        categoria: "Periférico",
        precio: 48.99,
        imagen: "/img/periferico2.jpg",
        descripcion: "Audífonos inalámbricos con cancelación de ruido.",
        descripcionCompleta: "Los audífonos inalámbricos con cancelación de ruido ofrecen una experiencia de audio superior, permitiendo disfrutar de la música y las llamadas sin interrupciones. Su diseño ergonómico y comodidad durante largas sesiones de uso los convierten en una opción ideal para el día a día.",
        stock: 10,
        destacado: false,
        caracteristicas: ["Inalámbricos", "Cancelación de ruido"]
    }, // Periférico 2
    {
        id: 6,
        nombre: "Teclado mecánico",
        categoria: "Periférico",
        precio: 79.99,
        precioAnterior: 99.99,
        etiqueta: "Oferta",
        imagen: "/img/periferico3.jpg",
        descripcion: "Teclado mecánico con retroiluminación RGB.",
        descripcionCompleta: "El teclado mecánico con retroiluminación RGB ofrece una experiencia de escritura y juego excepcional. Sus teclas mecánicas proporcionan una respuesta táctil precisa, mientras que la iluminación RGB personalizable permite crear un ambiente de juego único.",
        stock: 12,
        destacado: false,
        caracteristicas: ["Mecánico", "RGB"]
    }, // Periférico 3
    {
        id: 7,
        nombre: "Xbox Series X",
        categoria: "Consola",
        precio: 500.00,
        etiqueta: "Más vendido",
        imagen: "/img/consola2.jpg",
        descripcion: "Consola de videojuegos de última generación con gráficos de alta calidad.",
        descripcionCompleta: "La Xbox Series X es una consola de videojuegos de última generación que ofrece gráficos de alta calidad y un rendimiento excepcional. Con su potente hardware, permite disfrutar de juegos con tiempos de carga reducidos y una experiencia de juego fluida.",
        stock: 3,
        destacado: true,
        caracteristicas: ["Next Gen", "Microsoft"]
    }, // Consola 2
    {
        id: 8,
        nombre: "PlayStation 5 Pro",
        categoria: "Consola",
        precio: 899.99,
        imagen: "/img/consola3.jpg",
        descripcion: "Consola de videojuegos de última generación con gráficos de alta calidad y rendimiento excepcional.",
        descripcionCompleta: "La PlayStation 5 Pro es una consola de videojuegos de última generación que ofrece gráficos de alta calidad y un rendimiento excepcional. Con su potente hardware, permite disfrutar de juegos con tiempos de carga reducidos y una experiencia de juego fluida.",
        stock: 0,
        destacado: false,
        caracteristicas: ["Sony", "Pro"]
    }, // Consola 3
    {
        id: 9,
        nombre: "Soporte para consola",
        categoria: "Accesorio",
        precio: 25.00,
        imagen: "/img/accesorio2.jpg",
        descripcion: "Soporte para consola que permite mantenerla en posición vertical y mejorar la ventilación.",
        descripcionCompleta: "El soporte para consola es una solución ideal para mantener la consola en posición vertical, lo que mejora la ventilación y evita el sobrecalentamiento. Es fácil de instalar y se adapta a diferentes tipos de consolas.",
        stock: 7,
        destacado: false,
        caracteristicas: ["Ergonómico", "Ventilación"]
    }, // Accesorio 2
    {
        id: 10,
        nombre: "Cargador portátil",
        categoria: "Accesorio",
        precio: 20.00,
        imagen: "/img/accesorio3.jpg",
        descripcion: "Cargador portátil para dispositivos electrónicos, ideal para viajes y uso diario.",
        descripcionCompleta: "El cargador portátil es una solución práctica para cargar dispositivos electrónicos en movimiento. Con su diseño compacto y eficiente, es perfecto para viajes y uso diario, garantizando que tus dispositivos siempre estén cargados.",
        stock: 4,
        destacado: false,
        caracteristicas: ["Compacto", "Eficiente"]
    }, // Accesorio 3
    {
        id: 11,
        nombre: "EA Sports 25",
        categoria: "Juego",
        precio: 59.99,
        etiqueta: "Nuevo",
        imagen: "/img/juego2.jpg",
        descripcion: "Juego de fútbol con gráficos realistas y modos de juego variados.",
        descripcionCompleta: "EA Sports 25 es un juego de fútbol que ofrece gráficos realistas y una jugabilidad mejorada. Los jugadores pueden disfrutar de diferentes modos de juego, incluyendo partidos rápidos, torneos y modos en línea, brindando una experiencia completa para los fanáticos del fútbol.",
        stock: 20,
        destacado: false,
        caracteristicas: ["Fútbol", "Física", "Multijugador"]
    }, // Juego 2
    {
        id: 12,
        nombre: "The Legend of Zelda: Breath of the Wild",
        categoria: "Juego",
        precio: 69.99,
        imagen: "/img/juego3.jpg",
        descripcion: "Juego de aventuras en un mundo abierto con exploración y resolución de acertijos.",
        descripcionCompleta: "The Legend of Zelda: Breath of the Wild es un juego de aventuras en un mundo abierto que permite a los jugadores explorar vastos paisajes, resolver acertijos y enfrentarse a enemigos. La libertad de exploración y la interacción con el entorno hacen que cada partida sea única y emocionante.",
        stock: 10,
        destacado: true,
        caracteristicas: ["Aventura", "Mundo abierto"]
    } // Juego 3
]