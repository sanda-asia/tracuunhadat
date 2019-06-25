<template>
  <div class="wrapper">
      <div class="emp-profile">
          <div class="row">
              <div class="col-md-3">
                  <div class="profile-img">
                      <div class="card">
                        <div class="card-header">
                          <div class="profile_pic">
                            <!-- <img :src="user.avatar"> -->
                            <div class="profile-img">
                              <img v-if="!avatar" :src="`http://localhost:3000/upload/users/${user.avatar}`" alt=""/>
                              <img v-else class="preview-img" alt=""/>
                              <div class="file btn btn-lg btn-primary">
                                  <i class="fas fa-cloud-upload-alt"></i>
                                  <input type="file" name="file" @change="handleFileUpload"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="d-lfex justify-content-center flex-column">
                            <div class="name_container">
                              <div class="name">{{user.fullname}}</div>
                            </div>
                            <div class="address">{{user.address}}</div>
                          </div>
                          <div class="follow">
                            <!-- <div class="follow_btn">Chỉnh sửa trang cá nhân</div> -->
                            <button v-if="isUser" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                               Chỉnh Sửa Trang Cá Nhân
                            </button>
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
                       {{user.introduction}}
                    </p>
                      <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                  </div>
              </div>
              <div class="col-md-9">
                <div v-if="isUser" class="row">
                  <div class="col-6">
                    <h4>Tài khoản thanh toán</h4>
                    <p>Số dư khả dụng: <span style="color: red; font-weight: Bold">{{user.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}} VND</span></p>
                  </div>
                  <div class="col-6">
                    
                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                  </div>
                </div>
                <div class="row">
                     <div class="scroll-able">
                          <v-tabs v-model="active" slider-color="black">
                            <v-tab ripple>Đã Duyệt</v-tab>
                            <v-tab v-if="isUser" ripple>Chờ Duyệt</v-tab>
                            <v-tab v-if="isUser" ripple>Từ Chối</v-tab>
                            <v-tab v-if="isUser" ripple>Lịch sử Giao dịch</v-tab>
                            <v-tab-item v-for="(n,index) in requirement" :key="n">
                              <v-card flat>
                                <div class="results-list">
                                  <div v-for="post in listClassified[index]" :key="post._id"> 
                                    <div class="row row-post">
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
                                </div>
                              </v-card>
                            </v-tab-item>
                            <v-tab-item v-if="isUser">
                               <!-- <div class="row"> -->
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
                                        <td class="text-xs-left">{{ props.item._id}}</td>
                                        <td class="text-xs-left">{{ props.item.transaction_content }}</td>
                                        <td class="text-xs-left">{{ (new Date( props.item.created_at)).toLocaleDateString() }}</td>
                                        <td class="text-xs-left">{{ props.item.transaction_amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }}</td>
                                    </template>
                                    <template v-slot:no-results>
                                        <v-alert :value="true" color="error" icon="warning">
                                        Your search for "{{ search }}" found no results.
                                        </v-alert>
                                    </template>
                                    </v-data-table>
                                </v-card>
                               <!-- </div> -->
                            </v-tab-item>
                          </v-tabs>
                        </div>
                </div>
              </div>
          </div>       
        </div>
        <post-detail/>
          <!-- The Modal -->
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
            
              <!-- Modal Header -->
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              
              <!-- Modal body -->
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Username</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" readonly v-model="user.username">
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Họ tên</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="user.fullname">
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Số điên thoại</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" readonly v-model="user.phone_number">
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" readonly v-model="user.email">
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Giới thiệu</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="user.introduction"></textarea>
                  </div>
                </form>
              </div>
              
              <!-- Modal footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateUser">Cập Nhập</button>
              </div>
              
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import PostDetail from './components/PostDetail'
import axios from 'axios'
import EventBus from '../EventBus'
import jwtDecode from 'jwt-decode'

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
        requirement: ['Đã Duyệt', 'Chờ Duyệt','Từ Chối'],
        active: '',
        user: '',
        avatar: false,
        isUser: false,
        desserts:[],  
    };
  },
  created(){
    this.fetchListPostApprove();
    this.fetchListTransaction();
    this.getProfile();
    this.checkOwner();
  },
  methods: {
    fetchListPostApprove(){
      axios({
        url: `http://localhost:3000/api/user/${this.$route.params.id}/list-classified`,
        method: 'get',
      })
      .then(res => {
        this.listClassified[0] = res.data.id_classified.filter(item => item.status == 1);
        this.listClassified[1] = res.data.id_classified.filter(item => item.status == 0);
        this.listClassified[2] = res.data.id_classified.filter(item => item.status == 2);
      })
      .catch(err => console.log(err.message))
    },
    fetchListTransaction(){
      axios({
        url: `http://localhost:3000/api/user/${this.$route.params.id}/transaction`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : localStorage.getItem('token') || null
        },
      })
      .then(res => this.desserts = res.data.transaction)
      .catch(err => console.log(err.message))
    },
    showDetail(post){
      post.id_user = this.user;
      EventBus.$emit('detailPost', post)
    },
    getProfile(){
      axios.get(`http://localhost:3000/api/user/${this.$route.params.id}`)
      .then( res =>{
        this.user = res.data;
      })
      .catch(err => console.log(err.message))
    },
    checkOwner(){
      console.log(this.$route.params.id);
      if(this.$route.params.id == jwtDecode(localStorage.getItem('token')).data._id){
        this.isUser = true;
        console.log("1")
      } else{
        this.isUser = false;
        console.log("2")
      }
    },
    updateUser(){
      axios({
        url: `http://localhost:3000/api/user/${this.$route.params.id}`,
        method: 'put',
        data: this.user,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : localStorage.getItem('token') || null
        },

      })
      .then(res => {
        this.$router.go()
      })
      .catch(err => console.log(err.message))
    },
    handleFileUpload(event){
      var reader  = new FileReader();
      reader.onload = function(event){
        document.getElementsByClassName('preview-img')[0].src = reader.result;
      }
      this.avatar = event.target.files[0];
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
      }
    }, 
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
    position: absolute;
    overflow: hidden;
    bottom: 0;
    right: 0;
    border: none;
    font-size: 15px;
    background: #212529b8;
    border-radius: 50%;
    opacity: 0.5;
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
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

</style>
