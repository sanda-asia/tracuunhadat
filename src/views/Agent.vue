<template>
  <div class="wrapper">
      Hello
  </div>
</template>

<script>


export default {
  components: {
  },
  name: "agent",
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
  },
  created(){
  },
  mounted() {
       swal(
            `Tính năng đang được cập nhập!`,
            'Vui lòng truy cập sau!',
            'success',
        );
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
