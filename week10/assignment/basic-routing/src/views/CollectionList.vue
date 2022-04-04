<script setup>
    import ShowList from "../data/shows.json";
    import ItemRow from "../components/ItemRow.vue"
    console.log(ShowList);
</script>

<template>
    <h1>My Recent TV Watches</h1>
    <ItemRow v-for="(item, index) in ShowList" :key="index" :item="item" />
</template>

<style scoped>
    @import url("https://use.typekit.net/gnf2dry.css");
    h1 {
        margin: 0 auto;
        width: 80%;
        text-align: center;
        padding: 40px 0;
        font-family: attribute-text;
        font-size: 48px;
    }
</style>