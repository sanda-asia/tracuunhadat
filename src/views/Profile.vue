<template>
  <div class="wrapper">
      <div class="emp-profile">
          <div class="row">
              <div class="col-md-3">
                  <div class="profile-img">
                      <div class="card">
                        <div class="card-header">
                          <div class="profile_pic">
                            <img src="https://bootsnipp.com/img/avatars/92ff0456eb6106d0c1ae8ab5f1fe0afe2d2d25f2.jpg">
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="d-lfex justify-content-center flex-column">
                            <div class="name_container">
                              <div class="name">Samim</div>
                            </div>
                            <div class="address">Kuala Lumpur, Malaysia</div>
                          </div>
                          <div class="follow">
                            <div class="follow_btn">Chỉnh sửa trang cá nhân</div>
                          </div>
                          <!-- <div class="info_container">
                            <div class="info">
                              <p>followers</p>
                              <p>2.89M</p>								
                            </div>
                            <div class="info">
                              <p>followings</p>
                              <p>456</p>							
                            </div>
                            <div class="info">
                              <p>posts</p>
                              <p>3.56K</p>						
                            </div>			
                          </div> -->
                        </div>
                      </div>
                  </div>
                  
                  <div class="profile-work">
                            <h5>
                                Giới thiệu
                            </h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore alias necessitatibus recusandae nisi, molestiae quae eveniet! Odio repudiandae, dignissimos cumque ullam ipsum dolores praesentium tenetur, quaerat adipisci dicta expedita veritatis.
                            </p>
                            <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                  </div>
              </div>
              <div class="col-md-9">
                <div class="row">
                    
                    <div class="col-md-10">
                        <div class="profile-head">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="sale-tab" data-toggle="tab" href="#sale" role="tab" aria-controls="sale" aria-selected="true">Tin đăng</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pending-tab" data-toggle="tab" href="#pending" role="tab" aria-controls="pending" aria-selected="false">Chờ duyệt</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="refuse-tab" data-toggle="tab" href="#refuse" role="tab" aria-controls="refuse" aria-selected="false">Từ chối</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="listTransaction-tab" data-toggle="tab" href="#listTransaction" role="tab" aria-controls="listTransaction" aria-selected="false">Lịch sử Giao dịch</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                    
                </div>
                <div class="row">
                  <div class="col-md-12">
                      <div class="tab-content profile-tab" id="myTabContent">
                          <div class="tab-pane fade show active" id="sale" role="tabpanel" aria-labelledby="home-tab">
                            <div class="results-list">
                                <div v-for="post in listClassified" :key="post._id" class="row row-post">
                                    <div class="col-4 img-poster" style="padding-left:0px;">
                                        <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg">
                                            <img src="https://file4.batdongsan.com.vn/resize/745x510/2016/06/14/20160614135439-e5f6.jpg" />
                                        </button>
                                    </div>
                                    <div class="col-8 description-poster" >
                                        <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg">
                                            <h4 class="m-header-poster">{{post.title}}</h4>
                                        </button>
                                        <div class="m-text-description-poster"> 
                                            <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i> {{post.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}} VND</div>
                                            <div class="area-poster"><span class="icon-frame"></span>
                                                {{post.area}}m<sup>2</sup>
                                            </div>    
                                            <div class="clearfix"></div>
                                            <div class="address-poster">
                                            <i class="fas fa-map-marked"></i> Location : {{post.address}}
                                            </div>
                                        </div>
                                        <i class="far fa-bookmark icon-bookmark" @click="savePost"></i>
                                    </div>
                                </div>
                            </div>
                          </div>
                          <div class="tab-pane fade show active" id="pending" role="tabpanel" aria-labelledby="pending-tab">
                              day la pendding tab
                          </div>
                          <div class="tab-pane fade show active" id="refuse" role="tabpanel" aria-labelledby="refuse-tab">
                              day la refuse tab
                          </div>
                          <div class="tab-pane fade show active" id="listTransaction" role="tabpanel" aria-labelledby="listTransaction-tab">
                                <v-card>
                                    <v-card-title>
                                    Lịch sử giao dịch
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                        v-model="search"
                                        append-icon="search"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                    </v-card-title>
                                    <v-data-table
                                    :headers="headers"
                                    :items="desserts"
                                    :search="search"
                                    >
                                    <template v-slot:items="props">
                                        <td class="text-xs-left">{{ props.item._id }}</td>
                                        <td class="text-xs-left">{{ props.item.content }}</td>
                                        <td class="text-xs-left">{{ props.item.date }}</td>
                                        <td class="text-xs-left">{{ props.item.amount }}</td>
                                    </template>
                                    <template v-slot:no-results>
                                        <v-alert :value="true" color="error" icon="warning">
                                        Your search for "{{ search }}" found no results.
                                        </v-alert>
                                    </template>
                                    </v-data-table>
                                </v-card>
                          </div>
                          <div class="tab-pane fade show active" id="edit" role="tabpanel" aria-labelledby="edit-tab">
                              day la edit tab
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>       
        </div>
  </div>
