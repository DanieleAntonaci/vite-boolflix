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
        <h2>Fim</h2>

        <ul>
            <li v-for="element in posterFilmAndTv">
                
                <!-- poster film -->
                <img class="poster" :src="store.apiImgUrl + element.poster_path" :alt="element.title">
                
                <!-- titolo -->
                <div>
                    {{ element.title }}
                </div> 
                
                <!-- titolo originale -->
                <div>
                    {{ element.original_title }}
                </div>
                
                <!-- bandiera -->
                <img class="flag" :src="'/flag/' + element.original_language + '.png'" :alt="element.original_language">
                
                <!-- voto -->
                <div>
                    {{ element.vote_average }}
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

        width: calc((100% / 5) - 40px);
        margin: 20px;

        .poster {
            width: 100%;
            object-fit: contain;
        }

        .flag {
            width: 50px;
        }
    }
}
</style>