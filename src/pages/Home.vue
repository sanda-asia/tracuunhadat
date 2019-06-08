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
    position: absolute;
    width: 96%;
    margin: 60px 0 0 70px;
    /* overflow: none; */
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
