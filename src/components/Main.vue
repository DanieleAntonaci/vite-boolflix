<script>
import { store } from '../store.js';
import ImgMovieAndTvPoster from './ImgMovieAndTvPoster.vue';

export default {
    components: {
        // SearchFilm,
        ImgMovieAndTvPoster,

    },
    props: {

    },
    data() {
        return {
            store,

        }
    }
}
</script>

<template>
    <div class="container">
        
        <!-- lista film -->
        <ImgMovieAndTvPoster :posterFilmAndTv="store.listMovie"/>

        <!-- lista serie tv -->
        <ImgMovieAndTvPoster :posterFilmAndTv="store.listTv"/>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';
</style>