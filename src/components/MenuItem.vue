<template>
  <div>
    <a v-bind:href="item.short_name">{{ item.name }}</a>
    <div>{{ item.description }}</div>
  </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props: ['item'],
    data: function () {
        return {

        };
    }
}
</script>

<style>

</style>
