<template>
  <div :class="{search:true, box: true, active:tag.isActive}" @click="toggleActive(tag.id)">{{tag.id}}:{{ tag.name }}</div>
</template>

<script>
  export default {
    props: {
      tag: Object
    },
    methods: {
      toggleActive(id) {
        this.$emit('toggle',id);
      }
    }
  }
</script>

<style scoped>

</style>
