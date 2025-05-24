const [metodo, entidadEID, ...opciones] = process.argv.slice(2);
const [entidad, id] = entidadEID.split('/');
var options = { method: metodo }
const nuevoProducto = {};
if (metodo === 'POST') {
    nuevoProducto.id = 0;
    nuevoProducto.title = opciones[0];
    nuevoProducto.price = opciones[1];
    nuevoProducto.description = opciones[0];
    nuevoProducto.category = opciones[2];
    nuevoProducto.image = '';
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(nuevoProducto);
}
const comando = `${entidad}${id ? '/' + id : ''}`;
fetch(`https://fakestoreapi.com/${comando}`, options)
    .then(response => {
        console.log('Status:', response.status);
        return response.json();
    })
    .then(data => console.log(data));