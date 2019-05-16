<template>
    <div class="hero-countdown" style="background-image: url(@/assets/images/bg-banner.png);">
        <div class="container">
            <div class="row no-spacing">
                <!-- hero -->
                <section class="col-lg-8 no-spacing section hero">
                    <carousel :per-page="1" :navigationEnabled="true" :autoplay="true" :mouse-drag="false" :loop="true">
                        <slide v-for="(item, index) in itemSlide" :key="index">
                            <img :src="item.src" :alt="item.title">
                        </slide>
                    </carousel>
                </section>
                <!-- hero end -->
                <!-- Countdown clock -->
                <section class="col-lg-4 no-spacing section countdown-clock">
                    <h2 class="headline">Hội thi ánh sáng soi đường</h2>
                    <div data-minutes="600000"></div>
                    <div class="button-group">
                        <a class="btn" href="">Vào thi</a>
                        <a class="btn" href="">Thi thử</a>
                    </div>
                </section>
                <!-- Countdown clock end -->
            </div>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'HeroCountdown',
    components: {
        Carousel, Slide
    },
    data() {
        return {
            itemSlide: banner
        }
    }    
}
</script>
<style scoped>
img {
    width: 100%;
    height: 100%;
}
</style>
<style>
.VueCarousel-navigation-next {
    right: 30px !important;
}
.VueCarousel-navigation-prev {
    left: 30px !important;
}
.VueCarousel-pagination {
    position: absolute;
    bottom: 10px;
}
</style>


