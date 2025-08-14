const accesKey = 'EYCeIyKrp8ec99vU6_gDru36n6mFyaupqkWDHW71fpU'
const URL = 'https://api.unsplash.com/search/photos?query=${consulta}r&client_id=${key}'

const button = document.getElementById('btn-search')
const form = document.getElementById('miFormulario')
const div = document.getElementById('resultados-imagenes')
const input = document.getElementById('input-busqueda')


button.addEventListener('click',buscarImagenes)

function buscarImagenes(){

    div.innerHTML=""
    const consulta = input.value

    fetch(`https://api.unsplash.com/search/photos?query=${consulta}&client_id=${accesKey}`)
    .then(res => res.json())
    .then(imagenes => {
        console.log(imagenes)
        imagenes.results.forEach((imagen)=>{
            const img = document.createElement('img')
            img.setAttribute('src',imagen.urls.raw)
            img.setAttribute('alt',imagen.alt_description)
            console.log(img)
            div.append(img)
        })
    })
}