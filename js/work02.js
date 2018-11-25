
//start
Vue.component('goods', {
				template: "<div class='goods clear'><div class='recommmend left'><div class='images'><img v-bind:src='image' /></div><div class='title'><h4 v-text='name'></h4></div><div class='price'>￥<span v-text='price'></span>.00</div></div><div class='recommmend right'><div class='images'><img v-bind:src='image1' /></div><div class='title'><h4 v-text='name1'></h4></div><div class='price'>￥<span v-text='price1'></span>.00</div></div></div>",
				data: function() {
					return {};
				},
				props: ['image', 'name', 'price','image1', 'name1', 'price1'],
				methods: {}
			});
			var app = new Vue({
				el: '#app',
				data: {
					goods: [{
						image: 'img/bsk02.jpg',
						name: '贝思客 一见倾心 蛋糕 心形INS风水果奶油求婚创意生日 蛋糕  经典款',
						price: 199,
						image1: 'img/quechao01.jpg',
						name1: '雀巢(Nestle) 丝滑拿铁口味 即饮雀巢咖啡饮料 268ml*3瓶 3联包',
						price1: 14,
					}, {
						image: 'img/MicrosoftSurfaceBook.webp',
						name: '03-OPPO Find X手机【6期免息】双曲面全景屏 8G运存+128G/256G内存双卡双待全网通 波尔多红（标准版）8GB+128GB',
						price: 12999,
						image1: 'img/DELL01.jpg',
						name1: '戴尔DELL全新XPS13.3英寸超轻薄窄边框4K触控屏笔记本电脑白色硅纤维(i7-8550U 16G 512G UHD 指纹识别)金',
						price1: 15999,
					}, {
						image: 'img/iphoneX.webp',
						name: 'Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机',
						price: 8999,
						image1: 'img/phone.jpg',
						name1: 'OPPO Find X手机【6期免息】双曲面全景屏 8G运存+128G/256G内存双卡双待全网通 波尔多红（标准版）8GB+128GB',
						price1: 6999,
					}, ]
				},
				methods: {},
				computed: {},
				watch: {}
			});
			//底部切换
			$(function() {
				$('.weui-tabbar__item').on('click', function() {
					$(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
				});
			});