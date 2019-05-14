<template>
    <div class="hero-countdown" style="background-image: url(@/assets/images/bg-banner.png);">
        <div class="container">
            <div class="row no-spacing">
                <!-- hero -->
                <section class="col-lg-8 no-spacing section hero">
                    <!-- <div class="carousel js-carousel">
                        <div class="img-cover carousel-item">
                            <a href="#" class="img-cover__wrapper">
                                <img src="images/73.jpg" alt="">
                            </a>
                        </div>
                        <div class="img-cover carousel-item">
                            <a href="#" class="img-cover__wrapper">
                                <img src="images/75.jpg" alt="">
                            </a>
                        </div>
                        <div class="img-cover carousel-item">
                            <a href="#" class="img-cover__wrapper">
                                <img src="images/bannner-26-thang-3_78.jpg" alt="">
                            </a>
                        </div>
                        
                    </div> -->
                    <carousel :per-page="1" :navigationEnabled="true" :mouse-drag="false">
                        <slide>
                            <img src="@/assets/images/73.jpg" alt="">
                        </slide>
                        <slide>
                            <img src="@/assets/images/75.jpg" alt="">
                        </slide>
                        <slide>
                            <img src="@/assets/images/bannner-26-thang-3_78.jpg" alt="">
                        </slide>
                    </carousel>
                </section>
                <!-- hero end -->
                <!-- Countdown clock -->
                <section class="col-lg-4 no-spacing section countdown-clock">
                    <h2 class="headline">Hộ thi ánh sáng soi đường</h2>
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
</style>


