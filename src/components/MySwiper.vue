<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
            <img src="static/img/swiper1.jpg">
        </swiper-slide>
        <swiper-slide>
            <img src="static/img/swiper2.jpg">
        </swiper-slide>
        <swiper-slide>
            <img src="static/img/swiper3.jpg">
        </swiper-slide>
        <swiper-slide>
            <img src="static/img/swiper4.jpg">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        name: "MySwiper",
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                    autoplay: { disableOnInteraction: true }
                    ,
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // ...
                }
            }
        },
        
    }
</script>
<style scoped>
    .swiper-container {
        width: 10rem
    }

    .swiper-container img {
        display: block;
        width: 10rem;
        height: 3.733333rem/* 280/75 */
        ;
    }
</style>