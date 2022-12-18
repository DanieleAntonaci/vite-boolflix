import { reactive } from 'vue';


export const store = reactive({
    listMovie: [],
    listTv: [],
    apiFilmUrl: 'https://api.themoviedb.org/3/search/movie?',
    apiTvUrl: 'https://api.themoviedb.org/3/search/tv?',
    apiPopularFilm: 'https://api.themoviedb.org/3/trending/movie/week?',
    apiPopularTv: 'https://api.themoviedb.org/3/trending/tv/week?',
    apiNameParameter: 'query',
    searchNameMovie: '',
    apiImgUrl: "https://image.tmdb.org/t/p/w342",
    apiKey: 'api_key=f2dd65c246c2c5025da163d72094519d',
    apiLang: '&language=it-IT'

})