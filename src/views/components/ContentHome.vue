<template>
  <div class="scroll-able">
    <v-tabs
      v-model="active"
      slider-color="black"
    >
      <v-tab
        v-for="n in 3"
        :key="n"
        ripple
      >
        Item {{ n }}

      </v-tab>
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-card flat>
          <!-- <v-card-text>{{ text }}</v-card-text> -->
          <div class="results-list">
            <div class="row row-post">
                <div class="col-4 img-poster" style="padding-left:0px;">
                    <button class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <img src="https://file4.batdongsan.com.vn/resize/745x510/2016/06/14/20160614135439-e5f6.jpg" />
                    </button>
                </div>
                
                <div class="col-8 description-poster" >
                    <button type="button" class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <h4 class="m-header-poster">This will create a new app with basic BootstrapVue settings to get your project started.</h4>
                    </button>
                    <div class="m-text-description-poster"> 
                        <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> 2.000.000 VND</div>
                        <div class="area-poster"><span class="icon-frame"></span>
                            150m<sup>2</sup>
                        </div>    
                        <div class="clearfix"></div>
                        <div class="address-poster">
                           <i class="fas fa-map-marked"></i> Location : TPHCM
                        </div>
                    </div>
                    <i class="far fa-bookmark icon-bookmark"></i>
                </div>
            </div>
            <div class="row row-post">
                <div class="col-4 img-poster" style="padding-left:0px;">
                    <button class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <img src="https://file4.batdongsan.com.vn/resize/745x510/2016/06/14/20160614135439-e5f6.jpg" />
                    </button>
                </div>
                
                <div class="col-8 description-poster" >
                    <button type="button" class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <h4 class="m-header-poster">This will create a new app with basic BootstrapVue settings to get your project started.</h4>
                    </button>
                    <div class="m-text-description-poster"> 
                        <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> 2.000.000 VND</div>
                        <div class="area-poster"><span class="icon-frame"></span>
                            150m<sup>2</sup>
                        </div>    
                        <div class="clearfix"></div>
                        <div class="address-poster">
                           <i class="fas fa-map-marked"></i> Location : TPHCM
                        </div>
                    </div>
                    <i class="far fa-bookmark icon-bookmark"></i>
                </div>
            </div>
            <div class="row row-post">
                <div class="col-4 img-poster" style="padding-left:0px;">
                    <button class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <img src="https://file4.batdongsan.com.vn/resize/745x510/2016/06/14/20160614135439-e5f6.jpg" />
                    </button>
                </div>
                
                <div class="col-8 description-poster" >
                    <button type="button" class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <h4 class="m-header-poster">This will create a new app with basic BootstrapVue settings to get your project started.</h4>
                    </button>
                    <div class="m-text-description-poster"> 
                        <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> 2.000.000 VND</div>
                        <div class="area-poster"><span class="icon-frame"></span>
                            150m<sup>2</sup>
                        </div>    
                        <div class="clearfix"></div>
                        <div class="address-poster">
                           <i class="fas fa-map-marked"></i> Location : TPHCM
                        </div>
                    </div>
                    <i class="far fa-bookmark icon-bookmark"></i>
                </div>
            </div>
            <div class="row row-post">
                <div class="col-4 img-poster" style="padding-left:0px;">
                    <button class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <img src="https://file4.batdongsan.com.vn/resize/745x510/2016/06/14/20160614135439-e5f6.jpg" />
                    </button>
                </div>
                
                <div class="col-8 description-poster" >
                    <button type="button" class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <h4 class="m-header-poster">This will create a new app with basic BootstrapVue settings to get your project started.</h4>
                    </button>
                    <div class="m-text-description-poster"> 
                        <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> 2.000.000 VND</div>
                        <div class="area-poster"><span class="icon-frame"></span>
                            150m<sup>2</sup>
                        </div>    
                        <div class="clearfix"></div>
                        <div class="address-poster">
                           <i class="fas fa-map-marked"></i> Location : TPHCM
                        </div>
                    </div>
                    <i class="far fa-bookmark icon-bookmark"></i>
                </div>
            </div>
            <div class="row row-post">
                <div class="col-4 img-poster" style="padding-left:0px;">
                    <button class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <img src="https://file4.batdongsan.com.vn/resize/745x510/2016/06/14/20160614135439-e5f6.jpg" />
                    </button>
                </div>
                
                <div class="col-8 description-poster" >
                    <button type="button" class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <h4 class="m-header-poster">This will create a new app with basic BootstrapVue settings to get your project started.</h4>
                    </button>
                    <div class="m-text-description-poster"> 
                        <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> 2.000.000 VND</div>
                        <div class="area-poster"><span class="icon-frame"></span>
                            150m<sup>2</sup>
                        </div>    
                        <div class="clearfix"></div>
                        <div class="address-poster">
                           <i class="fas fa-map-marked"></i> Location : TPHCM
                        </div>
                    </div>
                    <i class="far fa-bookmark icon-bookmark"></i>
                </div>
            </div>
            <div class="row row-post">
                <div class="col-4 img-poster" style="padding-left:0px;">
                    <button class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <img src="https://file4.batdongsan.com.vn/resize/745x510/2016/06/14/20160614135439-e5f6.jpg" />
                    </button>
                </div>
                
                <div class="col-8 description-poster" >
                    <button type="button" class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <h4 class="m-header-poster">This will create a new app with basic BootstrapVue settings to get your project started.</h4>
                    </button>
                    <div class="m-text-description-poster"> 
                        <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> 2.000.000 VND</div>
                        <div class="area-poster"><span class="icon-frame"></span>
                            150m<sup>2</sup>
                        </div>    
                        <div class="clearfix"></div>
                        <div class="address-poster">
                           <i class="fas fa-map-marked"></i> Location : TPHCM
                        </div>
                    </div>
                    <i class="far fa-bookmark icon-bookmark"></i>
                </div>
            </div>
            <div class="row row-post">
                <div class="col-4 img-poster" style="padding-left:0px;">
                    <button class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <img src="https://file4.batdongsan.com.vn/resize/745x510/2016/06/14/20160614135439-e5f6.jpg" />
                    </button>
                </div>
                
                <div class="col-8 description-poster" >
                    <button type="button" class="modal-box-up" data-toggle="modal" data-target="#myModal1" style="padding:0;">
                        <h4 class="m-header-poster">This will create a new app with basic BootstrapVue settings to get your project started.</h4>
                    </button>
                    <div class="m-text-description-poster"> 
                        <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> 2.000.000 VND</div>
                        <div class="area-poster"><span class="icon-frame"></span>
                            150m<sup>2</sup>
                        </div>    
                        <div class="clearfix"></div>
                        <div class="address-poster">
                           <i class="fas fa-map-marked"></i> Location : TPHCM
                        </div>
                    </div>
                    <i class="far fa-bookmark icon-bookmark"></i>
                </div>
            </div>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <post-detail/>
  </div>
</template>

<script>
import PostDetail from './PostDetail'

export default {
  components: {
    PostDetail
  },
  name: "content-home",
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
.results-list{

}
.row-post{
    width: 100%;
    margin: 0 10px;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
}

.m-header-poster{
    margin: 0 0 30px 0;
    text-align: left;
    padding-right: 15px;
}

.m-price-poster{
    float: left;
    width: 50%;
    color: red;
}

.icon-bookmark{
    position: absolute;
    right: 50px;
    bottom: 20px;
    font-size: 30px;
}
.img-poster{
    width: 100%;
    height: auto;
}
.results-list{
    height: 679px;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>
