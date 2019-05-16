<template>
    <div class="col-12 section">
        <div class="group-organizations">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <!-- organizations -->
                    <section class="organizations">
                        <h2 class="headline">ĐƠN VỊ TỔ CHỨC</h2>
                        <ul class="list js-carousel-01">
                            <carousel :per-page="showItem" :loop="true" :autoplay="true" :navigationEnabled="false" :mouse-drag="true" :paginationEnabled="false">
                                <slide v-for="(item, index) in items" :key="index">
                                    <a class="wrapper" :href="item.url">
                                        <div class="img">
                                            <img :src="item.src" :alt="item.name">
                                        </div>
                                        <h3 class="name">{{ item.name }}</h3>
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
import { myMixin } from '@/mixins/mixins.js';
export default {
    name: 'Organization',
    mixins: [myMixin], 
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            items: dvtc
        }
    },
    computed: {
        showItem() {
            if(this.isMobile()) {
                return 1;
            } else {
                return 4;
            }
        }
    },
    created() {
        console.log(this.isMobile());
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


