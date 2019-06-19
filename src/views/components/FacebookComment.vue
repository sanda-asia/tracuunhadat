<template>
    <div>
        <div class="fb-comments" :data-href="url" data-numposts="10" width="100%"></div>
    </div>
</template>

<script>


export default {
    name: 'cont',
    props: ['url'],
    data () {
        return {

        }
    },
    mounted () {
       window.FB.XFBML.parse();
    },

}
</script>