<template>
    <div id="content" class="content-home">
        <div class="tabsContainer">
            <ul class="nav nav-tabs" role="tablist">
                <li class="active"><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{ name: 'Classified'}"><span class="icon-home"></span> All</router-link></a></li>
                <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{ name: 'Classified', query:{ find: 'b',page : page}}"><span class="icon-user"></span> Buy</router-link></a></li>
                <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{  name: 'Classified', query:{ find: 's',page : page}}"><span class="icon-bubbles"></span> Sell</router-link></a></li>
                <li class=""><a href="" role="tab" data-toggle="tab"><router-link v-bind:to="{  name: 'Classified', query:{ find: 'r',page : page}}"><span class="icon-bubbles"></span> Rent</router-link></a></li>
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
                            <!-- <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                <div class="formField">
                                    <label>Phường - Xã</label>
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
                            </div> -->
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
                <div class="tab-pane fade active in">
                   <list-poster :posters="posters" />
                </div>
            </div>
        </div>
        <modal-pop-up v-bind:poster="posters[0]" v-bind:user="user"/>
    </div>
    
</template>

<script>
import ListPoster from './ListPoster'
import address from '../data.json'
import axios from 'axios'

export default {
    data() {
        return {
            page: this.$route.query.test?this.$route.query.test:1,
            activeTag: [],
            itemsPerPage: 3,
            posters : [],
            address: address,
            provinces: [],
            selectProvince: -1,
            districts: [],
            selectDistrict: -1
        };
    },

    created() {
        return axios.get('http://localhost:3000/classified/posts-approved')
        .then(response =>{
            this.posters = response.data.data;
            console.log(response.data)
        })
        .catch(err=>{
            console.log("quoc cho")
        })
    },

    methods:{
        // getAllListClassified(){
        //     return axios.get('http://localhost:3000/classified/posts-approved')
        //     .then(response =>{
        //         this.posters = response.data.data;
        //         console.log(response.data)
        //     })
        //     .catch(err=>{
        //         console.log("quoc cho")
        //     })
        // }
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
    components: {
        listPoster : ListPoster,
    }
}
</script>

<style scoped>

.tab-pane {
    padding: 0 5px;
    font-size: 13px;
}

</style>
