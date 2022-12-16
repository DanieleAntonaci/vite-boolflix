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
                            <font-awesome-icon icon="fa-solid fa-star" v-if="Math.floor(element.vote_average / 2) >= i"/>
                        </span>
                    </div>

                    <div>
                        Overview: <span class="colorGrey"> {{ element.overview }}</span>
                    </div>}

                </div>
            </li>  
        </ul>
        
    </div>


</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';

ul {
    display: flex;
    flex-wrap: wrap;

    li {
        display: flex;
        flex-direction: column;

        position: relative;
        overflow: auto;
        // width: calc((100% / 5) - 40px);
        margin: 20px;

        .poster {
            width: 100%;
            object-fit: contain;
        }

        .descriptionFilm {
            display: none;

            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            font-size: 20px;



            .flag {
                width: 40px;
            }
        }

        &:hover .poster {
            opacity: .2;
        }

        &:hover .descriptionFilm {
            display: block;
        }
    }
}
</style>