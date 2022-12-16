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
            avaregeFiveNum: 0
        }
    },
    methods: {

    },
}
</script>

<template>
    <div>
        <h2>Fim</h2>

        <ul>
            <li v-for="element in posterFilmAndTv">
                
                <!-- poster film -->
                <img class="poster" :src="store.apiImgUrl + element.poster_path" :alt="element.title">
                
                <!-- elementi che si devono vedere solo all'hover -->
                <div class="descriptionFilm">
                    <!-- titolo -->
                    <div>
                        {{ element.title }}
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
                        <span >
                            <font-awesome-icon icon="fa-solid fa-star" v-if="starElement"/>
                            <!-- <font-awesome-icon icon="fa-regular fa-star" /> -->
                        </span>
                        {{ Math.floor(element.vote_average / 2) }}
                    </div>

                    <div>
                        {{ element.overview }}
                    </div>
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
                width: 50px;
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