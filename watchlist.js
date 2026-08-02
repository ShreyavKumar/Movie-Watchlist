let myWatchlist = []
const movieList = document.getElementById('movie-list')

async function renderWatchlist() {
    myWatchlist = JSON.parse(localStorage.getItem('movie'))
    console.log(myWatchlist)
    let movieListHtml = ''
    for(let id of myWatchlist) {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=8d8863ad`)
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
                        <button class="watchlist-btn" data-movie-id="${data.imdbID}">
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



renderWatchlist()