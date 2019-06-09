<template>
    <!-- Content -->

    <div id="wrapper" class="full">
        <div id="content" class="max">
            <div class="row widthPage">
                    <div class="row" style="height:100%">
                        <div class="col-md-8" id="scroll-able">
                            <div class="wrapper-left-pop-up detail-info-poster">
                                <ol class="breadcrumb">
                                    <li><a href="#"><span class="icon-home"></span> Home</a></li>
                                    <li><a href="#"><span class="icon-layers"></span> Components</a></li>
                                    <li class="active">Breadcrumb</li>
                                </ol>
                                <div class="wrapper-img-poster">
                                    <div id="propWidget-3" class="carousel slide propWidget-3" data-ride="carousel">
                                        <h3 class="osLight">Luxury Mansion</h3>
                                        <div class="address">39 Remsen St, Brooklyn, NY 11201, USA</div>
                                        <div class="priceCap">
                                            <div class="price">$2,350,000</div>
                                            <div class="type">FOR RENT</div>
                                            <div class="clearfix"></div>
                                        </div>
                                        <ol class="carousel-indicators">
                                            <li data-target="#propWidget-3" data-slide-to="0" class="active"></li>
                                            <li data-target="#propWidget-3" data-slide-to="1"></li>
                                            <li data-target="#propWidget-3" data-slide-to="2"></li>
                                            <li data-target="#propWidget-3" data-slide-to="3"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="item active">
                                                <a href="#"><img :src="require('../../assets/images/1.jpg')" alt="First slide"></a>
                                                <div class="container">
                                                    <div class="carousel-caption">
                                                        <img :src="require('../../assets/images/1.jpg')" alt="image">
                                                        <div class="opac"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <a href="#"><img :src="require('../../assets/images/1.jpg')" alt="Second slide"></a>
                                                <div class="container">
                                                    <div class="carousel-caption">
                                                        <img :src="require('../../assets/images/1.jpg')" alt="image">
                                                        <div class="opac"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <a href="#"><img :src="require('../../assets/images/1.jpg')" alt="Third slide"></a>
                                                <div class="container">
                                                    <div class="carousel-caption">
                                                        <img :src="require('../../assets/images/1.jpg')" alt="image">
                                                        <div class="opac"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <a href="#"><img :src="require('../../assets/images/1.jpg')" alt="Fourth slide"></a>
                                                <div class="container">
                                                    <div class="carousel-caption">
                                                        <img :src="require('../../assets/images/1.jpg')" alt="image">
                                                        <div class="opac"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="left carousel-control" href="#propWidget-3" role="button" data-slide="prev"><span class="fa fa-chevron-left"></span></a>
                                        <a class="right carousel-control" href="#propWidget-3" role="button" data-slide="next"><span class="fa fa-chevron-right"></span></a>
                                    </div>
                                </div>
                                <div class="">
                                    <h2 style="font-size: 15px"> {{ poster.title }}</h2>
                                    <div class="m-text-description-poster"> 
                                        <div class="m-price-poster"><span class="fa fa-money"></span> {{poster.price}}</div>
                                        <div class="area-poster"><span class="icon-frame"></span>
                                            {{ poster.area }}m<sup>2</sup>
                                        </div>    
                                        <div class="clearfix"></div>
                                        <div class="address-poster">
                                            <!-- Location : {{ poster.address }} -->
                                        </div>
                                    </div>
                                    <div class="share">
                                        <h3>Share on Social Networks</h3>
                                        <div class="row">
                                            <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 shareItem">
                                                <a href="#" class="btn btn-sm btn-round btn-o btn-facebook"><span class="fa fa-facebook"></span> Facebook</a>
                                            </div>
                                            <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 shareItem">
                                                <a href="#" class="btn btn-sm btn-round btn-o btn-twitter"><span class="fa fa-twitter"></span> Twitter</a>
                                            </div>
                                            <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 shareItem">
                                                <a href="#" class="btn btn-sm btn-round btn-o btn-google"><span class="fa fa-google-plus"></span> Google+</a>
                                            </div>
                                            <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 shareItem">
                                                <a href="#" class="btn btn-sm btn-round btn-o btn-pinterest"><span class="fa fa-pinterest"></span> Pinterest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Tổng Quan</h3>
                                    <p>{{poster.content}}</p>
                                </div> 
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="detail-user">
                                <div class="userWidget-1">
                                    <div class="avatar">
                                        <img :src="require('../../assets/images/img1.png')" alt="avatar">
                                        <div class="ops">
                                            <a href="#" class="btn btn-icon btn-round btn-o btn-white btn-sm"><span class="fa fa-envelope-o"></span></a>
                                            <a href="#" class="btn btn-icon btn-round btn-o btn-white btn-sm"><span class="fa fa-heart-o"></span></a>
                                        </div>
                                        <div class="name osLight">{{ poster.id_user.username }}</div>
                                    </div>
                                    <div class="title">Real Estate Agent</div>
                                    <div class="address">{{ poster.id_user.address}}</div>
                                    <div class="rating">
                                        <div class="number text-green osLight">4.5</div>
                                        <div class="stars">
                                            <ul>
                                                <li><span class="fa fa-star star-1"></span></li>
                                                <li><span class="fa fa-star star-2"></span></li>
                                                <li><span class="fa fa-star star-3"></span></li>
                                                <li><span class="fa fa-star star-4"></span></li>
                                                <li><span class="fa fa-star-o star-5"></span></li>
                                            </ul>
                                            <div class="clearfix"></div>
                                            <div class="reviews">123 Reviews</div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <ul class="stats">
                                        <li><span>280</span>Followers</li>
                                        <li><span>345</span>Following</li>
                                        <li><span>36</span>Posts</li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="detail-poster">

                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: "ClassifiedView",
    data() {
        return {
            poster: ''
        };
    },

    created(){
        axios.get(`http://localhost:3000/classified/post-details/${this.$route.params.id}`)
        .then(res=>{
            this.poster = res.data.data
        })
        .catch(err => alert(err.message))
    },

    mounted(){
    },
}
</script>

<style scoped>

#content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
.userWidget-1 .title {
    font-size: 15px !important;
}
#content h2 {
    font-size: 15px;
    line-height: 25px;
    margin: 0;
    /* padding: 0 0 0 10px; */
    font-weight: bold;
    border-bottom: none;
    text-align: left;
}

.tab-content {
    height: 100%;
    /* overflow: hidden; */
}
@media (min-width: 768px) {
    .widthPage{
        width: 80%;
        /* margin: auto; */
        margin: 20px auto;
        background-color: white;
        padding: 20px;

    }
}
@media (max-width: 480px) {
    .widthPage{
        width: 100%; 
        /* margin: auto; */
    }
}
</style>