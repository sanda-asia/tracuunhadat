<template>
  <div class="scroll-able">
    <v-tabs v-model="active" slider-color="black">
      <v-tab v-for="n in requirement" :key="n" ripple>
        {{ n }}
      </v-tab>
      <v-tab-item v-for="n in requirement" :key="n">
        <v-card flat>
          <div class="results-list">
            <div v-for="post in listClassified" :key="post._id" class="row row-post">
                <div class="col-4 img-poster" style="padding-left:0px;" @click="showDetail(post)">
                    <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg">
                        <img :src="`http://localhost:3000/upload/classified/${post.images[0]}`" />
                    </button>
                </div>
                <div class="col-8 description-poster" >
                    <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg" @click="showDetail(post)">
                        <h4 class="m-header-poster">{{post.title}}</h4>
                    </button>
                    <div class="m-text-description-poster"> 
                        <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> {{post.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}} VND</div>
                        <div class="area-poster"><span class="icon-frame"></span>
                            {{post.area}}m<sup>2</sup>
                        </div>    
                        <div class="clearfix"></div>
                        <div class="address-poster">
                          <i class="fas fa-map-marked"></i> {{post.address}}
                        </div>
                    </div>
                    <i class="far fa-bookmark icon-bookmark" ></i>
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
import axios from 'axios'
import EventBus from '../../EventBus'

export default {
  components: {
    PostDetail
  },
  name: "content-home",
  data() {
    return {
      requirement: ['Tất Cả','Cần Mua', 'Cần Bán','Cho Thuê', 'Cần Thuê'],
      listClassified: [],
      active: ''
    };
  },
  created(){
    axios({
      url: 'http://localhost:3000/classified/posts-approved',
      method: 'get',
    })
    .then(res => this.listClassified = res.data.data)
    .catch(err => console.log(err.message))
  },
  methods: {
    showDetail(post){
      EventBus.$emit('detailPost', post)
    }
  },
  computed: {
  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
.results-list{
    height: 96vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
a.v-tabs__item {
    color: #000 !important;
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


</style>
