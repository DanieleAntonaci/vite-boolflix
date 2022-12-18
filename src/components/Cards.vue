<script>
import { store } from '../store'
import StarOverview from './StarOverview.vue';
export default {
    props: {
        titolo: String,
        originalTitle: String,
        poster: String,
        language: String,
        overview: String,
        voteAvarage: Number
    },
    data() {
        return {
            store,
            flag: ["en", "fr", "it", "ja"],
        };
    },
    components: { StarOverview }
}
</script>

<template>

<li>
    <!-- img poster -->
    <img class="poster" :src="poster" :alt="titolo">
        
    <div class="descriptionFilm">
        <!-- titolo --> 
        <div>
            Titolo: <span class="colorGrey">{{ titolo }}</span>
        </div> 
        
        <!-- titolo originale -->
        <div  v-show="titolo != originalTitle">
            Titolo original_title: <span class="colorGrey">{{ originalTitle }}</span>
        </div>

        <!-- bandiera -->
        <img class="flag" :src="'/flag/flag-' + language + '.png'" :alt="language" v-if="flag.includes(language)">
        <img class="flag" src="/flag/flag-rainbow.png" v-else alt="Generic flag">
        
        <!-- voto -->
        <div>
            <StarOverview  v-for="i in 5"
            :vote="voteAvarage"
            :numStars="i"
            />
        </div>

        <!-- recensione -->
        <div>
            Overview: <span class="colorGrey"> {{ overview }}</span>
        </div>

    </div>
</li>  

</template>

<style lang="scss">

</style>