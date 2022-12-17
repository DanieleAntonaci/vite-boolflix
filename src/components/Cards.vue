<script>
import { store } from '../store'
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
        }
    },
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
        <img class="flag" :src="'/flag/' + language + '.png'" :alt="language" v-if="flag.includes(language)">
        <img class="flag" src="/flag/rainbow.png" v-else alt="">
        
        <!-- voto -->
        <div>
            <span v-for="i in 5" :key="i">
                <font-awesome-icon icon="fa-solid fa-star" v-if="Math.ceil(voteAvarage / 2) >= i" :style="{ color: 'yellow' }"/>
                <font-awesome-icon icon="fa-solid fa-star" v-else/>
            </span>
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