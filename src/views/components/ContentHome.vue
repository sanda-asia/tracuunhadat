<template>
  <div class="scroll-able">
    <v-tabs v-model="active_tab" slider-color="black">
      <v-tab v-for="(n, index) in requirement" :key="index" ripple @click="fetchPost(index, n)" >
        <router-link v-if="index == 0" :to="{name:'home'}"> {{ n }}</router-link>
        <router-link v-if="index != 0" :to="{name:'FillByTab', params:{tab:key_tab[index]}}"> {{ n }}</router-link>
      </v-tab>
      <v-tab-item v-for="(n, index) in requirement" :key="index">
        <v-card flat>
          <div class="results-list">
            <div v-for="(post) in listClassified" :key="post._id" class="row row-post">
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
    <div class="overflow-auto">
      <b-pagination-nav :link-gen="linkGen" align="center" :number-of-pages="numberOfPage" use-router  v-model="currentPage" ></b-pagination-nav>
    </div>
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
      key_tab: ['','can-mua', 'can-ban', 'cho-thue', 'can-thue'],
      listClassified: [],
      active: '',
      currentPage: 1,
      active_tab: 0,
      numberOfPage:1,
      countByTabs: []
    };
  },
  computed: {

    },
  created(){
    this.fetchCountPages();
  },
  methods: {
    setNumberOfPage(number){
      if (number == 0|| number == null) {
        this.numberOfPage = 1;
      } else {
        this.numberOfPage = Math.ceil(number/12);
      }
    },
    resetCurrentPage(){
      this.currentPage = 1;
    },
    linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      },
    showDetail(post){
      EventBus.$emit('detailPost', post)
    },
    fetchPost(index, requirement){
      this.setNumberOfPage(this.countByTabs[index]);
      this.resetCurrentPage()
      axios({
        url: `http://localhost:3000/classified/posts/${requirement}`,
        method: 'get',
      })
      .then(res => this.listClassified = res.data.data)
      .catch(err => console.log(err.message))
      },
    fetchCountPages(){
      axios({
        url: 'http://localhost:3000/classified/count-classified',
        method: 'get',
      }).then(res => {
        this.countByTabs = res.data.listCount
        })
        .catch(err => console.log(err.message))
    }
  },
  mounted() {
    var index;
    switch(this.$route.params.tab){
      case 'can-mua':
        index = 1;
        break;
      case 'can-ban':
        index = 2;
        break;
      case 'cho-thue':
        index = 3;
        break;
      case 'can-thue' :
        index = 4;
        break;
      default:
        index = 0; 
    }
    this.active_tab = index;
    this.fetchPost(this.requirement[this.active_tab])
    
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

.overflow-auto {
    transform: translateY(-152px);
}

</style>
