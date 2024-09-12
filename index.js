let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let loading = document.getElementById("spinner");

function showAJoke() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    }
    loading.classList.remove("d-none");
    jokeText.classList.add("d-none");
    fetch(url, options).then(function(response) {
        return response.json()
    }).then(function(jsonData) {
        loading.classList.add("d-none");
        jokeText.classList.remove("d-none");
        jokeText.textContent = jsonData.value;
    });

}

jokeBtn.addEventListener("click", showAJoke);
