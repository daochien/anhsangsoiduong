<template>
    <header class="header">
        <!-- top bar -->
        <section class="top-bar">
            <div class="container">
                <div class="inner">
                    <div class="contact">
                        <div class="phone"><i class="fa fa-email"></i> Email:
                            <span>anhsangsoiduong2017@gmail.com</span></div>
                        <div class="email"><i class="fa fa-phone"></i> Phone: <span>04 62 63 1777</span></div>
                    </div> <!-- /top bar -->
                    <ul class="nav">
                        <li class="nav-item js-toggle-registration"><i class="fa fa-edit"></i>Đăng ký</li>
                        <li class="nav-item js-toggle-login"><i class="fa fa-user"></i>Đăng nhập</li>
                    </ul> <!-- nav -->
                </div>
            </div>
        </section>
        <!-- top bar end -->

        <!-- navbar -->
        <nav class="navbar">
            <div class="container">
                <div class="wrapper">
                    <div class="branb">
                        <a class="logo" href="http://"><img src="@/assets/images/logo.png" alt=""></a>
                    </div>
                    <ul class="nav js-navbar">
                        <li class="nav-item">
                            <a href="" class="nav-link"><i class="fa fa-home"></i></a>
                        </li>
                        <li class="nav-item" v-for="(item, index) in data" :key="index" :class="[item.children.length ? 'dropdown' : '']">
                            <a href="" class="nav-link">{{ item.title }}</a>
                            <template v-if="item.children">
                                <ul class="sub-menu">
                                    <li class="nav-item" v-for="(child, key) in item.children" :key="key">
                                        <a href="" class="nav-link">{{ child.title }}</a>
                                    </li>
                                </ul>
                            </template>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- navbar end -->

    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            data: menu
        }
    },
    created() {
        
    }
}
</script>
<style>

</style>


