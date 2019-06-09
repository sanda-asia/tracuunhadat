<template>
    <div id="wrapper" class="full" style="height: 258px;">
        <div id="content" style="height: 259px;">
            <div class="tables">
                <div class="panel panel-default">
                    <div class="panel-heading">Danh Sách Tin đăng</div>
                    <div class="row tableContainer">
                        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                            <!-- <router-link :to="{name: 'BlogAdd'}" class="btn btn-sm btn-blue mb5"><span class="icon-drawer"></span> Đăng Bài</router-link> -->
                            <!-- <a href="#" class="btn btn-sm btn-yellow mb5"><span class="icon-ban"></span> Report Spam</a> -->
                            <!-- <a href="#" class="btn btn-sm btn-red mb5"><span class="icon-trash"></span> Delete</a> -->
                            <div class="btn-group mb5">
                                <!-- <a data-toggle="dropdown" class="btn btn-sm btn-gray dropdown-toggle">
                                    <span class="dropdown-label">Trạng Thái &nbsp;</span> <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Tất cả</a></li>
                                    <li><a href="#">Chưa Duyệt</a></li>
                                    <li><a href="#">Đã Duyệt</a></li>
                                </ul> -->
                                <select class="form-control" v-model="selectStatus">
                                    <option value="0"> Tất Cả</option>
                                    <option value="1"> Chưa Duyệt</option>
                                    <option value="2"> Đã Duyệt</option>
                                </select>
                                
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <div class="input-group input-group-sm mb5">
                                <input type="text" id="myInput" class="form-control" placeholder="Search...">
                                <span class="input-group-btn"><a class="btn btn-sm btn-green"><span class="icon-magnifier"></span></a></span>
                            </div>
                        </div>
                    </div>
                    <div class="table-overflow">
                        <table id="example" class="table table-striped table-bordered" style="">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tiêu đề</th>
                                    <th>Địa chỉ</th>
                                    <th>Loại</th>
                                    <th>Level</th>
                                    <th>Trạng thái</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="selectStatus == 0">
                                <tr v-for="post in listPost">
                                    <td style="width:10%">{{post._id}}</td>
                                    <td style="width:40%">{{post.title}}</td>
                                    <td style="width:15%">{{post.address}}</td>
                                    <td style="width:10%">{{post.category}}</td>
                                    <td style="width:5%">{{post.level}}</td>
                                    <td style="width:10%">
                                        <span v-if="post.status == 1" class="label label-success">ACTIVE</span>
                                        <span v-else class="label label-info">PENDING</span>
                                    </td>
                                    <td style="width:10%">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-green dropdown-toggle" data-toggle="dropdown">
                                            Action <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><router-link :to="{name: 'ClassifiedView', params: {id: post._id}}">Xem tin đăng</router-link></li>
                                                <li><router-link :to="{name:'ClassifiedEdit', params: {id: post._id}}">Sửa tin đăng</router-link></li>
                                                <li><a href="#" @click="approvedPost(post._id)">Duyệt tin</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else-if="selectStatus == 1">
                                <tr v-for="post in listPostPendding">
                                    <td style="width:10%">{{post._id}}</td>
                                    <td style="width:40%">{{post.title}}</td>
                                    <td style="width:10%">{{post.price}}</td>
                                    <td style="width:10%">{{post.area}}</td>
                                    <td style="width:10%">{{post.level}}</td>
                                    <td style="width:10%">
                                        <span v-if="post.status == 1" class="label label-success">ACTIVE</span>
                                        <span v-else class="label label-info">PENDING</span>
                                    </td>
                                    <td style="width:10%">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-green dropdown-toggle" data-toggle="dropdown">
                                            Action <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="#">Xem, sửa tin đăng</a></li>
                                                <li><a href="#" @click="approvedPost(post._id)">Duyệt tin</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr v-for="post in listPostApproved">
                                    <td style="width:10%">{{post._id}}</td>
                                    <td style="width:40%">{{post.title}}</td>
                                    <td style="width:10%">{{post.price}}</td>
                                    <td style="width:10%">{{post.area}}</td>
                                    <td style="width:10%">{{post.level}}</td>
                                    <td style="width:10%">
                                        <span v-if="post.status == 1" class="label label-success">ACTIVE</span>
                                        <span v-else class="label label-info">PENDING</span>
                                    </td>
                                    <td style="width:10%">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-green dropdown-toggle" data-toggle="dropdown">
                                            Action <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="#">Xem, sửa tin đăng</a></li>
                                                <li><a href="#" @click="approvedPost(post._id)">Duyệt tin</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Tiêu đề</th>
                                    <th>Giá</th>
                                    <th>Diện tích</th>
                                    <th>Level</th>
                                    <th>Trạng thái</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                        </table>  
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        
            
        <modal-pop-up :poster="post"/>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

