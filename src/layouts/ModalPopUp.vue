<template>
    <!-- Modal -->
    <div id="myModal1" class="modal fade" role="dialog">
        <div class="modal-dialog fixed-modal">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-body">
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
                                                <a href="#"><img :src="require('../assets/images/1.jpg')" alt="First slide"></a>
                                                <div class="container">
                                                    <div class="carousel-caption">
                                                        <img :src="require('../assets/images/1.jpg')" alt="image">
                                                        <div class="opac"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <a href="#"><img :src="require('../assets/images/1.jpg')" alt="Second slide"></a>
                                                <div class="container">
                                                    <div class="carousel-caption">
                                                        <img :src="require('../assets/images/1.jpg')" alt="image">
                                                        <div class="opac"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <a href="#"><img :src="require('../assets/images/1.jpg')" alt="Third slide"></a>
                                                <div class="container">
                                                    <div class="carousel-caption">
                                                        <img :src="require('../assets/images/1.jpg')" alt="image">
                                                        <div class="opac"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <a href="#"><img :src="require('../assets/images/1.jpg')" alt="Fourth slide"></a>
                                                <div class="container">
                                                    <div class="carousel-caption">
                                                        <img :src="require('../assets/images/1.jpg')" alt="image">
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
                                    <h2 style="font-size: 18px"> {{ poster.title }}</h2>
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
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium excepturi, repellat non earum soluta culpa, sint dolores ad molestiae vero qui error eveniet. Fuga blanditiis repellat hic. Neque, ipsa quaerat!</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, pariatur nesciunt temporibus laudantium necessitatibus distinctio incidunt non maiores enim iusto ad officiis consequatur excepturi vitae itaque ducimus. Quae, rem? Placeat!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat quas nemo iure quis facilis vero, quisquam ad id quam ut, dolorum voluptatem alias sunt, et tenetur eos! Saepe, eum!</p>
                                    <h3>Tiện ích</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium excepturi, repellat non earum soluta culpa, sint dolores ad molestiae vero qui error eveniet. Fuga blanditiis repellat hic. Neque, ipsa quaerat!</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, pariatur nesciunt temporibus laudantium necessitatibus distinctio incidunt non maiores enim iusto ad officiis consequatur excepturi vitae itaque ducimus. Quae, rem? Placeat!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat quas nemo iure quis facilis vero, quisquam ad id quam ut, dolorum voluptatem alias sunt, et tenetur eos! Saepe, eum!</p>
                                    
                                </div> 
                            </div>

                        </div>
                        <div class="col-md-4">
                            <div class="detail-user">
                                <div class="userWidget-1">
                                    <div class="avatar">
                                        <img :src="require('../assets/images/img1.png')" alt="avatar">
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

        </div>
    </div>
</template>

<script>
import img from '../assets/images/img.png';
export default {
    props: ['poster'],

}
</script>

<style scoped>
    .images-poster{
        margin-bottom: 20px;
    }
    .profile-img {
        border-radius: 50%;
    }

    @media (min-width: 768px){
        .modal-dialog {
            /* width: 600px; */
            margin: 0px auto;
        }
        .modal-open .modal {
            overflow-x: hidden;
            overflow-y: hidden;
        }
        .fixed-modal {
            position: fixed;
            /* margin-top: 0; */
            left: 0;
            right: 0;
            height: 100%;
        }
        .modal-content {
            position: fixed;
            background-color: #fff;
            background-clip: padding-box;
            /* border: 1px solid #999; */
            border: 1px solid rgba(0, 0, 0, .2);
            border-radius: 3px;
            outline: 0;
            left: 0;
            right: 0;
            height: 100%;
        }
        .modal-body {
            position: relative;
            padding: 15px;
            height: 100%;
        }
        
        #scroll-able{
            overflow-y: scroll;
            height: 100%;
        }
    }
    .description, .amenities, .share, .similar {
        padding: 0;
    }
    #content h2 {
        margin: 0;
        border-bottom: none;
    }
    .share {
        text-align: left;
        margin: 20px 0;
    }
</style>
