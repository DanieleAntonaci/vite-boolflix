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
    <div id="header">
        <!-- campo di imput -->
        <input type="text" @keypress.enter="$emit('searchTitle')" v-model="store.searchNameMovie">

        <!-- bottone di ricerca -->
        <button @click="$emit('searchTitle')" >Search</button>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as*;

#header {
    height: 33px;
    margin: auto 0;

    input {
        border: 0;
        border-radius: 20px 0 0 20px;
        padding: 0 15px;
    }

    button {
        cursor: pointer;
        padding: 0 15px;
        border: 0;

        background-color: $primaryColor;
        color: white;
        border-radius: 0 20px 20px 0;

        &:hover {
            background-color: rgb(185, 0, 0);
        }
    }
}
</style>