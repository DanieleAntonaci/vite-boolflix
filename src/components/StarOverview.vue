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
        
        <!-- se il voto é inferiore a 5 stampa la stella colorata -->
        <font-awesome-icon icon="fa-solid fa-star" v-if="Math.ceil(vote / 2) >= numStars" :style="{ color: 'yellow' }"/>
        
        <!-- se il voto é superiore -->
        <font-awesome-icon icon="fa-regular fa-star" v-else />
    
    </span>
</template>

<style lang="scss" scoped>

</style>