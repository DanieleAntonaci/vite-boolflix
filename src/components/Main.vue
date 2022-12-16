<script>
import { store } from '../store.js';
// importo axios
import axios from 'axios';
import SearchFilm from './SearchFilm.vue';
import ImgMoviePoster from './ImgMoviePoster.vue';

export default {
    components: {
        SearchFilm,
        ImgMoviePoster
    }, props: {

    },
    data() {
        return {
            store,

        }
    }, methods: {
        getFilmData() {
            let myUrl = store.apiUrl;
            myUrl += `&${store.apiNameParameter}=${store.searchNameMovie}`
            axios.get(myUrl)
                .then(res => {
                    store.listMovie = res.data.results;
                })
                .catch(
                    err => {
                        console.log('Errore', err);
                    }
                )
        }
    }, mounted() {
        // this.getFilmData();
    }
}
</script>

<template>
    <div>
        <SearchFilm @searchTitle="getFilmData" />
        
        <ImgMoviePoster :posterFilm="store.listMovie"/>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';
</style>