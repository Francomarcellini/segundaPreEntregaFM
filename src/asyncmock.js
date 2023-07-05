const misProductos = [
    { id: "1", nombre: "Vulpix", precio: 2500, stock:4, img: "../img/vulpix.jpg", idCat: "2" },
    { id: "2", nombre: "Alakazam", precio: 3000, stock:10, img: "../img/alakazam.jpg", idCat: "2" },
    { id: "3", nombre: "Soporte celu ", precio: 5000, stock:5, img: "../img/soporte.jpeg", idCat: "3" },
    { id: "4", nombre: "Bandeja", precio: 3500, stock:10, img: "../img/bandeja.jpeg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Creamos una nueva función similar a la anterior pero qu enos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una función que retora un array de una determinada categoría de producto: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}