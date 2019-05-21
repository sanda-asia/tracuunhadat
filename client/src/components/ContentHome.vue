<template>
    <div id="content" class="content-home">
        <div class="tabsContainer" >
            <ul class="nav nav-tabs " role="tablist">
                <li class="active"><a href="#home" role="tab" data-toggle="tab"><span class="icon-home"></span> HOME</a></li>
                <li><a href="#profile" role="tab" data-toggle="tab"><span class="icon-user"></span> PROFILE</a></li>
                <li><a href="#notifications" role="tab" data-toggle="tab"><span class="icon-bubbles"></span> NOTIFICATIONS</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade in active" id="home">
                    <div class="wrapper-poster" v-for="poster in posters" :key="poster.id">
                        <mini-poster v-bind:poster="poster" />
                    </div>
                </div>
                <div class="tab-pane fade" id="profile">Profile</div>
                <div class="tab-pane fade" id="notifications">Notifications</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        posters : [
            {
                id: 1,
                header : 'Nhà  đất quận 1',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
            },
            {
                id: 2,
                header : 'Nhà  đất quận 2',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
            },
            {
                id: 3,
                header : 'Nhà  đất quận 3',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
            },
            {
                id: 4,
                header : 'Nhà  đất quận 4',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
            },
            {
                id: 5,
                header : 'Nhà  đất quận 5',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
            },
            {
                id: 6,
                header : 'Nhà  đất quận 6',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
            },
            {
                id: 7,
                header : 'Nhà  đất quận 7',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
            },
            {
                id: 8,
                header : 'Nhà  đất quận 8',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
            },
            {
                id: 9,
                header : 'Nhà  đất quận 9',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
            },

        ],
        };
    },

    mounted(){
        // this.fetchPosters();
    },
    methods:{
        reply: function() {
        this.msg = "I'm doing great ! Thanks !";
        },
        async fetchPosters(){
        return axios({
            method: 'get',
            url: 'http://localhost:8081/posters',

        })
            .then((response) => {
            this.movies = response.data.posters;
            })
            .catch(() => {

            });
        },
    },
}
</script>

<style>

</style>
