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
      <v-btn color="primary" dark class="mb-2" @click="isAdd = !isAdd">{{(isAdd !== true ) ? 'New Item' : 'List Item' }}</v-btn>
      <!-- <v-btn color="primary" dark class="mb-2" @click="isAdd = !isAdd">New Item</v-btn> -->

    </v-toolbar>
    
    
    <div v-if="!isAdd">
        <v-data-table
          :headers="headers"
          :items="blogs"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.headerBlog }}</td>
            <td class="text-xs-left" v-html="props.item.summaryContent"></td>
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
      <add-blog @onSubmit = "switchComponent" :item="blogs[selectItem]"/>
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
      isAdd: false,
      headers: [
        {
          text: 'Tiêu đề',
          align: 'left',
          sortable: false,
          value: 'headerBlog'
        },
        { text: 'Nội dung', value: 'content', sortable: false },
        { text: 'Thời gian đăng', value: 'timePost' },
        { text: 'Actions', value: 'headerBlog', sortable: false }
      ],
      blogs: [],
      selectItem: '',
    }),
    watch:{
      isAdd(){
        this.initialize();
        axios.get('http://localhost:3000/blog')
          .then(res => {
            this.blogs = res.data.listBlog;
            this.$props.item = res.data.listBlog;
          })
          .catch(err => console.log(err));
      }
    },

    created () {
      this.initialize()
      console.log(this.isAdd)
    },
    // computed:{
    //   summaryContent(){
    //     if(this.blogs[1].length < 5)
    //       return content ;
    //     return content + '...';
    //   }
    // },

    methods: {
      initialize () {
        axios.get('http://localhost:3000/blog')
          .then(res => this.blogs = res.data.listBlog)
          .catch(err => console.log(err));
      },
      switchComponent(){
        this.isAdd = false;
      },
      editItem (item) {
        this.selectItem = this.blogs.indexOf(item);
        this.isAdd = !this.isAdd;
      },

      deleteItem (id_blog) {
        let uri = `http://localhost:3000/blog/${id_blog}/delete`;
        let cf = confirm('Are you sure you want to delete this item?');
        if(cf){
          axios.delete(uri)
            .then(res => this.initialize())
            .catch(err => console.log(err));
        }
      },

    }
  }
</script>

<style scoped>
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}


.wrapper{
}

#mapView{
    width: 50%;
    position: fixed;
    left: 0;
    top: 70px
}

#contentHome{
    width: 50%;
    position: fixed;
    right: 0;
    top: 70px;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
