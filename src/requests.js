const API_KEY = "67d7a51db285feb1d2606724117d03c9";

const requests = {
    fetchTrending:`trending/all/week?api_key=${API_KEY}&langueage=en-US`,
    fetchNetglixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rate?api_key=${API_KEY}&langueage=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumntaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,

};

export default requests;