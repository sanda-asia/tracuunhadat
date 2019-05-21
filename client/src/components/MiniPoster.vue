<template>
    <div class="m-poster">
        <div class="row">
            <div class="col-md-3 img-poster">

            </div>
            <div class="col-md-8 description-poster">
                <h2 class="m-header-poster">{{ poster.header }}</h2>
                <div class="m-text-description-poster"> {{poster.description}} </div>
                <div class="m-price-poster"> {{poster.price}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['poster']
}
</script>

<style>

</style>
