<template>
    <div id="home">
        <map-place />
        <content-home />
        
    </div>
</template>


<script>

export default {
    name: 'Home',
    
}
</script>

<style scoped>
#home {
    /* margin-top: 60px; */
    position: fixed;
    width: 96%;
    top: 60px;
    left: 70px;
}
#content {
    background-color: #f3f3f3;
    width: 50%;
    height: 100px;
    border-top: 1px solid #e8e8e8;
    float: right;
    -webkit-overflow-scrolling: touch;
    margin-right: 0;
}
</style>
