let movieSearchResults = []
const searchBarForm = document.getElementById('search-bar-form')
const searchBar = document.getElementById('search-bar')
const movieList = document.getElementById('movie-list')

searchBarForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const movieName = searchBar.value
    getSearchResults(movieName)
})

async function getSearchResults(movieName) {
    const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=8d8863ad`)
    const data = await response.json()
    movieSearchResults = data.Search
    console.log(data.Search)
    getEachMoviePlate(movieSearchResults)
}

async function getEachMoviePlate(movieSearchResults) {
    let movieListHtml = ''
    for(let movie of movieSearchResults) {
        const res = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=8d8863ad`)
        const data = await res.json()
        movieListHtml += `
            <div class="movie-plate">
                <img loading="lazy" src="${data.Poster}">
                <div class="movie-description">
                    <div class="movie-title">
                        <h2>${data.Title}</h2>
                        <p class="movie-rating-icon"><i class="fa-solid fa-star"></i> ${data.imdbRating}</p>
                    </div>
                    <div class="movie-info">
                        <p class="movie-runtime">${data.Runtime}</p>
                        <p class="movie-genres">${data.Genre}</p>
                        <button class="watchlist-btn">
                            <span class="icon">
                                <i class="fa-solid fa-circle-plus"></i>
                            </span>
                            <span>Watchlist</span>
                        </button>
                    </div>
                    <p class="movie-plot">${data.Plot}</p>
                </div>
            </div>
        `
    }
    movieList.innerHTML = movieListHtml
}