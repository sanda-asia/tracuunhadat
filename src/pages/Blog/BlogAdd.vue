<template>
    <div id="wrapper" class="full" >
        <div id="content" class="max">
            <div class="tables widthPage">
                <div class="col-xs-12 col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">Basic Form</div>
                        <div class="panel-body">
                            <form role="form">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Tiêu đề</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter title">
                                </div>
                                <div class="form-group">
                                    <label>Tags</label>
                                    <input type="text" class="form-control" id="tags" placeholder="Add tag" style="display: none;">
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
                                    <label>Nội dung</label>
                                    <textarea id="full-featured"></textarea>
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
                </div>
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
    data() {
        return {
            selectAddress: selectAddress,
            provinces: [],
            selectProvince: -1,
            districts: [],
            selectDistrict: -1,
            user: ''
        };
    },

    mounted(){
        tinymce.init({
            selector: "textarea#full-featured",  // change this value according to your HTML
            // menubar: "file",
            plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed tinycomments mentions linkchecker',
            toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
            image_advtab: true,
            /* without images_upload_url set, Upload tab won't show up*/
            // images_upload_url: 'postAcceptor.php',
            images_upload_handler: function (blobInfo, success, failure) {
                let formData = new FormData();
                formData.append('images', blobInfo.blob());
                axios({
                    method: 'POST',
                    url: `http://localhost:3000/user/5cfa9da027691e3944568ac4/upload`,
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'x-access-token' : localStorage.getItem('token')
                    },
                })
                .then(function (response) {
                    console.log(response);
                    success(`http://localhost:8080/static/upload/users/${response.data.name_images[0]}`)
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        });
    },

    methods:{
        async submitPost(){

        },
        handleFilesUpload(event){
            console.log(event)
            this.images = event.target.files;
        },
    },
    created(){
        this.user = jwt_decode(localStorage.getItem('token')).data;
        for(let index in selectAddress){
            this.provinces.push(selectAddress[index].name);
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
}
</script>

<style scoped>
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
        height: 100%;
    }
}
@media (max-width: 480px) {
    .widthPage{
        width: 100%; 
        /* margin: auto; */
    }
}
</style>
