<template>
    <div class="col-lg-4">
        <!-- rating right -->
        <section class="section rating-right">
            <h2 class="headline">TOP THÍ SINH CUỘC THI</h2>
            <div class="tab js-tab">
                <div class="tab-item" :class="{active: !isActive}" @click="isActive = !isActive">
                    <div class="title">Tuần</div>
                    <div class="list">
                        <div class="list-item" v-for="(item , index) in data.week" :key="index">
                            <div class="number">{{ index + 1 }}</div>
                            <div class="img">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img :src="item.avatar" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <h4 class="title">{{ item.name }}</h4>
                                <p class="name-school">{{item.address}}</p>
                                <p class="date">{{item.point}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-item" :class="{active: isActive}" @click="isActive = !isActive">
                    <div class="title">Chung cuộc</div>
                    <div class="list">
                        <div class="list-item" v-for="(item , index) in data.final" :key="index">
                            <div class="number">{{ index + 1 }}</div>
                            <div class="img">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img :src="item.avatar" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="info">
                                <h4 class="title">{{ item.name }}</h4>
                                <p class="name-school">{{item.address}}</p>
                                <p class="date">{{item.point}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <a href="" class="btn btn-light">Xem bảng xếp hạng</a> -->
        </section>
        <!-- rating right end -->
    </div>
</template>
<script>
export default {
    name: 'TopWeek',
    data() {
        return {
            isActive: false,
            data: topWeek
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


