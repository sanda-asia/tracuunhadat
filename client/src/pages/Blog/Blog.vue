<template>
    <div id="wrapper" class="full">
        <div id="content" class="max">
            <div class="lists" style="width: 90%; margin: auto;">
                <div class="row">
                    <h2>
                        <span>Thành Phố Đà Nẵng </span>
                    </h2>
                    <!-- <div v-for="post in posts" :key="post.id"> -->
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3" v-for="post in posters" :key="post.id">
                            <router-link :to="{ name: 'DetailBlog', params: {titleBlog : post.header} }" class="card">
                                <div class="figure">
                                    <img src="https://24hbinhphuoc.com.vn/wp-content/uploads/2018/11/6-1540958623-width650height365.jpg" alt="image">
                                </div>
                                <h4>{{post.header}}</h4>
                                <div class="metafooter">
                                    <div class="wrapfooter">
                                        <span class="meta-footer-thumb">
                                            <img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal">
                                        </span>
                                        <span class="author-meta">
                                            <span class="post-name">Dân Trí</span><br>
                                            <span class="post-date">27/05/2019</span>
                                            <span class="post-read-more">
                                                <svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
                                                    <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd">

                                                    </path>
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </router-link>
                        </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>
        
        <div class="clearfix"></div>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    data: ()=> {
        return {
            posters : [
                {
                    id: 1,
                    header : 'Nhà  đất quận 1',
                    description : ', CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                    price: '5.000.000.000',
                    area: '10000',
                    address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
                },
                {
                    id: 2,
                    header : 'Nhà  đất quận 2',
                    description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                    price: '5.000.000.000',
                    area: '10000',
                    address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
                },
                {
                    id: 3,
                    header : 'Nhà  đất quận 3',
                    description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                    price: '5.000.000.000',
                    area: '10000',
                    address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
                },
                {
                    id: 4,
                    header : 'Nhà  đất quận 4',
                    description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                    price: '5.000.000.000',
                    area: '10000',
                    address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
                },

            ]
        };
    }
}
</script>

<style>

</style>