</template>

<script>
import PostDetail from './components/PostDetail'
import axios from 'axios'

export default {
  components: {
    PostDetail
  },
  data() {
    return {
        listClassified: [],
        search: '',
        headers: [
          { text: 'ID', align: 'left', sortable: false, value: '_id', width:'20%'},
          { text: 'Nội dung giao dịch', align: 'left', value: 'content', sortable: false, width:'40%'},
          { text: 'Ngày giao dịch', align: 'left', value: 'date', sortable: false, width:'20%'},
          { text: 'Số tiền', align: 'left', value: 'amount', sortable: false,width:'20%'}
        ],
        desserts: [
            {
                _id: '5465123',
                content: 'Thanh toans bai so 1',
                date: '14/06/2019',
                amount: '10.000'
            }
        ],
    };
  },
  created(){
    axios({
      url: 'http://localhost:3000/classified/posts',
      method: 'get',
    })
    .then(res => this.listClassified = res.data.data)
    .catch(err => console.log(err.message))
  },
  methods: {
  },
  computed: {
  },
  mounted() {

  }
};
</script>



<style lang="scss" scoped>
body{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}

.wrapper{
  height: 997px;
  padding: 0 100px;
  overflow-y: scroll;
  background-color: white;
}

.emp-profile{
    margin-top: 1%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}
.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 5%;
    margin-top: 1%;
    border: 1px solid #ccc;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}

.card-header{
  background-image: url('http://www.latestseotutorial.com/wp-content/uploads/2016/12/love-dp-for-facebook.jpg') !important;
  padding: 0 !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  text-align:center;
}
.card{
  overflow: hidden;
}
.profile_pic{
  position: absolute;
  bottom: -50px;
  height: 112px;
  width: 112px;
  padding: 5px;
  border: 2px solid #f39c12;
  border-radius: 50%;
}
.card-body{
  padding-top: 55px !important;
}
.profile_pic img{
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.name_container{
  display: flex;
  justify-content: center;

}
.name{
  font-size: 20px;
  font-weight: 700;
  color: gray;
  position: relative;
}
.name::after{
  font-family: "Font Awesome 5 Free";
  content: '\f058';
  position: absolute;
  right: -15px;
  top:0;
  font-size: 15px;
  font-weight: 700;
  color: #4CAF50;
}
.address{
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: gray;
}
.follow{
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
.follow_btn{
  background: #2196F3;
  padding: 7px;
  color: #fff;
  border-radius: 12px;
  cursor: pointer;
}

.follow_btn::before{
  font-family: "Font Awesome 5 Free";
  content: "\f234";
  font-weight: 600;
  margin-right: 5px;



}
.follow_btn:hover{
  background: #f39c12;
}
.info_container{
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.info{
  display: flex;
  flex-direction: column;
  padding: 0px;
}
.info p:first-child{
  margin-bottom: 0;
  font-size: 12px;
  color: gray;
  text-transform: uppercase;
  text-align: center;
}
.info p:last-child{
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 700;
  color: gray;
  text-transform: uppercase;
  text-align: center;
}

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
