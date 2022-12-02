const urlFetch = "http://localhost:3000/api/movies"
const movieFetch = fetch(urlFetch);
let addfilm="";
movieFetch
.then(function(res) {
if (res.ok) {
return res.json();


}
})
.then(function(data) {
    data.forEach(movie => {
       
            toHourFilm="";
            toHourFilm=Math.floor(movie.dureeTotale/60)+"h"+(movie.dureeTotale%60)+"min";
        
        
            addfilm +=
            `<div class="col-sm-12 col-md-4 card mx-auto mb-5 " style="width:25em">
            <img src="${movie.imageUrl}" class="card-img-top" alt="${movie.titre}">
            <div class="card-body">
                <h5 class="card-title">${movie.titre}</h5>
                <p class="card-text">${movie.description}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"> Réalisateur: ${movie.realisateur}</li>
            <li class="list-group-item">Duration: ${toHourFilm} 
             <i class="bi bi-play-circle ps-1"></i>    Temps regardé: ${movie.view} min </li>
            <li class="list-group-item"> Visonné: ${Math.floor((movie.view/movie.dureeTotale)*100)}%</li>
            <li class="list-group-item">Année: ${movie.years}</li>
            </ul>
            <div class="card-body">
                <a href="videotheque_fiche_film.html?id=${movie._id}" class="card-link-play btn btn-success text-decoration-none text-light">Regarder</a>
                <a href="#" class="card-link  btn btn-secondary text-decoration-none text-light">Télécharger</a>
                <span id="listFilms"></span>
            </div>    
        </div>`

        
         
        
        document.getElementById("parent").innerHTML=addfilm;
   
    })
})

.catch(function(err){
    console.log(err);
});