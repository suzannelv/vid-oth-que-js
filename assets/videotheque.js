
// let remplacement=/ /gi;
// class Films {
//     constructor( title, filmMaker, timeWatchedMinute, view, description, image, years )

//     {this.title = title;
//     this.filmMaker = filmMaker;
    
//     this.timeWatchedMinute = timeWatchedMinute;
//     this.view = view;
//     this.description = description;
//     this.image = image;
//     this.years = years; 
//     this._id = title
//                     .toLowerCase()
//                     .replace(remplacement, "_")
//                     .replace(":", "")
//     this.photo = `${this._id}.jpg`
// }
//     // créer une fonction pour vérifier si le film a été visionné en entier 
//     get alreadyView(){
//         if (this.timeWatchedMinute === this.view){
//             return true
//         }else{
//             return false
//         }
//     }
// }
/*
const movies=[
    new Films ("La Ligne verte", "Frank Darabont", 189, 20, "Paul Edgecomb, Gardien-chef du pénitencier de Cold Mountain en 1935, était chargé de veiller au bon déroulement des exécutions capitales.", "./img/la_ligne_verte.jpg", 2014),
    new Films ("Forrest Gump", " Robert Zemeckis", 140, 40,"Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.", "./img/Forrest_Gump.jpg", 1998),
    new Films ("La Liste de Schindler", " Steven Spielberg", 195,54,  "Evocation des années de guerre d'Oskar Schindler, industriel autrichien rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique.", "./img/La_Liste_de_Schindler.jpg", 2005),

    new Films ("12 hommes en colère", "Sidney Lumet", 95,85, "Lors d'un procès, un juré émet l'hypothèse que l'homme qu'il doit juger n'est peut-être pas coupable. Il va tenter de convaincre les onze autres jurés.", "./img/12_hommes_en_colère.jpg", 2007),
    new Films ("Le Parrain", " Francis Ford Coppola", 175, 100,"En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone marie sa fille à un bookmaker. Sollozzo, 'parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue...", "./img/le_parrain_trilogie.jpg", 2015),
    new Films ("Les Evadés", "Frank Darabont", 142,142, "Condamné à perpétuité pour le meurtre de sa femme et de son amant, un banquier s'accroche à l'espoir et se lie d'amitié avec un autre détenu pour survivre en prison.", "./img/Les_Evadés.jpg", 2018)
]*/





// let addfilm="";

// for (let movie of movies){

//     toHourFilm=""
//     toHourFilm=Math.floor(movie.timeWatchedMinute/60)+"h"+(movie.timeWatchedMinute%60)+"min";


//     addfilm +=
//     `<div class="col-sm-12 col-md-4 card mx-auto mb-5 " style="width:25em">
//     <img src="${movie.image}" class="card-img-top " alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${movie.title}</h5>
//         <p class="card-text">${movie.description}</p>
//     </div>
//     <ul class="list-group list-group-flush">
//     <li class="list-group-item"> Réalisateur: ${movie.filmMaker}</li>
//     <li class="list-group-item">Duration: ${toHourFilm} 
//      <i class="bi bi-play-circle ps-1"></i>    Temps regardé: ${movie.view} min </li>
//     <li class="list-group-item"> Visonné: ${Math.floor((movie.view/movie.timeWatchedMinute)*100)}%</li>
//     <li class="list-group-item">Année: ${movie.years}</li>
//     </ul>
//     <div class="card-body">
//         <a href="videotheque_page2.html?id=${movie._id}" class="card-link-play btn btn-success text-decoration-none text-light">Regarder</a>
//         <a href="#" class="card-link  btn btn-secondary text- 
        
//         00000decoration-none text-light">Télécharger</a>
//         <span id="listFilms"></span>
//     </div>    
// </div>`
//     // function toHourFilm(minutes){
//     //     return (Math.floor(minutes/60)+"h"+(minutes%60)+"min");
//     // }
//     // toHourFilm(movie.timeWatchedMinute)
//     // console.log(toHourFilm(movie.timeWatchedMinute))

// }


// document.getElementById("parent").innerHTML=addfilm 