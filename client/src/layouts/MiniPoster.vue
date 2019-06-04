<template>
    <div class="row m-poster">
        
        <div class="col-xs-4 col-md-4 col-lg-4 img-poster" style="padding-left:0px;">
            <button class="modal-box-up" data-toggle="modal" data-target="#myModal" style="padding:0;">
                <img src="../assets/images/1.jpg" />
            </button>
        </div>
        
        <div class="col-xs-8 col-md-8 col-lg-8 description-poster" >
            <button type="button" class="modal-box-up" data-toggle="modal" data-target="#myModal" style="padding:0;">
                <h4 class="m-header-poster">{{ poster.header }}</h4>
            </button>
            <div class="m-text-description-poster"> 
                <div class="m-price-poster"><span class="fa fa-money"></span> {{poster.price}}</div>
                <div class="area-poster"><span class="icon-frame"></span>
                    {{ poster.area }}m<sup>2</sup>
                </div>    
                <div class="clearfix"></div>
                <div class="address-poster">
                    Location : {{ poster.address }}
                </div>
            </div>
            
            <div class="userWidget-2">
                <div class="avatar">
                    <img src="../assets/images/img1.png" alt="avatar">
                </div>
                <div class="info">
                    <div class="name">Ngô Minh Nhí</div>
                    <div class="title">Chuyên viên tư vấn</div>
                </div>
                <div class="ops">
                    <a href="#" class="btn btn-icon btn-round btn-o btn-magenta btn-sm"><span class="fa fa-envelope-o"></span></a>
                    <a href="#" class="btn btn-icon btn-round btn-o btn-red btn-sm"><span class="fa fa-heart-o"></span></a>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
// import img from '../assets/images/img.png';
export default {
    props: ['poster']
}
</script>

<style>

</style>
