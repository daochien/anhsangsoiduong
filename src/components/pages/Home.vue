<template>
    <div class="main">
        <hero-countdown></hero-countdown>
        <div class="container container-main">
            <div class="row">
                <organization></organization>
                <time-line></time-line>
                <notify></notify>
                <div class="col-lg-4">
                    <top-register></top-register>
                </div>
                <div class="col-lg-4">
                    <top-exam></top-exam>
                </div>
                <div class="col-lg-4">
                    <top-week></top-week>
                </div>
                
                <hot-news></hot-news>
                <event></event>
                <collection></collection>
                <about></about>
                <new-member></new-member>
                <social></social>
            </div>
        </div>
    </div>    
</template>
<script>
import HeroCountdown from '../../components/box/HeroCountdown.vue';
import Organization from '../../components/box/Organization.vue';
import TimeLine from '../../components/box/TimeLine.vue';
import Notify from '../../components/box/Notify.vue';
import TopRegister from '../../components/box/TopRegister.vue';
import TopExam from '../../components/box/TopExam.vue';
import TopWeek from '../../components/box/TopWeek.vue';
import HotNews from '../../components/box/HotNews.vue';
import Event from '../../components/box/Event.vue';
import Collection from '../../components/box/Collection.vue';
import About from '../../components/box/About.vue';
import NewMember from '../../components/box/NewMember.vue';
import Social from '../../components/box/Social.vue';

export default {
    name: 'Home',
    components: {
        HeroCountdown,
        Organization,
        TimeLine,
        Notify,
        TopRegister,
        TopExam,
        TopWeek,
        HotNews,
        Event,
        Collection,
        About,
        NewMember,
        Social
    }
}
</script>


