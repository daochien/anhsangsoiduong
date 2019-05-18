<template>
    <div class="col-lg-6">
        <!-- news hot -->
        <section class="section news-hot">
            <h2 class="headline"><router-link :to="{name: 'news'}">Tin Tức</router-link></h2>
            <div class="inner">
                <figure class="news-item" >
                    <h3 class="title">
                        <router-link :to="{name: 'newsDetail', params: { slug: items[0].alias, id: items[0].id }}">{{ items[0].title }}</router-link>
                    </h3>
                    <div class="content">
                        <div class="img-cover">
                            <router-link :to="{name: 'newsDetail', params: { slug: items[0].alias, id: items[0].id }}"  class="img-cover__wrapper">
                                <img :src="items[0].avatar" alt="">
                            </router-link >
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
                                <router-link :to="{name: 'newsDetail', params: { slug: item.alias, id: item.id }}">{{ item.title }}</router-link>
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
import { myMixin } from '@/mixins/mixins.js';
export default {
    name: 'HotNews',
    mixins: [myMixin],
    data() {
        return {
            items: listNews
        }
    }
}
</script>

