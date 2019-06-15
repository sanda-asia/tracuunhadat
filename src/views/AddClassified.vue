<template>
  <div class="wrapper">
    <div id="mapView">
        <google-map/>
    </div>
    <div id="contentHome">
        <div class="addPost">
            <h1>Tin đăng mới</h1>
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
                    <editor v-model="content" api-key="API_KEY" :init="init"></editor>
                    <!-- <editor api-key="API_KEY" :init="{plugins: 'wordcount'}"></editor> -->
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
                <!-- <div class="form-group">
                    <label>Tags</label>
                    <input type="text" class="form-control" id="tags" placeholder="Add a tag" style="display: none;">
                </div> -->
                <!-- <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="form-group">
                            <label>Image Gallery</label>
                            <input type="file" class="file" name="images" multiple data-show-upload="false" data-show-caption="false" data-show-remove="false" accept="image/jpeg,image/png,image/png" data-browse-class="btn btn-o btn-default" data-browse-label="Browse Images" @change="handleFilesUpload">
                            <p class="help-block">You can select multiple images at once</p>
                        </div>
                    </div>
                </div> -->
                <div class="form-group">
                    <label for=""></label>
                    <vue-upload-multiple-image
                    @upload-success="uploadImageSuccess"
                    @before-remove="beforeRemove"
                    @edit-image="editImage"
                    @data-change="dataChange"
                    :data-images="images"
                    ></vue-upload-multiple-image>
                </div>
                <div class="form-group">
                    <!-- <button type="button" class="btn btn-green btn-lg" @click="submitPost">Add Property</button> -->
                    <md-button class="md-info" @click="">Đăng Bài</md-button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import GoogleMap from "./components/GoogleMap";
import VueUploadMultipleImage from '../components/VueUploadMultipleImage'
import Editor from '@tinymce/tinymce-vue';
import selectAddress from '../data.json'

export default {
    // components: {
    
    // },
    // name: 'app',
    
    components: {
        VueUploadMultipleImage,
        GoogleMap,
        Editor
    },
    data () {
        return {
            images: [],
            init:{
                plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed tinycomments mentions linkchecker',
                toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
                // image_advtab: true,
                /* without images_upload_url set, Upload tab won't show up*/
                // images_upload_url: 'postAcceptor.php',
                // images_upload_handler: function (blobInfo, success, failure) {
                //     let formData = new FormData();
                //     formData.append('images', blobInfo.blob());
                //     axios({
                //         method: 'POST',
                //         url: `http://localhost:3000/user/5cfa9da027691e3944568ac4/upload`,
                //         data: formData,
                //         headers: {
                //             'Content-Type': 'multipart/form-data',
                //             'x-access-token' : localStorage.getItem('token')
                //         },
                //     })
                //     .then(function (response) {
                //         console.log(response);
                //         success(`http://localhost:3000/upload/users/${response.data.name_images[0]}`)
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });
                // }
            },
            content: '',
            title: '',
            price: '',
            area: '',
            category: '',
            requirement: '',
            address: '',
            level: '',
            time_post:'',
            selectAddress: selectAddress,
            provinces: [],
            selectProvince: -1,
            districts: [],
            selectDistrict: -1,
        }
    },
    methods: {
        uploadImageSuccess(formData, index, fileList) {
        console.log('data', formData, index, fileList)
        // Upload image api
        // axios.post('http://your-url-upload', { data: formData }).then(response => {
        //   console.log(response)
        // })
        },
        beforeRemove (index, done, fileList) {
        console.log('index', index, fileList)
        var r = confirm("remove image")
        if (r == true) {
            done()
        } else {
        }
        },
        editImage (formData, index, fileList) {
        console.log('edit data', formData, index, fileList)
        },
        dataChange (data) {
        console.log(data)
        }
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
    
    created(){
        for(let index in selectAddress){
            this.provinces.push(selectAddress[index].name);
        } 
    },

}
</script>
<style lang="scss" scoped>

h1{
    font-size: 25px;
    font-weight: bold;
    padding: 10px 0;
}


.wrapper{
}

#mapView{
    width: 50%;
    position: absolute;
    left: 0;
    top: 0
}

#contentHome{
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
}

.addPost {
    padding: 0 20px;
    height: 90%;
    overflow-y: scroll;
}

.input-group-addon {
    padding: 10px 12px;
    font-size: 13px;
    font-weight: normal;
    line-height: 1;
    color: #333;
    text-align: center;
    background-color: #f7f7f7;
    border: 1px solid #dfdfdf;
    border-left: none;
    border-radius: 2px;
    // width: 1%;
    white-space: nowrap;
    vertical-align: middle;
    display: table-cell;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
