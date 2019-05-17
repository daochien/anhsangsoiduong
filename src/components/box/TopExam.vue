<template>
    <div class="col-lg-4">
        <!-- rating -->
        <section class="section rating v2">
            <div class="rating-item">
                <div class="wrapper">
                    <h2 class="headline">TOP THÍ SINH ĐÃ THI</h2>
                    <div class="tab js-tab">
                        <div class="tab-item" :class="{ active: !isActive}" @click="isActive = !isActive">
                            <div class="title">Sở GD & ĐT Tỉnh/TP</div>
                            <ul class="list">
                                <li class="list-item" v-for="(city, index) in data.city" :key="index">
                                    <div class="number">{{ index + 1 }}</div>
                                    <div class="info">
                                        <div class="number-user">{{city.sum}} <span>thí sinh</span></div>
                                        <div class="address">{{city.name}}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-item" :class="{ active: isActive}" @click="isActive = !isActive">
                            <div class="title">Trường</div>
                            <ul class="list">
                                <li class="list-item" v-for="(school, index) in data.school" :key="index">
                                    <div class="number">{{ index + 1 }}</div>
                                    <div class="info">
                                        <div class="number-user">{{school.sum}} <span>thí sinh</span></div>
                                        <div class="address">{{school.name}}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- <a href="" class="btn btn-light">Xem thêm</a> -->
                </div>
            </div>
        </section>
        <!-- rating end -->
    </div> 
</template>
<script>
export default {
    name: 'TopExam',
    data() {
        return {
            isActive: false,
            data: topExam
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

