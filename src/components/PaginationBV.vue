<template>
    <div class="mt-3">
      <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentpage : 1,
        }
    }
}
</script>

<style>

</style>
