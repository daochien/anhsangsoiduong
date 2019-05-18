<template>
    <main class="main">
        <div class="container container-main">
            <div class="row">
                <div class="col-lg-8 left-main">

                    <!-- news detail -->
                    <section class="section news-detail">
                        <div class="wrapper">
                            <h1 class="title">{{ newsDetail.title }}</h1>
                            <p class="date">{{ newsDetail.created_at }}</p>
                            <div class="content" v-html="newsDetail.content">
                                
                            </div>
                        </div>
                    </section>
                    <!-- news detail end -->

                </div>

                <div class="col-lg-4 right-main">

                    <!-- rating -->
                    <top-register></top-register>
                    <!-- rating end -->

                    <!-- rating -->
                    <top-exam></top-exam>
                    <!-- rating end -->

                    <!-- rating right -->
                    <top-week></top-week>
                    <!-- rating right end -->

                </div>

            </div>

        </div>

    </main>
</template>
<script>
import TopRegister from '../../../components/box/TopRegister.vue';
import TopExam from '../../../components/box/TopExam.vue';
import TopWeek from '../../../components/box/TopWeek.vue';

export default {
    name: 'NewDetail',
    components: {
        TopRegister,
        TopExam,
        TopWeek
    },
    data() {
        return {
            news: listNews,
            newsDetail: {}
        }
    },
    created(){
       this.getNewsDetail();
    },
    methods: {
         getNewsDetail() {
            this.news.forEach((news) => {
                
                if(news.id == this.$route.params.id ) {
                    this.newsDetail = news;
                }
            });
        }
    }
}
</script>

<style scoped>
.rating{
    height: auto;
}
.list {
    margin-bottom: 40px;
}
</style>

