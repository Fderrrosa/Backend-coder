class DatosUs {
    constructor(nombre, apellido, libros, mascotas) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._libros = libros;
        this._mascotas = mascotas;;
    }

    getFullName() {
        return `${this._nombre} ${this._apellido}`;
    }

    addMascota(nombreMascota) {
        this._mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this._mascotas.length;
    }

    addBook(titulo, nombreAutor) {
        this._libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames() {
        return this._libros.map( (libro) => libro.nombre)
    }
}

const libros = [
    {
        nombre: "Cometierra",
        autor: "Dolores Reyes"
    },
    {
        nombre: "Las Malas",
        autor: "Camila Sosa Villada"
    }

]

const newPerson = new DatosUs("Sofia", "Gonzales", libros ,["Perro", "Gato"])

console.log(newPerson.getFullName());
// Sofia Gonzalez
console.log("Libros- Nombre y Autor " + newPerson.getBookNames()); 
// Cometierra - Dolores Reyes / Las Malas - Camila Sosa Villada
newPerson.addBook("CAOS Nadie puede decirte quien sos", "Magalí Tajes")
console.log("Libros- Nombre y Autor " + newPerson.getBookNames()); 
// Cometierra - Dolores Reyes / Las Malas - Camila Sosa Villada / CAOS Nadie puede decirte quien sos - Magalí Tajes
console.log("Cantidad Mascotas " + newPerson.countMascotas()); 
// 2 mascotas - Perro y Gato
newPerson.addMascota('Loro');
console.log( "Cantidad Mascotas " +  newPerson.countMascotas()); 
// 3 mascotas - Perro, Gato y Loro

