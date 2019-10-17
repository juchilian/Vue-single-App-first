<style>
@import "../static/styles.css";
</style>
<template>
  <div id="app">
    <nav-link></nav-link>
    <router-view
      :tagList="tagList"
      :formState="formState"
      :tripsFiltered="tripsFiltered"
      :displayActiveList="displayActiveList"
      @toggle="toggle"
    ></router-view>
  </div>
</template>

<script>
import NavLink from "./components/NavLink";
export default {
  name: "App.vue",
  data() {
    return {
      total: 0,
      activeList: [],
      tagList: [
        { id: 0, name: "cheep", isActive: false },
        { id: 1, name: "popular", isActive: false },
        { id: 2, name: "active", isActive: false },
        { id: 3, name: "Near Station", isActive: false }
      ],
      tripList: [
        {
          id: 1,
          title: "朗らか旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [0, 1],
          cost: 1920000
        },
        {
          id: 2,
          title: "愉快な旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [2, 3],
          cost: 150000
        },
        {
          id: 3,
          title: "ぼんやり旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [0],
          cost: 170000
        },
        {
          id: 4,
          title: "超アクティビティ！旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [],
          cost: 600000
        },
        {
          id: 5,
          title: "100%幸せになれる旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [3, 4],
          cost: 90000
        },
        {
          id: 6,
          title: "海巡り旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [2],
          cost: 4500
        },
        {
          id: 7,
          title: "食べ歩き旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [1, 2, 3, 4],
          cost: 198000
        },
        {
          id: 8,
          title: "ぶらり旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [2, 4],
          cost: 100000000
        },
        {
          id: 9,
          title: "星をみる旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [],
          cost: 70000
        },
        {
          id: 10,
          title: "よき旅",
          content: "とても楽しい雰囲気でお勧めです",
          tags: [1, 3],
          cost: 20000
        }
      ],
      formState: {
        searchType: false,
        sort: "cost-low"
      }
    };
  },
  computed: {
    tripsFiltered: function() {
      // tripList並び替え
      if (this.formState.sort === "cost-low") {
        this.tripList.sort(function(a, b) {
          if (a.cost < b.cost) return -1;
          if (a.cost > b.cost) return 1;
          return 0;
        });
      } else if (this.formState.sort === "cost-high") {
        this.tripList.sort(function(a, b) {
          if (a.cost < b.cost) return 1;
          if (a.cost > b.cost) return -1;
          return 0;
        });
      }
      let filteredTrips = [];
      if (this.activeList.length === 0) {
        return this.tripList;
      }
      this.tripList.filter(trip => {
        // active タグが一致しているか
        const judgeList = [];
        this.activeList.filter(activeTag => {
          if (trip.tags.indexOf(activeTag.id) !== -1) {
            judgeList.push(true);
            // trip.tags.push(activeTag);
          } else {
            judgeList.push(false);
          }
        });
        // every ==> some でor検索
        if (this.formState.searchType === true) {
          if (judgeList.every(val => val === true)) {
            filteredTrips.push(trip);
          }
        } else {
          if (judgeList.some(val => val === true)) {
            filteredTrips.push(trip);
          }
        }
      });
      return filteredTrips;
    },
    displayActiveList: function() {
      let displayActiveList = [];
      this.activeList.filter(tag => {
        displayActiveList.push(tag.name);
      });
      return displayActiveList;
    }
  },
  methods: {
    toggle(id) {
      this.tagList[id].isActive = !this.tagList[id].isActive;
      this.activeList = [];
      this.tagList.filter(tag => {
        if (tag.isActive === true) {
          this.activeList.push(tag);
        }
      });
    }
  },
  components: {
    NavLink
  }
};
</script>

