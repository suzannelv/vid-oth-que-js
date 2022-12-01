const monFilm = new URLSearchParams(window.location.search).get("id");

const baseURL = window.location.origin;
console.log(monFilm);
// console.log(movies);

const rechercheId = (movie)=>{
    return movie._id == monFilm;
}
// console.log(movies.find(rechercheId));
// let ficheFilm = movies.find(rechercheId)