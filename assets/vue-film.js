const listFilms = document.getElementById("listFilms")
const elementCreation = () =>{
for (let movie of movies){
    if (movie.alreadyView ===true){
        viewed = "<i class='bi bi-check-circle text-success'></i>"
    }else{
        viewed = "<i class='bi bi-clock-history text-danger'></i>"
    }
}
}