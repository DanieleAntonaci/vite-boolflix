<script>
export default {
    props: {
        vote: Number,
        numStars: Number
    }
}
</script>
<template>
    <span>
        <font-awesome-icon icon="fa-solid fa-star" v-if="Math.ceil(vote / 2) >= numStars" :style="{ color: 'yellow' }"/>
        <font-awesome-icon icon="fa-solid fa-star" v-else/>
    </span>
</template>

<style lang="scss" scoped>

</style>