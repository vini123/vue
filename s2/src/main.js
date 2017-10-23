require('./style/common.less')

import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css'

import Header from './page/common/Header.vue'
import Footer from './page/common/footer.vue'
import Carousel from './page/home/Carousel.vue'
// import Likes from './page/Likes.vue'

Vue.use(iView);

new Vue({
	el: '#header',
	render: h=>h(Header)
})

new Vue({
	el: '#footer',
	render: h=>h(Footer)
})

new Vue({
	el: '#carousel',
	render: h=>h(Carousel)
})

// new Vue({
// 	el: '#likes',
// 	render: h=>h(Likes)
// })