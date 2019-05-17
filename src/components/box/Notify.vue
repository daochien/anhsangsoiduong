<template>
    <div class="col-12">
        <!-- notification -->
        <section class="section notification">
            <div class="notification-item">
                <div class="headline">
                    <h2><a href="">THÔNG BÁO CỦA BAN TỔ CHỨC</a></h2>
                    <!-- <a class="btn" href="">Xem thêm</a> -->
                </div>
                <div class="list">
                    <div class="list-item" v-for="(item, index) in items" :key="index">
                        <p class="date">{{ item.date }}</p>
                        <h3 class="title"><a href="http://">{{ item.name }}</a></h3>
                    </div>
                </div>
            </div>
        </section>
        <!-- notification end -->
    </div>
</template>
<script>
export default {
    name: 'Notify',
    data() {
        return {
            items: notifys
        }
    },
}
</script>
<style>

</style>


