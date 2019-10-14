<template>
  <div class="box">
    <h2>{{ trip.title }}</h2>
    <p>{{ trip.content }}</p>
    <span class="box" v-for="tag in trip.tags" v-show="trip.tags.length">{{ tag }}</span>
    <span class="box nonetag" v-show="!trip.tags.length">No tags</span>
    <p>￥{{ trip.cost }}</p>
  </div>
</template>

<script>
    export default {
        props: {
            trip: Object
        },
    }
</script>

<style scoped>

</style>
