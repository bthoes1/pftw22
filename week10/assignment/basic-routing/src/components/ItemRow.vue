<script setup>
    import { RouterLink } from 'vue-router';
    const props = defineProps(["item"]);
    console.log("the item", props.item);
</script>

<template>
    <div class="container">
         <RouterLink :to="'/collection/'+item.id">
            <tr>
                <td class="image-col"><img v-bind:src="item.image" v-bind:alt="item.name"></td>
                <td class="name-col">{{item.name}}</td>
                <td class="platform-col">{{item.platform}}</td>
                <td class="premise-col">{{item.premise}}</td>
            </tr>
        </RouterLink>
    </div>
   
</template>

<style scoped>
    @import url("https://use.typekit.net/gnf2dry.css");
    .container {
        width: 80%;
        margin: 0 auto;
        font-family: attribute-text;
        font-size: 16px;
        min-width: 750px;
    }
    .container a {
        text-decoration: none;
        color: black
    }
    tr {
        display: flex;
        flex-direction: row;
        background: rgb(240, 240, 240);
        border: 1px solid #d3d3d3;
    }
    tr:hover {
        background: #C8DCF0;
        border: 1px solid black;
    }
    td {
        padding: 20px;
    }
    img {
        width: 100%;
    }
    .image-col {
        min-width: 300px;
        max-width: 300px;
    }
   .name-col, .platform-col {
        min-width: 100px;
        max-width: 100px;
    }
    .platform-col {
        min-width: 50x;
        max-width: 50px;
    }
</style>