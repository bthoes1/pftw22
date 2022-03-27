<script setup>
    const props = defineProps(["item"]);
    console.log("the item", props.item);
</script>

<template>
    <tr>
        <td><img v-bind:src="item.image" v-bind:alt="item.name"></td>
        <td>{{item.name}}</td>
        <td>{{item.platform}}</td>
        <td class="needs-more-space">{{item.seasons}}</td>
        <td>{{item.premise}}</td>
        <td class="cell actions">
            <button type="button" v-on:click="$emit('deleteItem', item)">Delete</button>
        </td>
    </tr>
</template>