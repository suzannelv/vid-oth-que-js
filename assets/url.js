const monFilm = new URLSearchParams(window.location.search).get("id");

const baseURL = window.location.origin;
console.log(monFilm);

const urlDetailFetch = fetch(`http://localhost:3000/api/movies/${monFilm}`)
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
    `<section id="home" class="d-flex min-vh-100 d-flex align-items-center text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 data-aos="fade-left" class="text-uppercase text-white fw-semibold display-1">Envie de regarder${movie.titre}?</h1>
          <h5 class="text-white mt-3 mb-4" data-aos="fade-right" >Découvrez les nouveautés du moment</h5>
          <div>
            <a href="#" class="btn btn-brand me-2">Regarder</a>
            <a href="#" class="btn btn-light ms-2">Bande-vidéo</a>
          </div>
        </div>
      </div>
    </div>
  </section>

<section>
  <div class="card text-bg-dark">
  <img src="./img/${movie.imageUrl}" class="card-img " alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">${movie.titre}</h5>
    <p class="card-text">${movie.realisateur}.</p>
    <p class="card-text">${movie.dureeTotale}.</p>
    <p class="card-text">${movie.years}.</p>
    <p class="card-text">${movie.description}.</p>
  </div>
</div>
</section>
  `

let bg = document.getElementById("home")
bg.style.backgroundImage=`url(${movie.bgImage})`
bg.classList.add("text-center", "min-vh-100",  "align-items-center")
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