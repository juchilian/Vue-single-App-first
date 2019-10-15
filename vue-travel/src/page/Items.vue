<template>
  <div>
    <filter-form :tag-list="tagList" :display-active-list="displayActiveList" :trips-filtered="tripsFiltered" :form-state="formState" @toggle="toggle"></filter-form>
    <trip-view :trips-filtered="tripsFiltered"></trip-view>
  </div>
</template>

<script>
    import TripView from "../components/TripView";
    import FilterForm from "../components/FilterForm";
    export default {
        name: "Item",
        props: {
            tagList: Array,
            displayActiveList: Array,
            tripsFiltered: Array,
            formState: Object
        },
        methods: {
            toggle(id) {
                this.$emit('toggle', id);
            }
        },
        components: {FilterForm, TripView}
    }
</script>

<style scoped>

</style>
