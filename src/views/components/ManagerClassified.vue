<template>
  <v-card>
    <v-card-title>
      <v-toolbar-title>Post management</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.title }}</td>
        <td class="text-xs-left">{{ props.item.id_user.username }}</td>
        <td class="text-xs-left">{{ props.item.address }}</td>
        <td class="text-xs-left">{{ props.item.level }}</td>
        <td class="text-xs-left">
            <md-button v-if="props.item.status == 0" class="md-info md-sm" data-toggle="modal" data-target=".bd-example-modal-lg">Chờ duyệt</md-button>
            <md-button v-else-if="props.item.status == 1" class="md-success md-sm">Đã duyệt</md-button>
            <md-button v-else class="md-danger md-sm">Từ chối</md-button>
        </td>
        <td class="text-xs-right">
            <md-button class="md-info md-sm" @click="showPost(props.item)" data-toggle="modal" data-target=".bd-example-modal-lg">Xem</md-button>
            <md-button class="md-success md-sm" v-if="props.item.status != 1" @click="approvedPost(props.item._id)">Duyệt tin</md-button>
            <md-button class="md-danger md-sm" v-if="props.item.status != 2" @click="refusePost(props.item._id)">Từ chối</md-button>
            <md-button class="md-dark md-sm" @click="deletePost(props.item._id)">Xóa</md-button>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import EventBus from '../../EventBus'

  export default {
    components:{
    },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Tiêu đề', align: 'left', sortable: false, value: 'title', width:'30%'
          },
          { text: 'Người đăng', align: 'left', value: 'id_user.name', sortable: false, width:'10%'},
          { text: 'Địa chỉ', align: 'left', value: 'address', sortable: false, width:'15%'},
          { text: 'Level', align: 'left', value: 'level', sortable: true,width:'10%'},
          { text: 'Trạng Thái', align: 'left', value: 'status', sortable: true, width:'10%' },
          { text: 'Action', align: 'left', value: '_id', sortable: false, width:'25%'}
        ],
        desserts: [],
      }
    },
    created(){
        this.initalize();
    },
    methods:{
        initalize(){
          axios({
            url: 'http://localhost:3000/api/classified',
            method: 'get',
        })
        .then(res => this.desserts = res.data.data)
        .catch(err => console.log(err.message))
        },
        approvedPost(id){
            axios({
                url: `http://localhost:3000/api/classified/${id}/approve`,
                method: 'put',
                headers: {
                  'x-access-token' : localStorage.getItem('token')
                }
            })
            .then(res => {
              swal(`Tin đăng đã được duyêt!`);
              this.initalize();
              })
            .catch(err => console.log(err.message))
        },
        showPost(item){
            EventBus.$emit('detailPost', item)
        },
        refusePost(id){
          axios({
                url: `http://localhost:3000/api/classified/${id}/refuse`,
                method: 'put',
                headers: {
                  'x-access-token' : localStorage.getItem('token')
                }
            })
            .then(res => {
              swal(`Tin đăng bị từ chối!`);
              this.initalize();
            })
            .catch(err => console.log(err.message))
        },
        deletePost(id){
            axios({
                url: `http://localhost:3000/api/classified/${id}`,
                method: 'delete',
                headers: {
                  'x-access-token' : localStorage.getItem('token')
                }
            })
            .then(res => {
              swal({
                title: "Deleted!",
                text: "Post has been deleted.",
                icon: "success",
                buttons: false,
                timer: 1500
              });
              this.initalize();
            })
            .catch(err => console.log(err.message))
        },
    }
  }
</script>

<style scoped>

</style>
