<script>
import { store } from '../store.js';
// importo axios
import axios from 'axios';
import SearchFilm from './SearchFilm.vue';

export default {
    components: {
        SearchFilm,
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
        
        <div v-for="element in store.listMovie">
        {{ element.title }}
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';
</style>