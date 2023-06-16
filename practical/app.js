const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
var IMGPATH = "https://image.tmdb.org/t/p/w1280";
var SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



    
var moiveBox = document.querySelector("#movie-box")
var getMovies = async (url) => {
    var response = await fetch(url)
    var data = await response.json()
// console.log(data)
    showMovies(data)
}
getMovies(APIURL);


var showMovies = (data) => {
    moiveBox.innerHTML = "";
    // console.log(data)
    data.results.forEach(
        (result) => {
            var imagePath = result.poster_path === null ? "" : IMGPATH + result.poster_path;
            
            var box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            moiveBox.appendChild(box)
        }
    )
}

document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL);
        }
    }
)