$(document).ready(function() {
    var table = $('#example').DataTable();

    $('#example_filter').hide();

    $('#example_length').hide();

    $('#example_info').hide();
    
    $('#myInput').on( 'keyup', function () {
        table.search(this.value).draw();
    } );
} );
    
export default {
    name: "ClassifiedAdmin",
    data(){
        return{
            selectStatus: 0,
            listPost: [],
            listPostApproved: [],
            listPostPendding: [],
            post: '',
            approved: ''
        }
    },
    created(){
        this.getAllList();
        this.getListPending();
        this.getListApproved();
    },
    mounted(){
        if(localStorage.getItem('token') != null){
            if(jwt_decode(localStorage.getItem('token')).data._id != this.$route.params.id && jwt_decode(localStorage.getItem('token')).data.role != false){
                this.$router.push({name : 'Home'});
            }else{
                console.log('ok');
            }
        }else{
            this.$router.push({name : 'Home'});
        }
    },
    methods:{
        getAllList(){
            axios.get('http://localhost:3000/classified/all')
            .then(response =>{
                this.listPost = response.data.data;
            });
        },
        getListPending(){
            axios.get('http://localhost:3000/classified/posts-pending')
            .then(response =>{
                this.listPostPendding = response.data.data;
            });
        },
        getListApproved(){
            axios.get('http://localhost:3000/classified/posts-approved')
            .then(response =>{
                this.listPostApproved = response.data.data;
            });
        },
        fetchList(){
            if(this.selectStatus === "0"){
                console.log(this.selectStatus);
                axios.get('http://localhost:3000/classified/all')
                .then(response =>{
                    this.listPost = response.data.data;
                    this.listPostApproved = [];
                    this.listPostPendding = [];
                });
            } else if( this.selectStatus === "1"){
                // this.listPost = null;
                console.log(this.selectStatus);
                axios.get('http://localhost:3000/classified/posts-pending')
                .then(response =>{
                    this.listPost = [];
                    this.listPostApproved = [];
                    this.listPostPendding = response.data.data;
                });
                
            } else if ( this.selectStatus === "2"){
                console.log(this.selectStatus);
                axios.get('http://localhost:3000/classified/posts-approved')
                .then(response =>{
                    this.listPost = [];
                    this.listPostPendding = [];
                    this.listPostApproved = response.data.data;
                });
            }
        },
        approvedPost(id){
            axios.put(`http://localhost:3000/classified/posts-approve/${id}`)
            .then(response =>{
                swal('Tin đăng đã được duyệt');
                this.approved = id
            });
        }, 
        selectPost(id){
            axios.get(`http://localhost:3000/classified/post-details/${id}`)
            .then(response =>{
                this.post = response.data.data;
            });
        }
    },
    watch:{
        selectStatus(){
            this.fetchList();
        },
        approved: function(){
            this.fetchList();
            this.post.status = 1;
        }
    },
    updated(){
        // document.getElementsByClassName('label label-info')[]
    }
}
</script>

<style scoped>
#wrapper {
    left: 70px;
    top: 60px;
    position: absolute;
    margin: 0;
}

#content {
    background-color: #f3f3f3;
    width: 100%;
    height: 100px;
    border-top: 1px solid #e8e8e8;
    float: right;
    -webkit-overflow-scrolling: touch;
    margin-right: 0px;
}

</style>
