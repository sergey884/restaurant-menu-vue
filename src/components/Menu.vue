<template>
    <div class="menu">
      <Search />
      <MenuItem 
        v-for="item in menuList"
        v-bind:item="item"
        v-bind:key="item.id"
      >
      </MenuItem>
    </div>
</template>

<script>
import axios from "axios";
import _ from 'lodash';
import MenuItem from "./MenuItem.vue";
import Search from "./Search.vue";

export default {
  name: "Menu",
  data: function() {
    return {
      initialMenuList: [],
      menuList: [],
      loading: false
    };
  },
  created: function() {
    this.getMenuItems();
  },
  methods: {
    getMenuItems: function() {
      const url = "https://davids-restaurant.herokuapp.com/menu_items.json";
      this.loading = true;

      axios
        .get(url)
        .then(response => {
          this.loading = false;
          const { status, data } = response;

          if (status === 200) {
            this.menuList = data.menu_items;
            this.initialMenuList = data.menu_items;
          }
        })
        .catch(err => console.error(err));
    },
    search: function (searchText) {
        const menuList = [...this.initialMenuList];

        const searchRegExp = new RegExp(searchText, 'ig');
        const filter = item => item && searchRegExp.test(item.name);
        const filterMenuList = _.filter(menuList, filter);

        this.menuList = filterMenuList;
    }
  },
  provide: function () {
      return {
          search: this.search,
      }
  },
  components: {
    MenuItem,
    Search,
  }
};
</script>

<style>
</style>
