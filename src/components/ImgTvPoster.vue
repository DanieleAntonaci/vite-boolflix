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
                1.  {{ element.name }}
                <br>
                2.  {{ element.original_name }}
                <br>
                <img class="poster" :src="store.apiImgUrl + element.poster_path" :alt="element.name">
                <br>
                <img class="flag" :src="'/flag/' + element.original_language + '.png'" :alt="element.original_language">
                <br>
                4.   {{ element.vote_average }}
                <!-- bebug -->
                <hr>
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