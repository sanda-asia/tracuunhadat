<template>
   <div class="px-2">
      <form v-on:submit.prevent="onSubmit">
         <div class="form-group">
            <label for="FormControlInput1">Tiêu Đề</label>
            <input type="text" class="form-control" id="FormControlInput1" v-model="headerBlog" placeholder="Tiêu đề bài viết">
         </div>
         <div class="form-group">
            <label for="exampleFormControlSelect1">Tỉnh - Thành phố</label>
            <select class="form-control " id="exampleFormControlSelect1" v-model="selectProvince">
               <option value="-1">Tất Cả</option>
               <option v-for="(province, index) in provinces" :key = "province.index" :value="index">{{province.name}}</option>
            </select>
         </div>
         <!-- <div class="form-group">
            <label for="FormControlTextarea1">Nội dung</label>
            <textarea class="form-control" id="FormControlTextarea1" v-model="content"></textarea>
         </div> -->

         <div class="form-group">
            <editor v-model="content" api-key="API_KEY" :init="init"></editor>
         </div>
         <div class="form-group">
            <label for="FormControlInput1">Tiêu Đề</label>
            <input type="file" class="form-control" @change="handleUploadFile"/>
         </div>
         <div class="form-group">
            <button class="btn btn-primary" type="submit">Submit</button>
         </div>
      </form>
   </div>
</template>

<script>
import provinces from './../../data.json'
import axios from 'axios'
import Editor from '@tinymce/tinymce-vue'
export default{
   props: ['item'],
   data(){
      return{
         headerBlog: '',
         content: '',
         images: [],
         provinces,
         selectProvince: -1,
         province: '',
         init:{
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
                    success(`http://localhost:3000/upload/users/${response.data.name_images[0]}`)
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
      }
   },

   created(){
      if(this.item){
         console.log(this.item)
         this.headerBlog = this.item.headerBlog;
         this.content = this.item.content;
         this.selectProvince = 3; 
      }
   },

   methods : {
      onSubmit(){
         let url = "http://localhost:3000/blog/tao-blog";

         let formData = new FormData();
         for(var i = 0; i < this.images.length; i++){
            formData.append('images', this.images[i]);
         }

         formData.append('headerBlog', this.headerBlog);
         formData.append('content', this.content);
         console.log(formData)
         axios({
            method: 'POST',
            url,
            data: formData,
            headers: {
               'Content-Type': 'multipart/form-data',
               // 'x-access-token' : localStorage.getItem('token')
            },
         })

         this.$emit('onSubmit');
      },
      handleUploadFile(event){
         this.images = event.target.files;
         console.log(event.target.files);
      }
   },

   components: {
      editor: Editor
   }
}
</script>

<style scoped>
   /* width */
::-webkit-scrollbar {
  width: 0;
}
</style>
