<template>
  <div>
    <filter-form
      :form-state="sharedState.formState"
      :trips-filtered="tripsFiltered"
      :display-activea-list="displayActiveList"
      :tag-list="sharedState.tagList"
      @toggle="toggle"
    ></filter-form>
    <trip-view :trips-filtered="tripsFiltered"></trip-view>
  </div>
</template>

<script>
import FilterForm from "../components/FilterForm";
import TripView from "../components/TripView";
import store from '../store'
export default {
  data() {
    return {
      sharedState: store.state
    }
  },
  computed: {
    tripsFiltered: function() {
      // tripList並び替え
      if (this.sharedState.formState.sort === "cost-low") {
        this.sharedState.tripList.sort(function(a, b) {
          if (a.cost < b.cost) return -1;
          if (a.cost > b.cost) return 1;
          return 0;
        });
      } else if (this.sharedState.formState.sort === "cost-high") {
        this.sharedState.tripList.sort(function(a, b) {
          if (a.cost < b.cost) return 1;
          if (a.cost > b.cost) return -1;
          return 0;
        });
      }
      let filteredTrips = [];
      if (this.sharedState.activeList.length === 0) {
        return this.sharedState.tripList;
      }
      this.sharedState.tripList.filter(trip => {
        // active タグが一致しているか
        const judgeList = [];
        this.sharedState.activeList.filter(activeTag => {
          if (trip.tags.indexOf(activeTag.id) !== -1) {
            judgeList.push(true);
            // trip.tags.push(activeTag);
          } else {
            judgeList.push(false);
          }
        });
        // every ==> some でor検索
        if (this.sharedState.formState.searchType === true) {
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
      this.sharedState.activeList.filter(tag => {
        displayActiveList.push(tag.name);
      });
      return displayActiveList;
    }
  },
  methods: {
    toggle(id) {
      store.actions.toggle(id)
    }
  },
  components: {
    FilterForm,
    TripView
  }
};
</script>