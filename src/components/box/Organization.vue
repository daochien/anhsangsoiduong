<template>
    <div class="col-12 section">
        <div class="group-organizations">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <!-- organizations -->
                    <section class="organizations">
                        <h2 class="headline">ĐƠN VỊ TỔ CHỨC</h2>
                        <ul class="list js-carousel-01">
                            <carousel :per-page="4" :loop="true" :autoplay="true" :navigationEnabled="false" :mouse-drag="true" :paginationEnabled="false">
                                <slide>
                                    <a class="wrapper" href="">
                                        <div class="img">
                                            <img src="@/assets/images/doan-tncs.png" alt="">
                                        </div>
                                        <h3 class="name">Trung ương Đoàn TNCS Hồ Chí Minh</h3>
                                    </a>
                                </slide>
                                <slide>
                                    <a class="wrapper" href="">
                                        <div class="img">
                                            <img src="@/assets/images/doan-tncs.png" alt="">
                                        </div>
                                        <h3 class="name">Trung ương Đoàn TNCS Hồ Chí Minh</h3>
                                    </a>
                                </slide>
                                <slide>
                                    <a class="wrapper" href="">
                                        <div class="img">
                                            <img src="@/assets/images/doan-tncs.png" alt="">
                                        </div>
                                        <h3 class="name">Trung ương Đoàn TNCS Hồ Chí Minh</h3>
                                    </a>
                                </slide>
                                <slide>
                                    <a class="wrapper" href="">
                                        <div class="img">
                                            <img src="@/assets/images/doan-tncs.png" alt="">
                                        </div>
                                        <h3 class="name">Trung ương Đoàn TNCS Hồ Chí Minh</h3>
                                    </a>
                                </slide>
                                <slide>
                                    <a class="wrapper" href="">
                                        <div class="img">
                                            <img src="@/assets/images/doan-tncs.png" alt="">
                                        </div>
                                        <h3 class="name">Trung ương Đoàn TNCS Hồ Chí Minh</h3>
                                    </a>
                                </slide>
                            </carousel>
                        </ul>
                    </section>
                    <!-- organizations end -->
                </div>

                <div class="col-12 col-lg-4">
                    <!-- organizations -->
                    <section class="organizations">
                        <h2 class="headline">ĐƠN VỊ ĐỒNG HÀNH</h2>
                        <ul class="list">
                            <li class="item">
                                <a class="wrapper" href="">
                                    <div class="img">
                                        <img src="@/assets/images/logo_egroup.jpg" alt="">
                                    </div>
                                    <h3 class="name">Tập đoàn giáo dục Egroup</h3>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <!-- organizations end -->
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'Organization',
    components: {
        Carousel,
        Slide
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    text-align: center;
    text-decoration: none;
    outline: none;
    .img {
        height: 100px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    .name {
        margin: 10px 0 0 0;
        position: relative;
        height: 70px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        color: #3b3b3b;
        font-weight: 500;
        font-size: .875rem;
        padding: 0px 10px;
    }
}
</style>


