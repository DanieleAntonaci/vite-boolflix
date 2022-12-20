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
            store,
        }
    }, methods: {
        getFilmData() {
            let filmUrl = store.apiFilmUrl;
            let tvUrl = store.apiTvUrl;
            let keyAndLang = store.apiKey + store.apiLang;

            if (store.searchNameMovie != '') {
                // ricerca il film
                filmUrl += `${keyAndLang}&${store.apiNameParameter}=${store.searchNameMovie}`
                tvUrl += `${keyAndLang}&${store.apiNameParameter}=${store.searchNameMovie}`
            } else {
                // mostrai i film e le serie tv popotlari
                filmUrl = store.apiPopularFilm + keyAndLang;
                tvUrl = store.apiPopularTv + keyAndLang;
            }

            // richiesta all'api per film
            axios.get(filmUrl)
                .then(res => {
                    store.listMovie = res.data.results;
                }).catch(err => {
                    console.log('Errore sezione film', err);
                });

            // richiesta all'api per serie tv
            axios.get(tvUrl)
                .then(res => {
                    store.listTv = res.data.results;
                }).catch(err => {
                    console.log('Errore sezione tv', err);
                });
        },
    }, created() {
        this.getFilmData()
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
    // position: sticky;
    // top: 0;
    // left: 0;
    z-index: 999;
    height: 50px;
    background-color: black;
    display: flex;
    justify-content: space-between;

    padding: 5px 30px;

    h1 {
        color: red;
    }
}
</style>
