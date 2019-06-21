<template>
  <v-card>
    <v-card-title>
      Quản lí Người dùng
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
            <md-button class="md-success md-sm" >Nạp tiền</md-button>
            <md-button class="md-danger md-sm">Khóa tài khoản</md-button>
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
            { text: 'ID', align: 'left', value: 'status', sortable: true, width:'10%' },
            {text: 'Username', align: 'left', sortable: false, value: 'username', width:'15%'},
            { text: 'Họ tên', align: 'left', value: 'id_user.name', sortable: false, width:'15%'},
            { text: 'Số điện thoại', align: 'left', value: 'address', sortable: false, width:'20%'},
            { text: 'Tin Đăng', align: 'left', value: 'address', sortable: false, width:'10%'},
            { text: 'Tài Khoản', align: 'left', value: 'level', sortable: false,width:'10%'},
            
            { text: 'Action', align: 'left', value: '_id', sortable: false, width:'20%'}
        ],
        desserts: [],
      }
    },
    created(){
        axios({
            url: 'http://localhost:3000/user/',
            method: 'get',
        })
        .then(res => this.desserts = res.data)
        .catch(err => console.log(err.message))
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
