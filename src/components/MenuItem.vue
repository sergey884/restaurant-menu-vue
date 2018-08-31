<template>
  <div>
    <router-link 
      v-bind:to="{ 
        path: '/menuItem/' + item.short_name,
        query: { details: item }
      }"
      >{{ item.name }}</router-link>
    <div>{{ item.description }}</div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["item"],
  data: function() {
    return {
    };
  }
};
</script>

<style>
</style>
