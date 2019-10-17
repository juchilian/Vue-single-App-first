<template>
  <div>
    <filter-form :form-state="formState" :trips-filtered="tripsFiltered" :display-activea-list="displayActiveList" :tag-list="tagList" @toggle="toggle"></filter-form>
    <trip-view :trips-filtered="tripsFiltered"></trip-view>
  </div>
</template>

<script>
import FilterForm from "../components/FilterForm";
import TripView from "../components/TripView";
export default {
    props: {
        tagList: Array,
        formState: Object,
        tripsFiltered: Array,
        displayActiveList: Array
    },
  methods: {
        toggle(id) {
            this.$emit("toggle",id);
        },
  },
  components: {
    FilterForm, TripView
  }
};
</script>