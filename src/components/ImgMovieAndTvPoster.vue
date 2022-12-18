<script>
import { store } from '../store';
import Cards from './Cards.vue';

export default {
    props: {
        posterFilmAndTv: Object
    },
    data() {
        return {
            store,
            // elenco bandiere in public
            flag: ["en", "fr", "it", "ja"],
            tipeOfProgram: '',
            titleOfElement: '',
            titleOriginalOfElement: '',
        };
    },
    methods: {
        SerieTvOFilm() {
            if (store.listMovie == this.posterFilmAndTv) {
                this.tipeOfProgram = 'Film'

            } else {
                this.tipeOfProgram = 'Serie Tv';
            }
        }
    },
    components: { Cards },
    mounted() {
        this.SerieTvOFilm()
    }
}
</script>

<template>
    <div>
        <h2>{{ tipeOfProgram }}</h2>

        <ul class="card">
            <Cards  v-for="element in posterFilmAndTv"
            :title="element.name ? element.name : element.title"
            :originalTitle="element.original_name ? element.original_name : element.original_title"
            :poster="store.apiImgUrl + element.poster_path"
            :language="element.original_language"
            :overview="element.overview"
            :voteAvarage="element.vote_average"/>
        </ul>
        
    </div>


</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';

h2 {
    text-align: center;
}
</style>