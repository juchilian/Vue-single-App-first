<template>
  <div class="list-view">
    <div v-if="hasTrip">
      <trip-item v-for="trip in tripsFiltered" :trip="trip" :key="trip.id"></trip-item>
    </div>
    <p v-else v-cloak>申し訳ございません。条件に一致するものは見つかりませんでした。</p>
  </div>
</template> 

<script>
import TripItem from "./TripItem";
export default {
  props: {
    tripsFiltered: Array,
  },
  computed: {
    hasTrip() {
      return this.tripsFiltered && this.tripsFiltered.length !== 0;
    }
  },
  components: {
    TripItem
  }
};
</script>

<style scoped>
</style>
