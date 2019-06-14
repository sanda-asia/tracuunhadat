<template>
  <div class="wrapper">
    <div class="md-layout-item tabs-customs">
      <tabs
        :tab-name="['Dashboard', 'Blog', 'Rao Vặt']"
        :tab-icon="['dashboard', 'schedule', 'schedule']"
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
      </tabs>
    </div>
    <post-detail/>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import ManagerBlog from "./components/ManagerBlog"
import ManagerClassified from "./components/ManagerClassified"
import PostDetail from './components/PostDetail'

export default {
  components: {
     Tabs,
     ManagerBlog,
     ManagerClassified,
     PostDetail
  },
  name: "blog",
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
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
