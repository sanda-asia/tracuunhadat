<template>
  <div class="wrapper">
      <div class="md-layout-item tabs-customs">
          <tabs
            :tab-name="['Dashboard', 'Blog', 'Post']"
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
              <manager-blog/>
            </template>
          </tabs>
        </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import ManagerBlog from "./components/ManagerBlog"

export default {
  components: {
     Tabs,
     ManagerBlog
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
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}


.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  overflow: hidden;
}
.tabs-custom{
   width: 90%;
   margin: auto;
}
.tab-content {
   width: 100%;
   height: 670px;
   overflow-y: scroll;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
