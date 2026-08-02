# Movie Watchlist

A simple movie search and watchlist application built with HTML, CSS, and vanilla JavaScript. The application uses the OMDb API to search for movies and allows users to save movies to a personal watchlist using the browser's local storage.

- **Live Demo:** [Movie Watchlist](https://shreyav-movie-watchlist.netlify.app/)
- **Repository:** [GitHub](https://github.com/ShreyavKumar/Movie-Watchlist)

## Features

- Search for movies by title
- View movie details including:
  - Poster
  - IMDb rating
  - Runtime
  - Genre
  - Plot
- Add movies to a watchlist
- Persist the watchlist using Local Storage
- Separate search and watchlist pages

## Built With

- HTML5
- CSS3
- JavaScript (ES6+)
- OMDb API
- Netlify (Deployment)

## How It Works

1. Enter the name of a movie in the search bar.
2. The application fetches matching movies from the OMDb API.
3. Click **Watchlist** to save a movie.
4. Saved movies are stored in your browser and can be viewed on the Watchlist page.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ShreyavKumar/Movie-Watchlist.git
```

Navigate to the project folder:

```bash
cd Movie-Watchlist
```

Open `index.html` in your browser.

No additional dependencies or build tools are required.

## API

This project uses the **OMDb API** to retrieve movie information.

https://www.omdbapi.com/

## Future Improvements

- Remove movies from the watchlist
- Display a message when no search results are found
- Loading indicator while fetching data
- Responsive improvements for smaller screens

## License

This project is intended for learning and personal use.
