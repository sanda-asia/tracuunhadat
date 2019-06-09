<template>
        <!-- Content -->
        <div id="wrapper">
            <div id="mapView" class="mob-min"><div class="mapPlaceholder"><span class="fa fa-spin fa-spinner"></span> Loading map...</div></div>
            <div id="content" class="mob-max">
                <div class="rightContainer">
                    <h1>Cập nhập tin đăng</h1>
                    <form role="form" method="POST" enctype="multipart/form-data">
                        <div class="form-group">
                            <label>Tiêu đề</label>
                            <input type="text" class="form-control" v-model="title" required>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label for="">Danh Mục tin đăng</label>
                                    <select class="form-control" v-model="category" required>
                                        <option>Căn hộ/Chung cư</option>
                                        <option>Nhà ở</option>
                                        <option>Đất</option>
                                        <option>Văn phòng, mặt bằng kinh doanh</option>
                                        <option>Phòng trọ</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label for="">Level</label>
                                    <select class="form-control" v-model="level" required>
                                        <option value="0">Tin thường - 0đ/</option>
                                        <option value="1">Tin vip - 10.000đ</option>
                                        <option value="2">Tin đặc biệt - 20.000đ</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label>Số ngày</label>
                                    <div class="input-group">
                                        <input class="form-control" type="text" required v-model="time_post">
                                        <div class="input-group-addon">Ngày</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label for="">Loại tin đăng</label>
                                    <select class="form-control" v-model="requirement" required>
                                        <option>Cần Mua</option>
                                        <option>Cần Bán</option>
                                        <option>Cho Thuê</option>
                                        <option>Cần Thuê</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label>Giá</label>
                                    <div class="input-group">
                                        <input class="form-control" type="text" v-model="price" required>
                                        <div class="input-group-addon">VND</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label>Diện tích</label>
                                    <div class="input-group">
                                        <input class="form-control" type="text" v-model="area" required>
                                        <div class="input-group-addon">m<sup>2</sup></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Mô tả tổng quan</label>
                            <textarea class="form-control" rows="4" v-model="content" required></textarea>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                <div class="form-group">
                                    <label for="">Tỉnh - Thành Phố</label>
                                    <select class="form-control" v-model="selectProvince" required>
                                        <option value="-1">Tất Cả</option>
                                        <option v-for="(province, index) in provinces" :value="index">{{province}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 formItem">
                                <div class="form-group">
                                    <label for="">Quận - Huyện</label>
                                    <select class="form-control" v-model="selectDistrict" required>
                                        <option value="-1">Tất Cả</option>
                                        <option v-for="(district, index) in districts" :value="index">{{district}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label>Địa chỉ <span id="latitude" class="label label-default"></span> <span id="longitude" class="label label-default"></span></label>
                                    <input class="form-control" type="text" id="" placeholder="Enter a Location" autocomplete="off" v-model="address" required>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Tags</label>
                            <input type="text" class="form-control" id="tags" placeholder="Add a tag" style="display: none;">
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                    <label>Image Gallery</label>
                                    <input type="file" class="file" name="images" multiple data-show-upload="false" data-show-caption="false" data-show-remove="false" accept="image/jpeg,image/png,image/png" data-browse-class="btn btn-o btn-default" data-browse-label="Browse Images" @change="handleFilesUpload">
                                    <p class="help-block">You can select multiple images at once</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-green btn-lg" @click="submitPost">Add Property</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
</template>

<script>
import selectAddress from '../../data.json'
import axios from 'axios'
import swal from 'sweetalert'
import jwt_decode from 'jwt-decode'

export default {
    name: 'ClassifiedEdit',
    data() {
        return {
            selectAddress: selectAddress,
            provinces: [],
            selectProvince: -1,
            districts: [],
            selectDistrict: -1,
            title: '',
            price: '',
            area: '',
            content: '',
            category: '',
            requirement: '',
            address: '',
            time_post: '',
            level: '',
            images:[], 
            post: '',
        };
    },
    async created(){
        for(let index in selectAddress){
            this.provinces.push(selectAddress[index].name);
        } 
        await axios.get(`http://localhost:3000/classified/post-details/${this.$route.params.id}`)
        .then(res=>{
            // this.post = res.data.data;
            this.title = res.data.data.title;
            this.price = res.data.data.price;
            this.area = res.data.data.area;
            this.content = res.data.data.content;
            this.category = res.data.data.category;
            this.requirement = res.data.data.requirement;
            this.address = res.data.data.address;
            this.time_post = res.data.data.time_post;
            this.level = res.data.data.level;
            this.images = res.data.data.images;
        })
        .catch(err => alert(err.message))
    },

    mounted(){

    },

    methods:{
        async submitPost(){

            let formData = new FormData();
            let files = []
            for( var i = 0; i < this.images.length; i++ ){
                let file = this.images[i];
                files.push(file);
            }
            formData.append('images', files);
            console.log(formData);
            await axios({
                method: 'POST',
                url: `http://localhost:3000/user/${this.$route.params.id}/upload`,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token' : localStorage.getItem('token')
                },
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            // if(){
                let nameImg = [];

                let date = Date.now();

                for( var i = 0; i < this.images.length; i++ ){
                    nameImg.push(`${date}_${this.images[i].name}`);

                }
                await axios({
                    method: 'PUT',
                    url: `http://localhost:3000/classified/posts/${this.$route.params.id}`,
                    data: {
                        title: this.title,
                        price: this.price,
                        area: this.area,
                        content: this.content,
                        category: this.category,
                        requirement: this.requirement,
                        address: `${this.address}, ${this.districts[this.selectDistrict]}, ${this.provinces[this.selectProvince]}`,
                        time_post: this.time_post,
                        level: this.level,
                        images: nameImg
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token' : localStorage.getItem('token') || null
                    },
                })
                .then(function (response) {
                    console.log(response);
                    if(response.data.status == false){
                        swal(
                            'Bạn cần đăng nhập để đăng bài!',
                        );
                    }else{
                        swal(
                            'Tin đăng đã được gửi!',
                        );
                        router.push({name: 'Home'})
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            // } else{
            //     swal(
            //         'Vui lòng nhập đầy đủ thông tin!',
            //     );
            // }

        },
        handleFilesUpload(event){
            console.log(event)
            this.images = event.target.files;
        },
    },

    watch:{
        selectProvince(){
            this.districts = [];
            this.selectDistrict = -1;
            for(let index in selectAddress){
                if(index == this.selectProvince+1){
                    for(let key in selectAddress[index].districts){
                        this.districts.push(selectAddress[index].districts[key]);
                    }
                }
            }
        }
    },
}
</script>

<style scoped>
    #wrapper {
        left: 70px;
        top: 60px;
        margin: 0;
        position: fixed;
    }
    #content {
        background-color: #f3f3f3;
        width: 50%;
        height: 100px;
        border-top: 1px solid #e8e8e8;
        float: right;
        -webkit-overflow-scrolling: touch;
        margin-right: 0px;
        overflow-y: scroll;
    }
</style>
