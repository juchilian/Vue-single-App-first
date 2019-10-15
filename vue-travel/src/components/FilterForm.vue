<template>
  <div>
    <h2>検索条件: {{displayActiveList}}  ヒット数：{{tripsFiltered.length}}件</h2>
    <span style="float: right;">
      <input type="checkbox" v-model="formState.searchType">
      <span style="margin-right: 5px;">Tag完全一致</span>
      <span>並び順指定</span>
      <select v-model="formState.sort" name="sortbox">
          <option value="cost-low" selected>価格が低い順</option>
          <option value="cost-high">価格が高い順</option>
      </select>
    </span>
    <search-tag v-for="tag in tagList" :tag="tag" @toggle="toggle"></search-tag>
  </div>
</template>

<script>
  import SearchTag from "./SearchTag";

  export default {
    props: {
      tagList: Array,
      displayActiveList: Array,
      tripsFiltered: Array,
      formState: Object
    },
    computed: {
    },
    methods: {
      toggle(id) {
        this.$emit('toggle', id);
      }
    },
    components: {
      'search-tag': SearchTag
    }
  }
</script>

<style scoped>

</style>
