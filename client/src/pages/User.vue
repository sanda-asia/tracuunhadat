<template>
    <!-- Content -->

    <div id="wrapper" class="full">
        <div id="content" class="max">
            <!-- <div class="singleTop whiteBg widthPage">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="userWidget-1">
                            <div class="avatar">
                                <img src="https://img.homedy.com/store/images/2019/01/16/161485a60e92edccb483.jpg_170x170.jpg" alt="avatar">
                                <div class="ops">
                                    <a href="#" class="btn btn-icon btn-round btn-o btn-white btn-sm"><span class="fa fa-envelope-o"></span></a>
                                    <a href="#" class="btn btn-icon btn-round btn-o btn-white btn-sm"><span class="fa fa-heart-o"></span></a>
                                </div>
                                <div class="name osLight">Jane Smith</div>
                            </div>
                            <div class="title">Real Estate Agent</div>
                            <div class="address">Los Angeles, CA, United States of America</div>
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
                                <li style="margin: 0;"><span>280</span>Followers</li>
                                <li style="margin: 0;"><span>345</span>Following</li>
                                <li style="margin: 0;"><span>36</span>Posts</li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="rightContainer widthPage">
                <div class="tabsContainer">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="active"><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{ name: ''}"><span class="icon-home"></span> Đang Bán</router-link></a></li>
                        <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{ name: '', query:{ find: 'b',page : page}}"><span class="icon-user"></span> Đang chờ duyệt</router-link></a></li>
                        <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{  name: '', query:{ find: 's',page : page}}"><span class="icon-bubbles"></span> Đã bán</router-link></a></li>
                        <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{  name: '', query:{ find: 'r',page : page}}"><span class="icon-bubbles"></span> Lịch sử giao dịch</router-link></a></li>
                    </ul>
                    <div class="" style="margin-bottom: 20px;">
                        <div class="filter">
                            <h1 class="osLight">Filter your results</h1>
                            <a href="#" class="handleFilter"><span class="icon-equalizer"></span></a>
                            <div class="clearfix"></div>
                            <form class="filterForm" style="display: none;">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                        <div class="formField">
                                            <label for="">Tỉnh - Thành Phố</label>
                                            <select class="form-control" v-model="selectProvince">
                                                <option value="-1">Tất Cả</option>
                                                <option v-for="(province, index) in provinces" :value="index">{{province}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                        <div class="formField">
                                            <label for="">Quận - Huyện</label>
                                            <select class="form-control" v-model="selectDistrict">
                                                <option value="-1">Tất Cả</option>
                                                <option v-for="(district, index) in districts" :value="index">{{district}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formItem">
                                        <div class="formField">
                                            <label>Khoảng Giá</label>
                                            <div class="slider priceSlider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                                <div class="sliderTooltip" style="left: 106.5px;">
                                                    <div class="stArrow"></div>
                                                    <div class="stLabel">0 VND <span class="fa fa-arrows-h"></span> 10,000,000,000 VND</div>
                                                </div>
                                            <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 25%; width: 50%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 25%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 75%;"></span></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formItem">
                                        <div class="formField">
                                            <label> Diện tích</label>
                                            <div class="slider areaSlider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                                <div class="sliderTooltip" style="left: 55.5px;">
                                                    <div class="stArrow"></div>
                                                    <div class="stLabel">5,000 Sq Ft <span class="fa fa-arrows-h"></span> 10,000 Sq Ft</div>
                                                </div>
                                            <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 25%; width: 25%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 25%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 50%;"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade active in" >
                            <list-poster />
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="row widthPage">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div class="row">
                        <div class="col-xs-3">
                            <div class="pc-email"><a href="#" class="btn btn-icon btn-round btn-o btn-magenta btn-sm"><span class="fa fa-envelope-o"></span></a></div>
                        </div>
                        <div class="col-xs-6">
                            <div class="profile-card">
                                <div class="pc-avatar"><img src="https://img.homedy.com/store/images/2019/01/16/161485a60e92edccb483.jpg_170x170.jpg" alt="avatar"></div>
                                <div class="pc-name">John Smith</div>
                            </div>
                        </div>
                        <div class="col-xs-3">
                            <div class="pc-fav"><a href="#" class="btn btn-icon btn-round btn-o btn-red btn-sm"><span class="fa fa-heart-o"></span></a></div>
                        </div>
                    </div>
                    <ul class="pc-stats">
                        <li><span>280</span>Followers</li>
                        <li><span>345</span>Following</li>
                        <li><span>36</span>Posts</li>
                    </ul>
                    <div class="clearfix"></div>

                    <div class="pc-title osLight" style="padding-top: 15px;">Contact info</div>
                    <div class="row pb10">
                        <div class="col-xs-4"><strong>Phone</strong></div>
                        <div class="col-xs-8 align-right">(123) 456 789</div>
                    </div>
                    <div class="row pb10">
                        <div class="col-xs-4"><strong>Mobile</strong></div>
                        <div class="col-xs-8 align-right">888 123 456 789</div>
                    </div>
                    <div class="row pb10">
                        <div class="col-xs-4"><strong>Email</strong></div>
                        <div class="col-xs-8 align-right"><a href="mailto:#" class="text-green">john.smith@email.com</a></div>
                    </div>
                    <div class="row pb10">
                        <div class="col-xs-4"><strong>Skype</strong></div>
                        <div class="col-xs-8 align-right">john.smith</div>
                    </div>
                    <div class="pc-social"><a href="#" class="btn btn-icon btn-facebook"><span class="fa fa-facebook"></span></a> <a href="#" class="btn btn-icon btn-twitter"><span class="fa fa-twitter"></span></a> <a href="#" class="btn btn-icon btn-google"><span class="fa fa-google-plus"></span></a> <a href="#" class="btn btn-icon btn-pinterest"><span class="fa fa-pinterest"></span></a></div>
                </div> 
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <div class="tabsContainer">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="active"><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{ name: ''}"><span class="icon-home"></span> Đang Bán</router-link></a></li>
                            <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{  name: '', query:{ find: 's',page : page}}"><span class="icon-bubbles"></span> Đã bán</router-link></a></li>
                            <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{  name: '', query:{ find: 'r',page : page}}"><span class="icon-bubbles"></span> Lịch sử giao dịch</router-link></a></li>
                        </ul>
                        <div class="" style="margin-bottom: 20px;">
                            <div class="filter">
                                <h1 class="osLight">Filter your results</h1>
                                <a href="#" class="handleFilter"><span class="icon-equalizer"></span></a>
                                <div class="clearfix"></div>
                                <form class="filterForm" style="display: none;">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                            <div class="formField">
                                                <label for="">Tỉnh - Thành Phố</label>
                                                <select class="form-control" v-model="selectProvince">
                                                    <option value="-1">Tất Cả</option>
                                                    <option v-for="(province, index) in provinces" :value="index">{{province}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                            <div class="formField">
                                                <label for="">Quận - Huyện</label>
                                                <select class="form-control" v-model="selectDistrict">
                                                    <option value="-1">Tất Cả</option>
                                                    <option v-for="(district, index) in districts" :value="index">{{district}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formItem">
                                            <div class="formField">
                                                <label>Khoảng Giá</label>
                                                <div class="slider priceSlider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                                    <div class="sliderTooltip" style="left: 106.5px;">
                                                        <div class="stArrow"></div>
                                                        <div class="stLabel">0 VND <span class="fa fa-arrows-h"></span> 10,000,000,000 VND</div>
                                                    </div>
                                                <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 25%; width: 50%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 25%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 75%;"></span></div>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formItem">
                                            <div class="formField">
                                                <label> Diện tích</label>
                                                <div class="slider areaSlider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                                    <div class="sliderTooltip" style="left: 55.5px;">
                                                        <div class="stArrow"></div>
                                                        <div class="stLabel">5,000 Sq Ft <span class="fa fa-arrows-h"></span> 10,000 Sq Ft</div>
                                                    </div>
                                                <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 25%; width: 25%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 25%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 50%;"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane fade active in" >
                                <list-poster />
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        
        <div class="clearfix"></div>
        <modal-pop-up v-bind:poster="posters[0]" v-bind:user="user"/>
    </div>
</template>


<script>
import ListPoster from '../layouts/ListPoster'
import address from '../data.json'

export default {
    name: "User",
    data() {
        return {
            page: this.$route.query.test?this.$route.query.test:1,
            activeTag: [],
            itemsPerPage: 3,
            posters : [
                {
                    id: 1,
                    header : 'Nhà  đất quận 1',
                    description : ', CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                    price: '5.000.000.000',
                    area: '10000',
                    address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
                },

            ],
            user : {
                id: 1,
                userName: 'Ngô Minh Nhí',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
                contact: '0325655533',
            },
            address: address,
            provinces: [],
            selectProvince: -1,
            districts: [],
            selectDistrict: -1
            };
    },

    mounted(){
        for(let index in address){
            this.provinces.push(address[index].name);
        } 
    },

    watch:{
        selectProvince(){
            this.districts = [];
            this.selectDistrict = -1;
            for(let index in address){
                if(index == this.selectProvince+1){
                    for(let key in address[index].districts){
                        this.districts.push(address[index].districts[key]);
                    }
                }
            }
        }
    },

    computed:{
        currentPage(){
            return this.$route.query.page?this.$route.query.page:1;
        },
        totalPages(){
            return Math.ceil(this.posters.length / 3);
        },
        displayPosters(){
            const index = (this.currentPage-1) * this.itemsPerPage;
            return this.posters.slice(index, index + this.itemsPerPage);
        },
        setActiveTag(){
            const tag = this.$route.query.f;
        }
    },
    components:{
        listPoster : ListPoster
    }
}
</script>

<style scoped>
/* #home {
    margin-top: 60px;
} */
#content.max {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
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