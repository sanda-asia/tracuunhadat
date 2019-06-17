<template>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                    <!-- Page Content -->
                <div class="container">

                <div class="row">

                    <!-- Blog Entries Column -->
                    <div class="col-md-9 detail" >

                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item"><a href="#">Trang Chủ</a></li>
                          <li class="breadcrumb-item"><a href="#">Rao Vặt</a></li>
                          <li class="breadcrumb-item active" aria-current="page">{{postDetail.title}}</li>
                        </ol>
                      </nav>

                      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="https://via.placeholder.com/850x450" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="https://via.placeholder.com/850x450" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="https://via.placeholder.com/850x450" class="d-block w-100" alt="...">
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>

                      <h1 class="text-h1">{{postDetail.title}}</h1>
                      <div class="m-text-description-poster"> 
                          <div class="m-price-poster"><i class="fas fa-money-bill-wave"></i>{{postDetail.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</div>
                          <div class="area-poster">
                            <span class="icon-frame"></span>
                            {{postDetail.area}}m<sup>2</sup>
                          </div>
                          <div class="box-icon">
                            <i class="far fa-bookmark icon-bookmark"></i>
                          </div>
                          <div class="clearfix"></div>
                          <div class="address-poster">
                            <i class="fas fa-map-marked"></i> Location : {{postDetail.address}}
                          </div>
                      </div>
                      <div>
                          <p v-html="postDetail.content"></p>
                      </div>
                      <div class="fb-comments" :data-href="`https://http://localhost:8080/rao-vat/${postDetail}`" data-width="100%" data-numposts="10"></div>
                    </div>

                    <!-- Sidebar Widgets Column -->
                    <div class="col-md-3">
                        <div class="card">
                          <div class="card-header">
                            <div class="profile_pic">
                              <img src="https://bootsnipp.com/img/avatars/92ff0456eb6106d0c1ae8ab5f1fe0afe2d2d25f2.jpg">
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="d-lfex justify-content-center flex-column">
                              <div class="name_container">
                                <div class="name">{{postDetail.id_user.username}}</div>
                              </div>
                              <div class="address">{{postDetail.id_user.address}}</div>
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
                            <div class="">
                              <div class="follow_btn">Nhấn để hiển thị số</div>
                            </div>
                          </div>
                        </div>
                        <!-- Side Widget -->
                        <div class="card my-4">
                            <img class="card-img-top" src="https://2.bp.blogspot.com/-vvG5hMTFOro/W6RaoxdAikI/AAAAAAAAK1k/jezYdP7fvfYvt15Jv8a0agrGQE2lMU8YgCKgBGAs/s1600/MASAI-2.jpg" alt="Card image cap">
                        </div>
                    </div>
                    
                </div>
                <!-- /.row -->

                </div>
                <!-- /.container -->
            </div>
        </div>
    </div>
</template>
<script>
import noUiSlider from "nouislider";
import EventBus from '../../EventBus'

export default {
  data(){
    return{
      postDetail: null,
      // url_comment: `http://localhost:8080/rao-vat/`,
    }
  },
  created(){
    EventBus.$on('detailPost', this.handler);
  },
  mounted () {
    window.FB.XFBML.parse();
  },
  methods:{
    handler(e){
      // alert('recieved: ', e)
      this.postDetail = e;
    }
  },
  destroyed() {
    EventBus.$off('detailPost', this.handler);
  },
};
</script>

<style scoped>

.modal-dialog.modal-lg {
    max-width: 80%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
}
.modal-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    height: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
}

.detail{
    overflow-y: scroll;
    /* height: 670px; */
    height: 100%;
}

.text-h1{
  font-size: 20px;
  font-weight: bold;
}

.icon-bookmark{
    font-size: 30px;
}

.m-price-poster{
    float: left;
    width: 50%;
    color: #c90927;
    font-size: 18px;
    font-weight: bold;
}

.area-poster{
    float: left;
    width: 40%;
    font-size: 18px;
    font-weight: bold;
}

.box-icon{
    float: left;
    width: 10%;
    font-size: 18px;
    font-weight: bold;
}

.m-text-description-poster{
  margin: 25px 0;
}

@media only screen and (min-width: 1264px){
.container {
    max-width: 100%;
    height: 100%;
}}

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
				border:0 !important;
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
			.card-footer{
				padding: 0 !important;
				background: #fff !important;
				display: flex;
				border-top: 0 !important;
			}
			.message{
				display: flex;
				justify-content: center;
				padding: 10px;
				width: 50%;
				text-transform: uppercase;
				background: #f39c12;
				color: #fff;
				cursor: pointer;
				border-bottom-right-radius: calc(0.25rem - 1px);
			}

			.message::before{
				font-family: "Font Awesome 5 Free";
				content: "\f27a";
				font-weight: 600;
				margin-right: 5px;
			}
		.view_profile{
				display: flex;
				justify-content: center;
				padding: 10px;
				width: 50%;
				text-transform: uppercase;
				background: #e74c3c;
				color: #fff;
				cursor: pointer;
				border-bottom-left-radius: calc(0.25rem - 1px);
				
			}
			.view_profile::before{
				font-family: "Font Awesome 5 Free";
				content: "\f406";
				margin-right: 5px;
				font-weight: 600;
			}

</style>