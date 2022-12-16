<script>
import { store } from '../store.js';
// importo axios
import axios from 'axios';
import SearchFilm from './SearchFilm.vue';
import ImgMoviePoster from './ImgMoviePoster.vue';
import ImgTvPoster from './ImgTvPoster.vue'

export default {
    components: {
        SearchFilm,
        ImgMoviePoster,
        ImgTvPoster
    },
    props: {

    },
    data() {
        return {
            store,

        }
    }, methods: {
        getFilmData() {
            let filmUrl = store.apiFilmUrl;
            let tvUrl = store.apiTvUrl
            filmUrl += `&${store.apiNameParameter}=${store.searchNameMovie}`
            tvUrl += `&${store.apiNameParameter}=${store.searchNameMovie}`
            axios.get(filmUrl)
                .then(res => {
                    store.listMovie = res.data.results;
                }).catch(err => {
                    console.log('Errore sezione film', err);
                });
            axios.get(tvUrl)
                .then(res => {
                    store.listTv = res.data.results;
                }).catch(err => {
                    console.log('Errore sezione tv', err);
                });
        }
    }, mounted() {
        // this.getFilmData();
    }
}
</script>

<template>
    <div class="container">
        <SearchFilm @searchTitle="getFilmData" />
        
        <ImgMoviePoster :posterFilmAndTv="store.listMovie"/>

        <ImgTvPoster :posterFilmAndTv="store.listTv"/>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';

.container {
    width: 90%;
    max-width: 1000px;
    margin: 30px auto;
}
</style>