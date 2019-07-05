<template>
  <div class="scroll-able">
    <v-tabs v-model="active_tab" slider-color="black">
      <v-tab v-for="(n, index) in requirement" :key="index" ripple @click="changeTabAction(index, n)" >
        <router-link v-if="index == 0" :to="{name:'home'}"> {{ n }}</router-link>
        <router-link v-if="index != 0" :to="{name:'FillByTab', params:{tab:key_tab[index]}}"> {{ n }}</router-link>
      </v-tab>
      <v-tab-item class="content-list" v-for="(n, index) in requirement" :key="index">
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
                        <h3 class="m-header-poster">{{post.title}}</h3>
                    </button>
                    <div class="m-text-description-poster"> 
                        <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> {{post.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}} VND</div>
                        <div class="area-poster"><i class="fas fa-chart-area"></i>
                            {{post.area}}m<sup>2</sup>
                        </div>    
                        <div class="clearfix"></div>
                        <div class="address-poster">
                          <i class="fas fa-map-marked"></i> {{post.address}}
                        </div>
                    </div>
                    <!-- <i class="far fa-bookmark icon-bookmark" ></i> -->
                </div>
            </div>
            <div class="overflow-auto">
             <b-pagination-nav :link-gen="linkGen" align="center" :number-of-pages="numberOfPage" use-router  v-model="currentPage" ></b-pagination-nav>
            </div>
            <div class="empty-box"></div>
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
    changeTabAction(index, post) {
      this.fetchPost(index, post);
      this.resetCurrentPage();
    },
    setNumberOfPage(number){
      if (number == 0|| number == null) {
        this.numberOfPage = 1;
      } else {
        this.numberOfPage = Math.ceil(number/12);
      }
    },
    resetContentHome(){
      this.currentPage = 1;
      this.active_tab = 0;
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
      axios.get(`http://localhost:3000/api/classified/requirement/${requirement}/${this.currentPage}`
      )
      .then(res => {
        this.listClassified = res.data.data
        })
      .catch(err => console.log(err.message))
      },
    fetchCountPages(){
      axios.get('http://localhost:3000/api/classified/count-classified'
      ).then(res => {
        this.countByTabs = res.data.listCount
        console.log(this.countByTabs)
        this.setNumberOfPage(this.countByTabs[this.active_tab]);
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
    this.fetchPost(index,this.requirement[this.active_tab])
    
  },
  watch: {
    currentPage:function(newVal, oldVal){
      this.fetchPost(this.active_tab, this.requirement[this.active_tab]);

    },
    active_tab:function(newVal, oldVal){
      this.resetCurrentPage()
    }
  }
};
</script>

<style scoped>
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
    margin: 0 0 15px 0;
    text-align: left;
    padding-right: 15px;
}
i.fas.fa-chart-area {
    font-size: 20px;
    color: #2e9b47;
    margin-right: 7px;
}

i.fas.fa-money-bill-wave {
    margin-right: 10px;
}

i.fas.fa-map-marked {
    margin-right: 13px;
    margin-top: 5px;
    font-size: 19px;
}

.address-poster {
    overflow-x: hidden;
}

.m-price-poster {
    width: 60% !important;
}
 .empty-box {
    height: 91px;
}
.overflow-auto {
    margin-top: 10px;
}

span.page-link {
    font-size: 18px !important;
    border: 1px solid lightgrey !important;
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
    max-height: 140px;
    overflow: hidden;
}
.img-poster button {
  height: 100%;
  width: 100%;
}
.img-poster button img{
  height: 100%;
  width: 100%;
}
.overflow-auto {

}
</style>