<template>
  <div class="wrapper">
    <div class="md-layout-item tabs-customs">
      <tabs
        :tab-name="['Dashboard', 'Blog', 'Rao Vặt', 'Người Dùng']"
        :tab-icon="['dashboard', 'schedule', 'schedule','schedule']"
        plain
        flex-column
        nav-pills-icons
        color-button="primary"
      >
        <!-- here you can add your content for tab-content -->
        <template slot="tab-pane-1">
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits.
          <br /><br />
          Dramatically visualize customer directed convergence without
          revolutionary ROI.
        </template>
        <template slot="tab-pane-2">
          <manager-blog/>
        </template>
        <template slot="tab-pane-3">
          <manager-classified/>
        </template>
        <template slot="tab-pane-4">
          <manager-user/>
        </template>
      </tabs>
    </div>
    <post-detail/>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import ManagerBlog from "./components/ManagerBlog"
import ManagerClassified from "./components/ManagerClassified"
import ManagerUser from "./components/ManagerUser"
import PostDetail from './components/PostDetail'
import jwt_decode from 'jwt-decode'

export default {
  components: {
     Tabs,
     ManagerBlog,
     ManagerClassified,
     ManagerUser,
     PostDetail
  },
  name: "blog",
  data() {
    return {
      user: ''
    };
  },
  methods: {
  },
  computed: {
  },
  created(){
    try {
      if(!localStorage.getItem('token')){
          this.$router.push({name: 'home'})
          console.log("1")
      } else {
          this.user = jwt_decode(localStorage.getItem('token')).data;
          if(this.user.role !== false){
              this.$router.push({name: 'home'})
              console.log("2")
          }
      }
    } catch (error) {
        this.$router.push({name: 'home'})
        console.log("3")
        console.log(error)
    }
  },
  mounted() {
  },
  beforeDestroy() {
  }
};
</script>
<style scoped>
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  overflow: hidden;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
