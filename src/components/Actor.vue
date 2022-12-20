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
            arrayActor: [],
        }
    },
    methods: {
        getActorName() {
            this.arrayActor = [];

            let urlActorMovie = `${store.apiActorName}movie/${this.id}/credits?${store.apiKey}${store.apiLang}`
            let urlActorTv = `${store.apiActorName}tv/${this.id}/credits?${store.apiKey}${store.apiLang}`

            // richiesta per i film 
            axios.get(urlActorMovie)
                .then(res => {
                    this.arrayActor = res.data.cast;

                }).catch(err => {
                    console.log('sbagliato', err);
                });

            // richiesta per le serie tv
            axios.get(urlActorTv)
                .then(res => {
                    this.arrayActor = res.data.cast;

                }).catch(err => {
                    console.log('sbagliato', err);
                })
        }

    },
    created() {
        this.getActorName()
    }
}
</script>
<template>
<div>
    Attori: 
    <span v-for="(actor, index) in arrayActor">
        <span class="colorGrey" v-if="index < 5">

            {{ actor.name }} {{ index < 4 ? ', ' : '' }}
        </span>
    </span>
</div>

</template>

<style lang="scss">
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;
</style>