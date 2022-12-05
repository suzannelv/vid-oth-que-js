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
    toHourFilm="";
    toHourFilm=Math.floor(movie.dureeTotale/60)+"h"+(movie.dureeTotale%60)+"min";
    filmDetail =

    `
    <div class="container-fluid">
    
        <div class="">
          <h1 data-aos="fade-left" class="text-uppercase text-warning fw-semibold display-1">Envie de regarder ${movie.titre}?</h1>
          <h5 class="text-warning  mt-3 mb-4" data-aos="fade-right" >Découvrez les nouveautés du moment</h5>
          <div>
            <a href="#" class="btn btn-brand me-2">Regarder</a>
            <a href="#" class="btn btn-light ms-2">Bande-vidéo</a>
          </div>
        </div>
   
    </div>


  
  <div class=" text-dark">
    <h5 class="card-title">${movie.titre}</h5>
    <p class="card-text">${movie.realisateur}.</p>
    <p class="card-text">${movie.dureeTotale}.</p>
    <p class="card-text">${movie.years}.</p>
    <p class="card-text">${movie.description}.</p>
  </div>
 </div>

  `

let bg = document.getElementById("home")
bg.style.backgroundImage=`url("${movie.bgImage}")`;
bg.style.backgroundRepeat = "no-repeat"
bg.style.backgroundSize = "contain"
bg.style.backgroundPosition = "center"
bg.classList.add("text-center", "min-vh-100",  "min-vw-100", "align-items-center")
document.getElementById("home").innerHTML=filmDetail;
})

.catch(function(err){
    console.log(err);
});

// console.log(movies);

// const rechercheId = (movie)=>{
//     return movie._id == monFilm;
// }
// console.log(movies.find(rechercheId));
// let ficheFilm = movies.find(rechercheId)