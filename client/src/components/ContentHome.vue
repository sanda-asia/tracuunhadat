<template>
    <div id="content" class="content-home">
        <div class="tabsContainer" >
            <ul class="nav nav-tabs " role="tablist">
                <li class="active"><a href="#home" role="tab" data-toggle="tab"><span class="icon-home"></span> ALL</a></li>
                <li><a href="#profile" role="tab" data-toggle="tab"><span class="fas fa-gavel"></span> SELL</a></li>
                <li><a href="#notifications" role="tab" data-toggle="tab"><span class="fas fa-shopping-cart"></span> BUY</a></li>
            </ul>
            <div class="tab-content" style="margin-bottom: 20px;">
                <div class="tab-pane fade in active" id="home">
                    
                    <div class="wrapper-poster" v-for="poster in posters" :key="poster.id">
                        <mini-poster v-bind:poster="poster" />
                    </div>
                </div>
                <div class="tab-pane fade" id="profile">
                    <div class="wrapper-poster" v-for="poster in posters" :key="poster.id">
                        <mini-poster v-bind:poster="poster" />
                    </div>
                </div>
                <div class="tab-pane fade" id="notifications">
                    <div class="wrapper-poster" v-for="poster in posters" :key="poster.id">
                        <mini-poster v-bind:poster="poster" />
                    </div>
                </div>
                <pagination />
            </div>
        </div>
        <modal-pop-up v-bind:poster="posters[1]" v-bind:user="user" />
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
                description : ', CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 2,
                header : 'Nhà  đất quận 2',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 3,
                header : 'Nhà  đất quận 3',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 4,
                header : 'Nhà  đất quận 4',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 5,
                header : 'Nhà  đất quận 5',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 6,
                header : 'Nhà  đất quận 6',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 7,
                header : 'Nhà  đất quận 7',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 8,
                header : 'Nhà  đất quận 8',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 9,
                header : 'Nhà  đất quận 9',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: 5000000000,
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },

        ],
        user : {
            id: 1,
            userName: 'Ngô Minh Nhí',
            address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            contact: '0325655533',
        },
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
