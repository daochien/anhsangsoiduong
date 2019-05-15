<template>
    <div class="col-lg-4">
        <!-- rating -->
        <section class="section rating v1">
            <div class="rating-item">
                <div class="wrapper">
                    <h2 class="headline">Top thí sinh đăng ký</h2>
                    <div class="tab js-tab" >
                        <div class="tab-item " :class="{active: !isActive}" @click="isActive = !isActive"> 
                            <div class="title">Sở GD & ĐT Tỉnh/TP</div>
                            <ul class="list">
                                <li class="list-item">
                                    <div class="number">01</div>
                                    <div class="info">
                                        <div class="number-user">180356 <span>thí sinh</span></div>
                                        <div class="address">Phú Thọ</div>
                                    </div>
                                </li>
                                <li class="list-item">
                                    <div class="number">02</div>
                                    <div class="info">
                                        <div class="number-user">92297 <span>thí sinh</span></div>
                                        <div class="address">Hà Nội</div>
                                    </div>
                                </li>
                                <li class="list-item">
                                    <div class="number">03</div>
                                    <div class="info">
                                        <div class="number-user">92297 <span>thí sinh</span></div>
                                        <div class="address">Thái Nguyên</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-item" :class="{active: isActive}" @click="isActive = !isActive">
                            <div class="title">Trường</div>
                            <ul class="list">
                                <li class="list-item">
                                    <div class="number">01</div>
                                    <div class="info">
                                        <div class="number-user">180356 <span>thí sinh</span></div>
                                        <div class="address">THPT Lưu Nhân Chú, Đại Từ</div>
                                    </div>
                                </li>
                                <li class="list-item">
                                    <div class="number">02</div>
                                    <div class="info">
                                        <div class="number-user">92297 <span>thí sinh</span></div>
                                        <div class="address">Trường Đại Học Nguyễn Tất Thành</div>
                                    </div>
                                </li>
                                <li class="list-item">
                                    <div class="number">03</div>
                                    <div class="info">
                                        <div class="number-user">92297 <span>thí sinh</span></div>
                                        <div class="address">THPT Lý Thái Tổ</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="" class="btn btn-light">Xem thêm</a>
                </div>
            </div>
        </section>
        <!-- rating end -->
    </div>
</template>
<script>
export default {
    name: 'TopRegister',
    data() {
        return {
            isActive: false
        }
    }
}
</script>
<style>

</style>


