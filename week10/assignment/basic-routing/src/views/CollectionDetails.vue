<script setup>
    import ShowList from "../data/shows.json";
    import { useRoute } from "vue-router";
    const route = useRoute();
    const paramId = route.params.id * 1;
    console.log("the id is", paramId);
    const item = ShowList.find(item => {
        return item.id === paramId;
    });
</script>

<template>
    <div class="container">
        <img :src="item.image" :alt="item.name">
        <h1>{{item.name}}</h1>
        <p>{{item.premise}}</p>
    </div>
</template>

<style scoped>
    @import url("https://use.typekit.net/gnf2dry.css");
    .container {
        margin: 0 auto;
        margin-top: 60px;
        width: 33%;
        font-family: attribute-text;
        padding: 20px;
        background: rgb(240, 240, 240);
        border: 1px solid #d3d3d3;
    }
    .container img {
        width: 100%;
    }
    .container h1 {
        font-size: 36px;
    }
    .container p {
        font-size: 18px;
    }
</style>