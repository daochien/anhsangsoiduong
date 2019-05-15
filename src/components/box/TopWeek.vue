<template>
    <div class="col-lg-4">
        <!-- rating right -->
        <section class="section rating-right">
            <h2 class="headline">TOP Thí sinh dẫn đầu tuần</h2>
            <div class="tab js-tab">
                <div class="tab-item" :class="{active: !isActive}" @click="isActive = !isActive">
                    <div class="title">Tuần</div>
                    <div class="list">
                        <div class="list-item">
                            <div class="number">1</div>
                            <div class="img">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/user.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <h4 class="title">Nguyễn Thanh Tuấn</h4>
                                <p class="date">200 - 00:15:016</p>
                                <p class="name-school">THTT Bảo Lộc</p>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="number">2</div>
                            <div class="img">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/user.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <h4 class="title">Nguyễn Thanh Tuấn</h4>
                                <p class="date">200 - 00:15:016</p>
                                <p class="name-school">THTT Bảo Lộc</p>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="number">3</div>
                            <div class="img">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/user.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <h4 class="title">Nguyễn Thanh Tuấn</h4>
                                <p class="date">200 - 00:15:016</p>
                                <p class="name-school">THTT Bảo Lộc</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-item" :class="{active: isActive}" @click="isActive = !isActive">
                    <div class="title">Chung cuộc</div>
                    <div class="list">
                        <div class="list-item">
                            <div class="number">1</div>
                            <div class="img">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/user.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <h4 class="title">Nguyễn Thanh Tuấn</h4>
                                <p class="date">200 - 00:15:016</p>
                                <p class="name-school">THTT Bảo Lộc</p>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="number">2</div>
                            <div class="img">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/user.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <h4 class="title">Nguyễn Thanh Tuấn</h4>
                                <p class="date">200 - 00:15:016</p>
                                <p class="name-school">THTT Bảo Lộc</p>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="number">3</div>
                            <div class="img">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/user.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <h4 class="title">Nguyễn Thanh Tuấn</h4>
                                <p class="date">200 - 00:15:016</p>
                                <p class="name-school">THTT Bảo Lộc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="" class="btn btn-light">Xem bảng xếp hạng</a>
        </section>
        <!-- rating right end -->
    </div>
</template>
<script>
export default {
    name: 'TopWeek',
    data() {
        return {
            isActive: false
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


