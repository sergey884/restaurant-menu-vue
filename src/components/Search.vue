<template>
    <input 
      type="text"
      v-model="searchText"
      placeholder="Enter search text" 
    />
</template>

<script>
export default {
    name: 'Search',
    inject: ['search'],
    data: function () {
        return {
            searchText: '',
        }
    },
    watch: {
        searchText: function () {
            this.search(this.searchText);
        }
    }
}
</script>

<style>

</style>
