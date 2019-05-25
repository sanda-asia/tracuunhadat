<template>
    <div class="row m-poster">
        <button type="button" class="modal-box-up" data-toggle="modal" data-target="#myModal">
            <div class="col-xs-4 col-md-5 col-lg-3 img-poster" style="padding-left:0px;">
                <img :src="require('../../assets/images/img1.png')" />
            </div>
            <div class="col-xs-8 col-md-7 col-lg-9 description-poster" >
                <h4 class="m-header-poster">{{ poster.header }}</h4>
                <div class="m-text-description-poster"> 
                    <div class="area-poster">
                        Area : {{ poster.area }} -m<sup>2</sup>
                    </div>    
                    <div class="address-poster">
                        Location : {{ poster.address }}
                    </div>
                </div>
                <div class="m-price-poster"> {{poster.price}}</div>
            </div>
        </button>
    </div>
</template>

<script>
import img from '../../assets/images/img.png';
export default {
    props: ['poster']
}
</script>

<style>

</style>
