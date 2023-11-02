function agregarPelicula() {
    const pelicula = document.getElementById('pelicula').value.trim();
    const btn = document.getElementById('btn');
    const listaPeliculas = document.getElementById('listaPeliculas');


    if (pelicula === '') {
        btn.disabled= true;
    }else{
        btn.disabled = false;

        const contenedor = document.createElement('div');
        contenedor.classList.add('pelicula');
        listaPeliculas.appendChild(contenedor)

        const imgPelicula = document.createElement('img');
        // contenedor.classList.add('imagenes');
        imgPelicula.src = pelicula;
        contenedor.appendChild(imgPelicula);

        listaPeliculas.appendChild(contenedor);
    }
    document.getElementById('pelicula').value = '';

    /*
        esta fue la forma en que nos enseñaron en la clase
    */
    // let lista = document.getElementById('listaPeliculas');
    // lista.innerHTML = '<img src=' +pelicula+'>';
    // lista++;
    
}