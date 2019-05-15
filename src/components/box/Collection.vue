<template>
    <div class="col-12">
        <!-- images videos -->
        <section class="section images-videos">
            <h2 class="headline"><a href="http://">HÌNH ẢNH - VIDEO NỔI BẬT</a></h2>
            <div class="accordion js-accordion">
                <ul class="buttons js-accordion-buttons">
                    <li :class="{active: !isActive}" @click="isActive = !isActive">Video Nổi bật</li>
                    <li :class="{active: isActive}" @click="isActive = !isActive">Hình ảnh</li>
                </ul>
                <div class="blocks js-accordion-bodys">
                    <div class="block" :class="{active: !isActive}">
                        <div class="inner">
                            <figure class="news-item">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/new.jpg" alt="">
                                    </a>
                                </div>
                                <div class="content">
                                    <h3 class="title">
                                        <a href="">Danh sách thí sinh đạt giải tuần 3, 4, 5, 6 Cuộc thi
                                            "Giao thông học đường" lần III</a>
                                    </h3>
                                    <div class="info">
                                        <span class="date">26/12/2017</span>
                                        <span class="view"><i class="fa fa-eye"></i> 1.802</span>
                                        <span class="commit"><i class="fa fa-chat"></i> 0</span>
                                    </div>
                                    <div class="description">Danh sách thí sinh đạt giải tuần 3, 4, 5, 6
                                        Cuộc thi "Giao thông học đường" lần
                                        III</div>
                                </div>
                            </figure>
                            <figure class="news-item">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/new.jpg" alt="">
                                    </a>
                                </div>
                                <div class="content">
                                    <h3 class="title">
                                        <a href="">Trường THCS Dư Hàng Kênh từng bừng lễ trao giải vòng
                                            trường</a>
                                    </h3>
                                    <div class="info">
                                        <span class="date">26/12/2017</span>
                                        <span class="view"><i class="fa fa-eye"></i> 1.802</span>
                                        <span class="commit"><i class="fa fa-chat"></i> 0</span>
                                    </div>
                                    <div class="description">Vào sáng nay (06/03), trường THCS Dư Hàng
                                        Kênh, quận Lê Chân , thành phố Hải
                                        Phòng đã
                                        tổ chức lễ trao giải cuộc thi...</div>
                                </div>
                            </figure>
                            <figure class="news-item">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/new.jpg" alt="">
                                    </a>
                                </div>
                                <div class="content">
                                    <h3 class="title">
                                        <a href="">Sự kiện mừng xuân Mậu Tuất 2018</a>
                                    </h3>
                                    <div class="info">
                                        <span class="date">26/12/2017</span>
                                        <span class="view"><i class="fa fa-eye"></i> 1.802</span>
                                        <span class="commit"><i class="fa fa-chat"></i> 0</span>
                                    </div>
                                    <div class="description">[KHAI XUÂN – ĐÓN LỘC] Sự kiện mừng xuân Mậu
                                        Tuất 2018</div>
                                </div>
                            </figure>
                            <figure class="news-item">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/new.jpg" alt="">
                                    </a>
                                </div>
                                <div class="content">
                                    <h3 class="title">
                                        <a href="">Bảo đảm an toàn giao thông cho học sinh, sinh viên
                                            dịp Tết Nguyên đán Mậu Tuất</a>
                                    </h3>
                                    <div class="info">
                                        <span class="date">26/12/2017</span>
                                        <span class="view"><i class="fa fa-eye"></i> 1.802</span>
                                        <span class="commit"><i class="fa fa-chat"></i> 0</span>
                                    </div>
                                    <div class="description">Các nhà trường tăng cường giáo dục kiến
                                        thức tham gia giao thông, đảm bảo an toàn
                                        cho
                                        học sinh trong dịp Tết.</div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div class="block" :class="{active: isActive}">
                        <div class="inner">
                            <figure class="news-item">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/new.jpg" alt="">
                                    </a>
                                </div>
                                <div class="content">
                                    <h3 class="title">
                                        <a href="">Danh sách thí sinh đạt giải tuần 3, 4, 5, 6 Cuộc thi
                                            "Giao thông học đường" lần III</a>
                                    </h3>
                                    <div class="info">
                                        <span class="date">26/12/2017</span>
                                        <span class="view"><i class="fa fa-eye"></i> 1.802</span>
                                        <span class="commit"><i class="fa fa-chat"></i> 0</span>
                                    </div>
                                    <div class="description">Danh sách thí sinh đạt giải tuần 3, 4, 5, 6
                                        Cuộc thi "Giao thông học đường" lần
                                        III</div>
                                </div>
                            </figure>
                            <figure class="news-item">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/new.jpg" alt="">
                                    </a>
                                </div>
                                <div class="content">
                                    <h3 class="title">
                                        <a href="">Trường THCS Dư Hàng Kênh từng bừng lễ trao giải vòng
                                            trường</a>
                                    </h3>
                                    <div class="info">
                                        <span class="date">26/12/2017</span>
                                        <span class="view"><i class="fa fa-eye"></i> 1.802</span>
                                        <span class="commit"><i class="fa fa-chat"></i> 0</span>
                                    </div>
                                    <div class="description">Vào sáng nay (06/03), trường THCS Dư Hàng
                                        Kênh, quận Lê Chân , thành phố Hải
                                        Phòng đã
                                        tổ chức lễ trao giải cuộc thi...</div>
                                </div>
                            </figure>
                            <figure class="news-item">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/new.jpg" alt="">
                                    </a>
                                </div>
                                <div class="content">
                                    <h3 class="title">
                                        <a href="">Sự kiện mừng xuân Mậu Tuất 2018</a>
                                    </h3>
                                    <div class="info">
                                        <span class="date">26/12/2017</span>
                                        <span class="view"><i class="fa fa-eye"></i> 1.802</span>
                                        <span class="commit"><i class="fa fa-chat"></i> 0</span>
                                    </div>
                                    <div class="description">[KHAI XUÂN – ĐÓN LỘC] Sự kiện mừng xuân Mậu
                                        Tuất 2018</div>
                                </div>
                            </figure>
                            <figure class="news-item">
                                <div class="img-cover">
                                    <a href="#" class="img-cover__wrapper">
                                        <img src="@/assets/images/new.jpg" alt="">
                                    </a>
                                </div>
                                <div class="content">
                                    <h3 class="title">
                                        <a href="">Bảo đảm an toàn giao thông cho học sinh, sinh viên
                                            dịp Tết Nguyên đán Mậu Tuất</a>
                                    </h3>
                                    <div class="info">
                                        <span class="date">26/12/2017</span>
                                        <span class="view"><i class="fa fa-eye"></i> 1.802</span>
                                        <span class="commit"><i class="fa fa-chat"></i> 0</span>
                                    </div>
                                    <div class="description">Các nhà trường tăng cường giáo dục kiến
                                        thức tham gia giao thông, đảm bảo an toàn
                                        cho
                                        học sinh trong dịp Tết.</div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- images videos end -->
    </div>
</template>
<script>
export default {
    name: 'Collection',
    data() {
        return {
            isActive: false
        }
    }
}
</script>
<style scoped>

</style>


