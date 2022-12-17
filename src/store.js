import { reactive } from 'vue';


export const store = reactive({
    listMovie: [],
    listTv: [],
    apiFilmUrl: 'https://api.themoviedb.org/3/search/movie?api_key=f2dd65c246c2c5025da163d72094519d&language=it-IT',
    apiTvUrl: 'https://api.themoviedb.org/3/search/tv?api_key=f2dd65c246c2c5025da163d72094519d&language=it-IT',
    apiPopularFilm: 'https://api.themoviedb.org/3/trending/movie/week?api_key=f2dd65c246c2c5025da163d72094519d&language=it-IT',
    apiPopularTv: 'https://api.themoviedb.org/3/trending/tv/week?api_key=f2dd65c246c2c5025da163d72094519d&language=it-IT',
    apiNameParameter: 'query',
    searchNameMovie: '',
    apiImgUrl: "https://image.tmdb.org/t/p/w342",
})