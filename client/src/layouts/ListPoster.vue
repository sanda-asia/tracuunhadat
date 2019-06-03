<template>
    <div class="tab-pane fade" id="profile">
        <div class="wrapper-poster" v-for="poster in posters" :key="poster.id">
            <mini-poster v-bind:poster="poster" />
            
        </div>
        <pagination v-bind:total-pages="totalPages" />
    </div>
</template>

<script>
export default {
    data() {
        return {
        itemsPerPage: 3,
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
            {
                id: 5,
                header : 'Nhà  đất quận 5',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 6,
                header : 'Nhà  đất quận 6',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 7,
                header : 'Nhà  đất quận 7',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 8,
                header : 'Nhà  đất quận 8',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
                area: '10000',
                address: 'Hữu Lợi, Hữu Đạo, Châu Thành, Tiền Giang.',
            },
            {
                id: 9,
                header : 'Nhà  đất quận 9',
                description : 'Cần bán gấp Căn Nhà Riêng Chính Chủ tại 1419 Đường lê Văn Lương Phước Kiển Nhà bè Ngay cầu ông Bốn Gần HAGL an Tiến, CC Hưng Phát, PV Gas, Gần Khu công viên ánh sáng Kenton node, Phú mỹ hưng, Lotte Quận 7 DT: 6m x 14m Đất thổ cư, xây nhà kiên cố ép cọc bê tông đúc sàn đầy đủ',
                price: '5.000.000.000',
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
    computed:{
        currentPage(){
            return this.$route.query.page?this.$route.query.page:1;
        },
        totalPages(){
            return Math.ceil(this.posters.length / 3);
        },
        displayPosters(){
            const index = (this.currentPage-1) * this.itemsPerPage;
            return this.posters.slice(index, index + this.itemsPerPage);
        },
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
