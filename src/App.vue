<template>
    <div class="app">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
        <mobile-menu></mobile-menu>
    </div>
</template>

<script>
import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';
import MobileMenu from './components/box/MobileMenu.vue';
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    MobileMenu
  }
}
</script>

<style lang="css">
@import './assets/src/css/main.min.css';
</style>
