<script>
import { store } from '../store.js';
import ImgMoviePoster from './ImgMoviePoster.vue';
import ImgTvPoster from './ImgTvPoster.vue'

export default {
    components: {
        // SearchFilm,
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

    }, mounted() {

    }
}
</script>

<template>
    <div class="container">
        
        <ImgMoviePoster :posterFilmAndTv="store.listMovie"/>

        <ImgTvPoster :posterFilmAndTv="store.listTv"/>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';

.container {
    width: 90%;
    margin: 30px auto;
}
</style>