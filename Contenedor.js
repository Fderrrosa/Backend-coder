const fs = require('fs');


class Contenedor {
    constructor (productos) {
        this.ruta = productos
        console.log("prueba");
    }
}



    getAll = async () => {
        try {
            const stock = await promises.readFile(this.ruta, 'utf-8')
            
            return JSON.parse(stock);

        } catch (error) {
            await promises.writeFile(this.ruta, JSON.stringify([], null, 1))
            const stock = await promises.readFile(this.ruta, 'utf-8')
            
            return JSON.parse(stock);
        }
    }

    saveProducto = async producto => {
        const arrProductos = await this.getAll()

        arrProductos.push(producto);

        try {
            await promises.writeFile(this.ruta, JSON.stringify(arrProductos, null, 4))
            return producto.id
        } catch (error) {
            throw new Error('No se guardó el producto')
        }
    }

    getById = async id => {
        const arrProductos = await this.getAll()
        const productoBuscado = arrProductos.find( p => p.id === id);

        return productoBuscado;

    }

    deleteById = async id => {
        const arrProductos = await this.getAll()
        const productoBorrado = arrProductos.filter(p => p.id !== id)

        try {
            await promises.writeFile(this.ruta, JSON.stringify(productoBorrado, null, 1))
        } catch (error) {
            throw new Error('No se pudo actualizar', error)
        }
    }

    deleteAll = async () => {
        return await promises.writeFile(this.ruta, JSON.stringify([], null, 2))
    }



const db = new Contenedor('productos.txt')

const test = async () => {    
    console.log(await db.saveProducto({ name: "Reloj", price: "15.000", photo: "https://res.cloudinary.com/dngbc9awr/image/upload/v1661611420/samples/ecommerce/analog-classic.jpg", id: 1 }))
    console.log(await db.getAll())
    console.log(await db.getById(3))
    console.log(await db.deleteById(1))
    await db.deleteAll()
}

test()

//export default Contenedor;
