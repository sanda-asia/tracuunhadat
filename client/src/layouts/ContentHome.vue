<template>
    <div id="content" class="content-home">
        <div class="tabsContainer">
            <ul class="nav nav-tabs" role="tablist">
<<<<<<< HEAD:client/src/components/Home/ContentHome.vue
                <li class="active"><a href="#home" role="tab" data-toggle="tab"><span class="icon-home"></span> All</a></li>
                <li class=""><a href="#profile" role="tab" data-toggle="tab"><span class="icon-user"></span> Buy</a></li>
                <li class=""><a href="#notifications" role="tab" data-toggle="tab"><span class="icon-bubbles"></span> Sell</a></li>
                <li class=""><a href="#rent" role="tab" data-toggle="tab"><span class="icon-bubbles"></span> Rent</a></li>
=======
                <li class="active"><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{ name: 'AllPoster'}"><span class="icon-home"></span> All</router-link></a></li>
                <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{ name: 'AllPoster', query:{ f: 'b',page : page}}"><span class="icon-user"></span> Buy</router-link></a></li>
                <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{  name: 'AllPoster', query:{ f: 's',page : page}}"><span class="icon-bubbles"></span> Sell</router-link></a></li>
                <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{  name: 'AllPoster', query:{ f: 'r',page : page}}"><span class="icon-bubbles"></span> Rent</router-link></a></li>
>>>>>>> them blog:client/src/layouts/ContentHome.vue
            </ul>
            <div class="tab-content" style="margin-bottom: 20px;">
                <div class="filter">
                    <h1 class="osLight">Filter your results</h1>
                    <a href="#" class="handleFilter"><span class="icon-equalizer"></span></a>
                    <div class="clearfix"></div>
                    <form class="filterForm" style="display: none;">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                <div class="formField">
                                    <label>Property Type</label>
                                    <a href="#" data-toggle="dropdown" class="btn btn-gray dropdown-btn dropdown-toggle propTypeSelect">
                                        <span class="dropdown-label">All</span>
                                        <span class="fa fa-angle-down dsArrow"></span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-select full" role="menu">
                                        <li class="active"><input type="radio" name="pType" checked="checked"><a href="#">All</a></li>
                                        <li><input type="radio" name="pType"><a href="#">Rent</a></li>
                                        <li><input type="radio" name="pType"><a href="#">Sale</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                <div class="formField">
                                    <label>Property Type</label>
                                    <a href="#" data-toggle="dropdown" class="btn btn-gray dropdown-btn dropdown-toggle propTypeSelect">
                                        <span class="dropdown-label">All</span>
                                        <span class="fa fa-angle-down dsArrow"></span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-select full" role="menu">
                                        <li class="active"><input type="radio" name="pType" checked="checked"><a href="#">All</a></li>
                                        <li><input type="radio" name="pType"><a href="#">Rent</a></li>
                                        <li><input type="radio" name="pType"><a href="#">Sale</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                <div class="formField">
                                    <label>Property Type</label>
                                    <a href="#" data-toggle="dropdown" class="btn btn-gray dropdown-btn dropdown-toggle propTypeSelect">
                                        <span class="dropdown-label">All</span>
                                        <span class="fa fa-angle-down dsArrow"></span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-select full" role="menu">
                                        <li class="active"><input type="radio" name="pType" checked="checked"><a href="#">All</a></li>
                                        <li><input type="radio" name="pType"><a href="#">Rent</a></li>
                                        <li><input type="radio" name="pType"><a href="#">Sale</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formItem">
                                <div class="formField">
                                    <label>Price Range</label>
                                    <div class="slider priceSlider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                        <div class="sliderTooltip" style="left: 106.5px;">
                                            <div class="stArrow"></div>
                                            <div class="stLabel">$500,000 <span class="fa fa-arrows-h"></span> $1,500,000</div>
                                        </div>
                                    <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 25%; width: 50%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 25%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 75%;"></span></div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 formItem">
                                <div class="formField">
                                    <label>Area Range</label>
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
                <div class="tab-pane fade active in">
                   <router-view></router-view>
                </div>
            </div>
        </div>
        <modal-pop-up v-bind:poster="posters[1]" v-bind:user="user" />
    </div>
    
</template>

<script>
export default {
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
            {
                id: 2,
                header : 'Nhà  đất quận 2',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 3,
                header : 'Nhà  đất quận 3',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 4,
                header : 'Nhà  đất quận 4',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 5,
                header : 'Nhà  đất quận 5',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 6,
                header : 'Nhà  đất quận 6',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 7,
                header : 'Nhà  đất quận 7',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 8,
                header : 'Nhà  đất quận 8',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 9,
                header : 'Nhà  đất quận 9',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
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
        };
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
    mounted(){
        // this.fetchPosters();
    },
    methods:{
        reply: function() {
        this.msg = "I'm doing great ! Thanks !";
        },
        async fetchPosters(){
        return axios({
            method: 'get',
            url: 'http://localhost:8081/posters',

        })
            .then((response) => {
            this.movies = response.data.posters;
            })
            .catch(() => {

            });
        },
    },
}
</script>

<style>
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgb(156, 150, 150);
}

</style>
