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

div {
    input {
        border: 0;
    }

    button {
        padding: 0 5px;
        border: 0;
        margin-left: 5px;
    }
}
</style>