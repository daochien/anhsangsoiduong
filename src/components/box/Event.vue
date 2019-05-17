<template>
    <div class="col-lg-6">
        <!-- news event -->
        <section class="section news-event">
            <h2 class="headline"><a href="http://">SỰ KIỆN</a></h2>
            <div class="inner">
                
                <figure class="news-item" v-for="(item, index) in items" :key="index" >
                    <template v-if="index < 4">
                        <div class="img-cover">
                            <a href="#" class="img-cover__wrapper">
                                <img :src="item.avatar" alt="">
                            </a>
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <a href="">{{ item.title }}</a>
                            </h3>
                            <div class="info">
                                <span class="date">{{ item.created_at }}</span>
                            </div>
                        </div>
                    </template>
                    
                </figure>                
            </div>
        </section>
        <!-- news event end -->
    </div>
</template>
<script>
export default {
    name: 'Event',
    data() {
        return {
            items: events
        }
    }
}
</script>

