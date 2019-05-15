<template>
    <div class="col-lg-4">
        <!-- quest -->
        <section class="section quest">
            <div class="headline">HỌ NÓI VỀ CHÚNG TÔI</div>
            <div class="quest-list js-carousel-02">
                <carousel :per-page="1" :loop="true" :autoplay="true" :navigationEnabled="false" :mouse-drag="true" :paginationEnabled="false">
                    <slide>
                        <div class="item">
                            <div class="avatar">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/user.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <div class="commit">Deserunt amet eiusmod adipisicing exercitation. Incididunt
                                    mollit ad occaecat fugiat ut
                                    cupidatat labore dolor fugiat amet fugiat nostrud amet.</div>
                                <div class="name">Hồ Phi Khánh</div>
                                <div class="address">Học sinh lớp 11 Tin, trường THPT chuyên Nguyễn Huệ</div>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="item">
                            <div class="avatar">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/user.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <div class="commit">Deserunt amet eiusmod adipisicing exercitation. Incididunt
                                    mollit ad occaecat fugiat ut
                                    cupidatat labore dolor fugiat amet fugiat nostrud amet.</div>
                                <div class="name">Hồ Phi Khánh</div>
                                <div class="address">Học sinh lớp 11 Tin, trường THPT chuyên Nguyễn Huệ</div>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="item">
                            <div class="avatar">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/user.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <div class="commit">Deserunt amet eiusmod adipisicing exercitation. Incididunt
                                    mollit ad occaecat fugiat ut
                                    cupidatat labore dolor fugiat amet fugiat nostrud amet.</div>
                                <div class="name">Hồ Phi Khánh</div>
                                <div class="address">Học sinh lớp 11 Tin, trường THPT chuyên Nguyễn Huệ</div>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>

        </section>
        <!-- quest end -->
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'About',
    components: {
        Carousel, Slide
    },
}
</script>
<style lang="scss" scoped>

</style>


