<script>
export default {
    props: {
        posterFilm: Object
    }
}
</script>

<template>
    <div>
        <ul>
            <li v-for="element in posterFilm">
        {{ element.title }}
        </li>  
        </ul>
        
    </div>


</template>

<style lang="scss" scoped>

</style>