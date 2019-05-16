<template>
    <div class="mobile-menu" >
        <div class="nav-trigger js-trigger" @click="addClassBody">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</div>
		<div class="slideout js-slideout">
			<div class="inner">
				<ul class="button-group">
					<li class="button js-toggle-registration"><i class="fa fa-edit"></i>Đăng ký</li>
					<li class="button js-toggle-login"><i class="fa fa-user"></i>Đăng nhập</li>
				</ul> <!-- button group -->
				<nav class="slideout-navbar">
					<ul class="nav">
						<li class="nav-item">
							<a href="" class="nav-link">Trang chủ</a>
						</li>
						<li class="nav-item" v-for="(item, index) in data" :key="index" :class="[item.children.length ? 'dropdown' : '', isActiveMenu == index ? 'dropdown-active' : '']" @click.prevent="activeMenu(index)">
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
				</nav>
				<div class="contact">
					<div class="phone"> Email: <span>anhsangsoiduong2017@gmail.com</span></div>
					<div class="email"> Phone: <span>04 62 63 1777</span></div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    name: 'MobileMenu',
    data() {
        return {
            isActive: false,
			data: menu,
			isActiveMenu: 'a'
        }
    },
    methods: {
        addClassBody() {
            this.isActive = !this.isActive;
            let el = document.body;
            if(this.isActive){
                el.classList.add('active-slideout');
            } else {
                el.classList.remove('active-slideout');
            }
		},
		activeMenu(index) {
			if(this.isActiveMenu == index ) {
				this.isActiveMenu = 'a';
			} else {
				this.isActiveMenu = index;
			}
			
		}
    }
}
</script>

<style lang="scss" scoped>

</style>

