<template>
  <div class="overflow-auto">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="totalPages" use-router v-model="currentPage" ></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    props: ['totalPages'],
    data() {
      return {
        currentPage : this.$route.query.page,
      }
    },
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
  }
</script>