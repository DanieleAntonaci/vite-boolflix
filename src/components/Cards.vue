<script>
import { store } from '../store'
import StarOverview from './StarOverview.vue';
import Flag from './Flag.vue';
import Actor from './Actor.vue';

export default {
    props: {
        title: String,
        originalTitle: String,
        poster: String,
        language: String,
        overview: String,
        voteAvarage: Number,
        idFilm: Number,
    },
    data() {
        return {
            store,
            flag: ["en", "fr", "it", "ja"],
        };
    },
    components: { StarOverview, Flag, Actor }
}
</script>

<template>

<li>
    <!-- img poster -->
    <div>
        <img class="poster" :src="poster" :alt="title" onerror="this.src='./public/not-found-img.jpeg'">
        <!-- <img src="/public/not-found-img.jpeg" v-else alt="ss"> -->

    </div>
    <div class="descriptionFilm">
        <!-- titolo --> 
        <div>
            Titolo: <span class="colorGrey">{{ title }}</span>
        </div> 
        
        <!-- titolo originale -->
        <div  v-show="title != originalTitle">
            Titolo original_title: <span class="colorGrey">{{ originalTitle }}</span>
        </div>

        <!-- <Actor :id="idFilm"/> -->

        <!-- bandiera -->
        <Flag 
            :lang="language"
            :flags="flag"
        />
        
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
@use '../style/partials/mixin';
@use '../style/partials/variables';

.emptyImg {
    width: 342;
    height: 513px;
}
</style>