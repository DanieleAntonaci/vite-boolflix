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
                1.  {{ element.title }}
                <br>
                2.  {{ element.original_title }}
                <br>
                3.   {{ element.original_language }}
                <br>
                4.   {{ element.vote_average }}
                <!-- bebug -->
                <hr>
            </li>  
        </ul>
        
    </div>


</template>

<style lang="scss" scoped>

</style>