<template>
	<div class="wrapper">
        <nav v-scroll-class:scroll=1>
			<router-link class="logo" to='/' v-bind:class="{logoL: lightLogo}">Drovee</router-link>
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
		return {
			links: [ 
				{ 
					id: 0,
					text: 'Home', 
					page: '/' 
				},
//				{ 
//					id: 1,
//					text: 'Team', 
//					page: '/team' 
//				},
				{
					id: 2,
					text: 'Web-design',
					page: '/webdesign'
				}
			],
		}
	},

	props: ['lightLogo'],
	directives: {
		'scroll-class': VueScrollClass,
	},
}
</script>

<style lang="scss">
@import '../css/navbar.scss';
@import '../css/config';
</style>



