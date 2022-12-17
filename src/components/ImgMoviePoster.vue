<script>
import { store } from '../store'
export default {
    props: {
        posterFilmAndTv: Object
    },
    data() {
        return {
            store,
            flag: ['en', 'fr', 'it', 'ja'],

        }
    },
    methods: {

    },
}
</script>

<template>
    <div>
        <h2>Fim</h2>

        <ul class="card">
            <li v-for="element in posterFilmAndTv">
                
                <!-- poster film -->
                <img class="poster" :src="store.apiImgUrl + element.poster_path" :alt="element.title">
                
                <!-- elementi che si devono vedere solo all'hover -->
                <div class="descriptionFilm">
                    <!-- titolo -->
                    <div>
                        Titolo: <span class="colorGrey">{{ element.title }}</span>
                    </div> 
                    
                    <!-- titolo originale -->
                    <div v-show="element.title != element.original_title">
                        Titolo original_title: <span class="colorGrey">{{ element.original_title }}</span>
                    </div>
                    
                    <!-- bandiera -->
                    <img class="flag" :src="'/flag/' + element.original_language + '.png'" :alt="element.original_language" v-if="flag.includes(element.original_language)">
                    <img class="flag" src="/flag/rainbow.png" v-else alt="">

                    <!-- voto -->
                    <div >
                        Voto:
                        <span v-for="i in 5" :key="i" >
                            <font-awesome-icon icon="fa-solid fa-star" v-if="Math.ceil(element.vote_average / 2) >= i" :style="{ color: 'yellow' }"/>
                            <font-awesome-icon icon="fa-solid fa-star" v-else/>
                           
                        </span>

                    </div>
                    
                    <div>
                        Overview: <span class="colorGrey"> {{ element.overview }}</span>
                    </div>
                </div>
            </li>  
        </ul>
        
    </div>


</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';
</style>