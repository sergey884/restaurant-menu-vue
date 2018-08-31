<template>
    <div class="menuItemDetails">
      <div v-if="details.short_name">{{ details.short_name }}</div>
      <div v-if="details.description">{{ details.description }}</div>
      <div v-if="details.price_small">{{ details.price_small }}</div>
      <div v-if="details.price_large">{{ details.price_large }}</div>
      <div v-if="details.small_portion_name">{{ details.small_portion_name }}</div>
      <div v-if="details.large_portion_name">{{ details.large_portion_name }}</div>
    </div>
</template>
      
<script>
export default {
  data: function() {
    return {
      details: this.$route.query.details,
    };
  },
};
</script>

<style>
</style>
