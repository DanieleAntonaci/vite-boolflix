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
        <img class="flag" :src="'/flag/flag-' + lang + '.png'" :alt="lang" v-if="flags.includes(lang)">
        <img class="flag" src="/flag/flag-rainbow.png" v-else alt="Generic flag">
    </div>
</template>

<style lang="scss">
@use '../style/partials/mixin';
@use '../style/partials/variables';
</style>