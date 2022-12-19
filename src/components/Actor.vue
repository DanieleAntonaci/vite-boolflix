<script>
import axios from 'axios';
import { store } from '../store'
export default {
    props: {
        id: Number
    },
    data() {
        return {
            store,
            arrayActor: []
        }
    },
    methods: {
        getActorName() {
            this.arrayActor = [];
            let urlActor = `https://api.themoviedb.org/3/movie/19995/credits?api_key=f2dd65c246c2c5025da163d72094519d&language=it`
            // let urlActor = `${store.apiActorName}movie/${this.id}/credits?${store.apiKey}${store.apiLang}`
            console.log(urlActor);
            axios.get(urlActor).then(res => {
                for (let i = 0; i < 5; i++) {
                    this.arrayActor += res.data.cast[i].name;
                }

            }).catch(err => {
                console.log('sbagliato');
            })
        }

    },
    mounted() {
        this.getActorName()
    }
}
</script>
<template>
<div>
    Attori: 
    <span v-for="actor in arrayActor">
        {{ actor }}
    </span>
</div>

</template>

<style lang="scss">
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;
</style>