<script>
import { store } from '../store'
export default {
    props: {
        posterFilmAndTv: Object
    },
    data() {
        return {
            store,
            flag: ['en', 'fr', 'it', 'ja']
        }
    },
}
</script>

<template>
    <div>
        <h2>Serie tv</h2>
        <ul>
            <li v-for="element in posterFilmAndTv">
                <img class="poster" :src="store.apiImgUrl + element.poster_path" :alt="element.name">
                 
                <div class="descriptionFilm">
                    <!-- titolo --> 
                    <div>
                        {{ element.name }}
                    </div> 
                    
                    <!-- titolo originale -->
                    <div>
                        {{ element.original_title }}
                    </div>

                    <!-- bandiera -->
                    <img class="flag" :src="'/flag/' + element.original_language + '.png'" :alt="element.original_language" v-if="flag.includes(element.original_language)">
                    <img class="flag" src="/flag/rainbow.png" v-else alt="">
                    
                    <!-- voto -->
                    <div>
                        {{ element.vote_average }}
                    </div>

                    <div>
                        {{ element.overview }}
                    </div>}

                </div>
            </li>  
        </ul>
        
    </div>


</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';

li {
    .poster {
        height: 150px;
    }

    .flag {
        width: 50px;
    }
}
</style>