<template>
  <div class="scroll-able">
    <v-tabs v-model="active" slider-color="black">
      <v-tab v-for="n in requirement" :key="n" ripple>
        {{ n }}
      </v-tab>
      <v-tab-item v-for="n in requirement" :key="n">
        <v-card flat>
          <div class="results-list">
            <div class="row row-post">
                <div class="col-4 img-poster" style="padding-left:0px;">
                    <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg">
                        <img src="https://file4.batdongsan.com.vn/resize/745x510/2016/06/14/20160614135439-e5f6.jpg" />
                    </button>
                </div>
                <div class="col-8 description-poster" >
                    <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg">
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
      requirement: ['Tất Cả','Cần Mua', 'Cần Bán','Cho Thuê', 'Cần Thuê']
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
a.v-tabs__item {
    color: black !important;
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
    font-size: 16px;
}

.m-price-poster{
    float: left;
    width: 50%;
    color: #c90927;
    font-size: 18px;
    font-weight: bold;
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
    padding: 0;
}
.results-list{
    height: 679px;
    overflow-y: scroll;
    overflow-x: hidden;
}


</style>
