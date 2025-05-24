const [metodo, entidadEId, ...opciones] = process.argv.slice(2);

const [entidad, id] = entidadEId.split('/');

var options = { method: metodo }

const nuevoProducto = {};

if (metodo == 'POST') {
    //solo si es un POST, se crea el producto
    nuevoProducto.id = 0;
    nuevoProducto.title = opciones[0];
    nuevoProducto.price = opciones[1];
    nuevoProducto.description = opciones[0];
    nuevoProducto.category = opciones[2];
    nuevoProducto.image = '';

    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(nuevoProducto);
}

var comando  = '';

if(id!=undefined){
    comando = `${entidad}/${id}`;
}else{
    comando = `${entidad}`;
};

console.log(`Comando: ${comando}`);

fetch(`https://fakestoreapi.com/${comando}`, options)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.dir(data, { depth: null, colors: true }); //para que muestre todo si se usa users o cards
    });