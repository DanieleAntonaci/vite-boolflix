<script>
import { store } from '../store.js';
// importo axios
import axios from 'axios';
export default {
    data() {
        return {
            store,
            searchNameMovie: ''
        }
    }, methods: {
        getFilmData() {
            let myUrl = store.apiUrl;
            myUrl += `&${store.apiNameParameter}=${this.searchNameMovie}`
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
        <input type="text" v-model="searchNameMovie" @keypress.enter="getFilmData">
        <button @click="getFilmData" >Search</button>
        <div v-for="element in store.listMovie">
        {{ element.title }}
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';
</style>