const monFilm = new URLSearchParams(window.location.search).get("id");

const baseURL = window.location.origin;
console.log(monFilm);

const urlDetailFetch = fetch(`https://sangria-walkingstick-kit.cyclic.app/api/movies/${monFilm}`)
// const movieFetch = fetch(urlFetch);
let filmDetail="";
const filmDetailFetch = urlDetailFetch
.then(function(res) {
if (res.ok) {
return res.json();


}
})
.then((movie) => {
      if (movie.dureeTotale === movie.view){
        viewed = `<i class='bi bi-check-circle text-success'></i>`
    }else{
        viewed = `<i class='bi bi-clock-history text-danger'></i>`
    }

    toHourFilm="";
    toHourFilm=Math.floor(movie.dureeTotale/60)+"h"+(movie.dureeTotale%60)+"min";
    filmDetail =

    `
    <div class="container card my-5">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${movie.imageUrl}" class="img-fluid rounded-start " alt="film_${movie.titre}">
      </div>
      <div class="col-md-8 film_detail">
        <div class="card-body">
          <h1 class="card-title d-inline-block">${movie.titre}</h1><span class=" display-4 ms-5">${viewed}</span> 
          <p class="card-text"><strong>Réalisateur</strong>: ${movie.realisateur}</p>
          <p class="card-text"><strong>Duration</strong>: ${toHourFilm} </p>
          <p class="card-text"><strong>Date de sortie</strong>: ${movie.years}</p>
          <p class="card-text"><strong>Résumé</strong>: ${movie.description}</p>
        </div>

        <div>
            <a href="#" class="btn btn-success fs-5 mx-5">Regarder</a>
            <a href="#" class="btn btn-secondary fs-5">Bande-vidéo</a>
       
        </div>
      </div>
    </div>
  </div>

  `


document.getElementById("home").innerHTML=filmDetail;
})

.catch(function(err){
    console.log(err);
});

