<template>
  <v-card>
    <v-card-title>
      <v-toolbar-title>User management</v-toolbar-title>
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
        <td class="text-xs-left">{{ props.item._id }}</td>
        <td class="text-xs-left">{{ props.item.username }}</td>
        <td class="text-xs-left">{{ props.item.fullname }}</td>
        <td class="text-xs-left">{{ props.item.phone_number}}</td>
        <td class="text-xs-left">{{ props.item.id_classified.length }}</td>
        <td class="text-xs-left">{{ props.item.amount }}</td>
        <td class="text-xs-right">
            <md-button class="md-success md-sm" @click="userDetail(props.item)">Nạp tiền</md-button>
            
            <md-button class="md-danger md-sm">Khóa tài khoản</md-button>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
          
    </v-data-table>
    
      <modal v-if="classicModal" @close="classicModalHide">
            <template slot="header">
                <h4 class="modal-title">Modal Title</h4>
                <md-button
                class="md-simple md-just-icon md-round modal-default-button"
                @click="classicModalHide"
                >
                <md-icon>clear</md-icon>
                </md-button>
            </template>

            <template slot="body">
                <form>
                  <div class="form-group row">
                    <label for="" class="col-sm-4">Email</label>
                    <input type="email" class="form-control col-sm-8" id="" readonly v-model="user.email">
                  </div>
                  <div class="form-group row">
                    <label for="" class="col-sm-4">Số điên thoại</label>
                    <input type="text" class="form-control col-sm-8" id="" readonly v-model="user.phone_number">
                  </div>
                  <div class="form-group row">
                    <label for="" class="col-sm-4">Số tiền: </label>
                    <input type="number" class="form-control col-sm-8" id="" v-model="amount">
                  </div>
                </form>
            </template>

            <template slot="footer">
                <md-button class="md-success md-simple" @click="recharge">Nạp tiền</md-button>
                <md-button
                class="md-danger md-simple"
                @click="classicModalHide"
                >Close</md-button
                >
            </template>
        </modal>

  </v-card>
  
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import EventBus from '../../EventBus'
import { Modal } from "@/components";
import { parse } from 'url';

  export default {
    components: {
        Modal
    },
    data () {
      return {
        classicModal: false,
        search: '',
        headers: [
            { text: 'ID', align: 'left', value: '_id', sortable: true, width:'10%' },
            {text: 'Username', align: 'left', sortable: false, value: 'username', width:'15%'},
            { text: 'Họ tên', align: 'left', value: 'id_user.name', sortable: false, width:'15%'},
            { text: 'Số điện thoại', align: 'left', value: 'address', sortable: false, width:'20%'},
            { text: 'Tin Đăng', align: 'left', value: 'address', sortable: false, width:'10%'},
            { text: 'Tài Khoản', align: 'left', value: 'amount', sortable: true,width:'10%'},
            { text: 'Action', align: 'left', value: '_id', sortable: false, width:'20%'}
        ],
        desserts: [],
        user: '',
        amount: 0
      }
    },
    created(){
      this.initialize();
    },

    methods:{
        initialize(){
          axios({
            url: 'http://localhost:3000/api/user/',
            method: 'get',
            headers: {
              'x-access-token' : localStorage.getItem('token')
            }
          })
          .then(res => this.desserts = res.data)
          .catch(err => console.log(err.message))
        },
        classicModalHide() {
            this.classicModal = false;
        },
        userDetail(item){
            this.classicModal = true;
            this.user = item;
        },
        recharge(){
            axios({
                url: `http://localhost:3000/api/user/${this.user._id}/recharge`,
                method: 'put',
                data: {amount: this.amount},
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token' : localStorage.getItem('token') || null
                },
            })
            .then(res => this.initialize())
            .catch(err => console.log(err.message)) 
            this.classicModalHide();
        }
    }
  }
</script>

<style scoped>

</style>
