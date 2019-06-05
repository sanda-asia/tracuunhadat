<template>
    <div class="tab-pane fade" id="profile">
        <div class="wrapper-poster" v-for="poster in posters" :key="poster.id">
            <mini-poster v-bind:poster="poster" />
        </div>
        <pagination v-bind:total-pages="totalPages" />
    </div>
</template>

<script>
export default {
    props: ['posters'],
    data() {
        return {
        itemsPerPage: 3,
        };
    },
    computed:{
        currentPage(){
            return this.$route.query.page?this.$route.query.page:1;
        },
        totalPages(){
            return Math.ceil(this.posters.length / 3);
        },
        displayPosters(){
            const index = (this.currentPage-1) * this.itemsPerPage;
            return this.posters.slice(index, index + this.itemsPerPage);
        },
    },
    mounted(){
        // this.fetchPosters();
    },
    methods:{
    },
}
</script>

<style scoped>
.tab-pane {
    padding: 0 5px;
    font-size: 13px;
}
</style>
