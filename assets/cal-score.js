let scores = document.querySelectorAll(".score");

for (let score of scores) {
    score.onclick = (event) => {
        event.target.classList.add("active")
    }
    if (score.classList.contains("active")){
        score.onclick=(event) => {
            event.target.classList.remove("active")
        }
}
}

let like = document.querySelector (".bi-bookmark-fill")

like.onclick = (event) => event.target.classList.add("like")