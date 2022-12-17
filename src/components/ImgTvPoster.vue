<script>
import { store } from '../store'
export default {
    props: {
        posterFilmAndTv: Object
    },
    data() {
        return {
            store,
            // elenco bandiere in public
            flag: ['en', 'fr', 'it', 'ja'],
        }
    },
}
</script>

<template>
    <div>
        <h2>Serie tv</h2>
        
        <ul class="card">

            <li v-for="element in posterFilmAndTv">
                <!--  -->
                <img class="poster" :src="store.apiImgUrl + element.poster_path" :alt="element.name">
                 
                <div class="descriptionFilm">
                    <!-- titolo --> 
                    <div>
                        Titolo: <span class="colorGrey">{{ element.name }}</span>
                    </div> 
                    
                    <!-- titolo originale -->
                    <div  v-show="element.name != element.original_name">
                        Titolo original_title: <span class="colorGrey">{{ element.original_name }}</span>
                    </div>

                    <!-- bandiera -->
                    <img class="flag" :src="'/flag/' + element.original_language + '.png'" :alt="element.original_language" v-if="flag.includes(element.original_language)">
                    <img class="flag" src="/flag/rainbow.png" v-else alt="">
                    
                    <!-- voto -->
                    <div>
                        <span v-for="i in 5" :key="i">
                            <font-awesome-icon icon="fa-solid fa-star" v-if="Math.ceil(element.vote_average / 2) >= i" :style="{ color: 'yellow' }"/>
                            <font-awesome-icon icon="fa-solid fa-star" v-else/>
                        </span>
                    </div>

                    <!-- recensione -->
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