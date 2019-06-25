<template>
   <div class="px-2">
      <form v-on:submit.prevent="onSubmit">
         <div class="form-group">
            <label for="FormControlInput1">Tiêu Đề</label>
            <input type="text" class="form-control" id="FormControlInput1" v-model="headerBlog" placeholder="Tiêu đề bài viết">
         </div>
         <div class="form-group">
            <label for="FormControlInput2">Tác giả</label>
            <input type="text" class="form-control" id="FormControlInput2" v-model="author">
         </div>
         <div class="form-group">
            <label for="exampleFormControlSelect1">Tỉnh - Thành phố</label>
            <select class="form-control " id="exampleFormControlSelect1" v-model="province">
               <option value="Tất cả">Tất Cả</option>
               <option v-for="(province, index) in provinces" 
                        :key = "index" 
                        :value="province.name">
               {{province.name}}
               </option>
            </select>
         </div>
         <div class="form-group">
            <editor v-model="content" api-key="API_KEY" :init="init"></editor>
         </div>
         <div class="form-group">
            <label for="FormControlInput1">Ảnh đại diện</label>
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
   components: {
      editor: Editor
   },
   data(){
      return{
         headerBlog: '',
         content: '',
         images: [],
         provinces,
         province: 'Tất cả',
         author: 'Admin',
         init:{
            plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed tinycomments mentions linkchecker',
            toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
            image_advtab: true,
            images_upload_handler: function (blobInfo, success, failure) {
                let formData = new FormData();
                formData.append('images', blobInfo.blob());
                axios({
                    method: 'POST',
                    url: `http://localhost:3000/api/user/5d076d7b4346db220c64aa86/upload`,
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
      if(this.$props.item){
         this.headerBlog = this.$props.item.headerBlog;
         this.content = this.$props.item.content;
         this.author = this.$props.item.author; 
         this.province = this.$props.item.province;
      }
   },

   methods : {
      onSubmit(){
         let formData = new FormData();
         for(var i = 0; i < this.images.length; i++){
            formData.append('images', this.images[i]);
         }
         formData.append('headerBlog', this.headerBlog);
         formData.append('content', this.content);
         formData.append('author', this.author);
         formData.append('province', this.province);

         let url = ''
         let method = ''
         if(this.$props.item){
            url = `http://localhost:3000/api/blog/${this.$props.item._id}`,
            method = 'PUT'
         }
         else{
            url = "http://localhost:3000/api/blog";
            method = 'POST'
         }
         axios({
            method,
            url,
            data: formData,
            headers: {
               'Content-Type': 'multipart/form-data',
               'x-access-token' : localStorage.getItem('token')
            },
         })
         .then(req => this.$emit('onSubmit'))
         .catch(err => console.log(error));
         
         
      },
      handleUploadFile(event){
         this.images = event.target.files;
         console.log(event.target.files);
      }
   }
}
</script>

<style scoped>
   /* width */
::-webkit-scrollbar {
  width: 0;
}
</style>
