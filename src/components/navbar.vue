<template>
	<div class="wrapper">
        <nav v-scroll-class:scroll=1>
            <div class="logo">Drovee</div>
            <ul>
                <li class="nav-item" v-for="link in links" v-bind:key="link.page">
					<router-link class="nav-link" :to=link.page>{{link.text}}</router-link>
				</li>
            </ul>
        </nav>
    </div>
</template>

<script>
import VueScrollClass from 'vue-scroll-class';

export default {
    name: 'navbar',
	data() { 
		scrollPosition: null;
		scrollBoolean: null;
		return {
			links: [ 
				{ 
					id: 0,
					text: 'Home', 
					page: '/home' 
				},
				{ 
					id: 1,
					text: 'Team', 
					page: '/team' 
				}
			] 
		}
	},

	methods: {
	},

	mounted() {
	},

	directives: {
		'scroll-class': VueScrollClass,
	},
}
</script>

<style lang="scss">
@import '../css/navbar.scss';
@import '../css/config';
</style>



