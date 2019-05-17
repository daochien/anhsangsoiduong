<template>
    <div class="col-lg-6">
        <!-- news hot -->
        <section class="section news-hot">
            <h2 class="headline"><a href="http://">Tin Tức</a></h2>
            <div class="inner">
                <figure class="news-item" >
                    <h3 class="title">
                        <a href="">{{ items[0].title }}</a>
                    </h3>
                    <div class="content">
                        <div class="img-cover">
                            <a href="#" class="img-cover__wrapper">
                                <img :src="items[0].avatar" alt="">
                            </a>
                        </div>
                        <div class="wrapper">
                            <div class="info">
                                <span class="date">{{ items[0].created_at }}</span>
                            </div>
                            <div class="description">{{ items[0].summary }}</div>
                        </div>
                    </div>
                </figure>
                <ul class="list">
                    <li class="item" v-for="(item, index) in items" :key="index">
                        <template v-if="index > 0 && index < 5">
                            <h4 class="title">
                                <a href="http://">{{ item.title }}</a>
                            </h4>
                            <div class="info">
                                <span class="date">{{ item.created_at }}</span>
                            </div>
                        </template>
                        
                    </li>
                </ul>
            </div>
        </section>
        <!-- news hot end -->
    </div>
</template>
<script>
export default {
    name: 'HotNews',
    data() {
        return {
            items: listNews
        }
    }
}
</script>

