<script>
import { store } from '../store.js';
export default {
    props: {
        searchNameMovie: String
    }, data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div>
        <input type="text" @keypress.enter="$emit('searchTitle')" v-model="store.searchNameMovie">
        <button @click="$emit('searchTitle')" >Search</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin';
@use '../style/partials/variables';
</style>