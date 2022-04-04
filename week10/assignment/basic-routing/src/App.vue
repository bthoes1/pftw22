<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
    <div class="collection-wrapper">
      <NavigationBar />
        <div class="container">
          <RouterView />
        </div>
    </div>
</template>
