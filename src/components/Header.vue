<script>
import { store } from '../store.js';
import axios from 'axios';
import SearchFilm from './SearchFilm.vue';
export default {
    components: {
        SearchFilm,
    },
    data() {
        return {
            store
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
    }
}

</script>

<template>
    <div>
        <h1>BOOLFLIX</h1>

        <SearchFilm @searchTitle="getFilmData" />
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

div {
    background-color: black;
    display: flex;
    justify-content: space-between;

    padding: 10px;

    h1 {
        color: red;
    }
}
</style>
