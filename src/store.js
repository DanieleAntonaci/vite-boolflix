import { reactive } from 'vue';


export const store = reactive({
    // array dei film e serie tv
    listMovie: [],
    listTv: [],

    // array degli attori
    arrayActor: [],

    // link per l'api film
    apiFilmUrl: 'https://api.themoviedb.org/3/search/movie?',

    // link per l'api serie tv
    apiTvUrl: 'https://api.themoviedb.org/3/search/tv?',

    // link per l'api film popolari
    apiPopularFilm: 'https://api.themoviedb.org/3/trending/movie/week?',

    // link per l'api serie tv popolari
    apiPopularTv: 'https://api.themoviedb.org/3/trending/tv/week?',

    // link per richiamare gli attori
    apiActorName: 'https://api.themoviedb.org/3/',

    // comp.link ricerca film
    apiNameParameter: 'query',

    // titolo di film che viene cercato collegato ad input nell'header
    searchNameMovie: '',

    // link per l'api dell'immagine
    apiImgUrl: "https://image.tmdb.org/t/p/w342",

    // comp.link mio riferimento all'api-key
    apiKey: 'api_key=f2dd65c246c2c5025da163d72094519d',

    // comp.link lingua selezionata
    apiLang: '&language=it-IT'

})