<template>
    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog fixed-modal">

        <!-- Modal content-->
        <div class="modal-content" style="position: fixed">
            <!-- <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
            </div> -->
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-8">
                        
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
                                <h2> {{ poster.header }}</h2>
                                <div class="m-text-description-poster"> 
                                    <div class="m-price-poster"><span class="fa fa-money"></span> {{poster.price}}</div>
                                    <div class="area-poster"><span class="icon-frame"></span>
                                        {{ poster.area }}m<sup>2</sup>
                                    </div>    
                                    <div class="clearfix"></div>
                                    <div class="address-poster">
                                        Location : {{ poster.address }}
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nulla maiores libero necessitatibus culpa assumenda, consectetur iste molestias rem, deleniti officiis. Temporibus iure ipsa officia asperiores hic neque accusamus tempora?
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati doloremque explicabo delectus eligendi ducimus quos voluptatibus nobis culpa magni tempore dolore sed illum, ipsum vitae soluta est sapiente reiciendis. Reprehenderit?
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque maiores incidunt earum odio voluptatum, corrupti praesentium soluta eum pariatur aspernatur suscipit quasi alias assumenda doloremque ipsum fugit consequuntur qui!
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem magnam, quas architecto tempora rem ad itaque earum eos suscipit voluptatum odit necessitatibus est maxime, enim, expedita vel totam a magni?
                                    </p>
                                </div>
                                <div class="panel panel-default dd">
                                    <a href="#ddPanel" class="btn btn-o btn-default btn-block btn-lg align-left collapsed" data-toggle="collapse">Dropdown Panel<span class="fa fa-angle-down pull-right"></span></a>
                                    <div id="ddPanel" class="panel-collapse collapse" style="height: 0px;">
                                        <div class="panel-body">
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                        </div>
                                    </div>
                                </div>
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
                                    <div class="name osLight">{{ user.userName }}</div>
                                </div>
                                <div class="title">Real Estate Agent</div>
                                <div class="address">{{ user.address}}</div>
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
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
    </div>
</template>

<script>
import img from '../../assets/images/img.png';
export default {
    props: ['user','poster'],

}
</script>

<style>
    .images-poster{
        margin-bottom: 20px;
    }
    .profile-img {
        border-radius: 50%;
    }
</style>
