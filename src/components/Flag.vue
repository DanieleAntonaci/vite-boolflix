<script>
export default {
    props: {
        lang: String,
        flags: String
    }
}
</script>

<template>
    <div>

        <!-- se é presente la bandiera stapa la bandiera -->
        <img class="flag" :src="'/flag/flag-' + lang + '.png'" :alt="lang" v-if="flags.includes(lang)">
        
        <!-- se non é presente stampa questa bandiera -->
        <img class="flag" src="/flag/flag-rainbow.png" v-else alt="Generic flag">
    
    </div>
</template>

<style lang="scss">
@use '../style/partials/mixin';
@use '../style/partials/variables';
</style>