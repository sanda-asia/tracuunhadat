<template>
  <div class="">
    <v-toolbar flat color="white">
      <v-toolbar-title>Blog</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark class="mb-2" @click="switchComponent">{{isAddOrEdit ? 'List Item' : 'New Item' }}</v-btn>
    </v-toolbar>
    <div v-if="!isAddOrEdit">
        <v-data-table
          :headers="headers"
          :items="blogs"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.headerBlog }}</td>
            <td class="text-xs-left" >{{ props.item.province }}</td>
            <td class="text-xs-left">{{ (new Date(props.item.timePost)).toLocaleDateString() }}</td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="mr-2"
                @click="editItem(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                @click="deleteItem(props.item._id)"
              >
                delete
              </v-icon>
            </td>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
    </div>
    <div v-else>
      <add-blog @onSubmit = "switchComponent" 
          :item="itemSelected"
      />
    </div>
  </div>
</template>

<script>
import AddBlog from "./AddBlog"
import axios from 'axios'
  export default {
    components:{
      AddBlog
    },
    data: () => ({
      isAddOrEdit: false,
      headers: [
        {
          text: 'Tiêu đề',
          align: 'left',
          sortable: false,
          value: 'headerBlog'
        },
        { text: 'Tỉnh - Thành phố', value: 'province', sortable: false },
        { text: 'Thời gian đăng', value: 'timePost' },
        { text: 'Actions', value: 'headerBlog', sortable: false }
      ],
      blogs: [],
      itemSelected: ''
    }),
    watch: {
      isAddOrEdit(val){
        if(!val){
          this.initialize();
          this.itemSelected = ''
        }
      }
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        axios.get('http://localhost:3000/blog')
          .then(res => this.blogs = res.data.listBlog)
          .catch(err => console.log(err));
      },
      switchComponent(){
        this.isAddOrEdit = !this.isAddOrEdit;
      },
      
      editItem (item) {
        this.itemSelected = item;
        this.isAddOrEdit = !this.isAddOrEdit;
      },

      deleteItem (id_blog) {
        let uri = `http://localhost:3000/blog/${id_blog}/delete`;
        let cf = confirm('Are you sure you want to delete this item?');
        if(cf){
          axios.delete(uri)
            .then(res => this.initialize())
            .catch(err => console.log(err));
        }
      }
    }
  }
</script>

<style scoped>

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
