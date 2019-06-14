<template>
  <v-card>
    <v-card-title>
      Quản lí tin rao vặt
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
            <md-button class="md-success md-sm" @click="approvedPost(props.item._id)">Duyệt tin</md-button>
            <md-button class="md-danger md-sm">Từ chối</md-button>
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
          { text: 'Level', align: 'left', value: 'level', sortable: false,width:'10%'},
          { text: 'Trạng Thái', align: 'left', value: 'status', sortable: true, width:'10%' },
          { text: 'Action', align: 'left', value: '_id', sortable: false, width:'25%'}
        ],
        desserts: [],
      }
    },
    created(){
        axios({
            url: 'http://localhost:3000/classified/all',
            method: 'get',
        })
        .then(res => this.desserts = res.data.data)
        .catch(err => console.log(err.message))
    },
    methods:{
        approvedPost(id){
            axios({
                url: `http://localhost:3000/classified//posts-approve/${id}`,
                method: 'put',
            })
            .then(res => swal(`Tin đăng đã được duyêt!`))
            .catch(err => console.log(err.message))
        },
        showPost(item){
            EventBus.$emit('detailPost', item)
        }
    }
  }
</script>

<style scoped>

</style>
