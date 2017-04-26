<template>
	<div id="wrapper">
		<div id="banner">
			<swiper :options="swiperOption" class="contain-body fixWidth">
				<swiper-slide v-for="banner in banners">
					<a :href="banner.pcLink" target="_blank">
						<img :src="banner.pcImage" :alt="banner.remark" />
					</a>
				</swiper-slide>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
		</div>
		<div class="container-fluid">
			<div class="contain-body margin-top-30">
				<div class="pannel">
					<router-link to="/classify/10" class="classify-items">
						<img src="/static/images/index/shoes.png" />
						<span>女鞋</span>
					</router-link>
					<router-link to="/classify/11" class="classify-items">
						<img src="/static/images/index/bag.png" />
						<span>包包</span>
					</router-link>
					<router-link to="/classify/12" class="classify-items">
						<img src="/static/images/index/makeup.png" />
						<span>美妆</span>
					</router-link>
					<router-link to="/classify/13" class="classify-items">
						<img src="/static/images/index/accessories.png" />
						<span>配饰</span>
					</router-link>
					<router-link to="/classify/14" class="classify-items">
						<img src="/static/images/index/underware.png" />
						<span>内衣</span>
					</router-link>
				</div>
			</div>
			<div class="contain-body margin-top-30">
				<p class="match-styles">
					<span>穿衣搭配</span>
				</p>
				<div id="slides">
					<div class="pannel">
						<router-link to="/classify/33" class="match-items">
							<img src="/static/images/index/match-1.png" />
						</router-link>
						<router-link to="/classify/28" class="match-items">
							<img src="/static/images/index/match-2.png" />
						</router-link>
						<router-link to="/classify/29" class="match-items">
							<img src="/static/images/index/match-3.png" />
						</router-link>
						<router-link to="/classify/25" class="match-items">
							<img src="/static/images/index/match-4.png" />
						</router-link>
						<router-link to="/classify/36" class="match-items">
							<img src="/static/images/index/match-5.png" />
						</router-link>
						<router-link to="/classify/30" class="match-items">
							<img src="/static/images/index/match-6.png" />
						</router-link>
					</div>
					<div class="pannel">
						<router-link to="/classify/32" class="match-items">
							<img src="/static/images/index/match-7.png" />
						</router-link>
						<router-link to="/classify/34" class="match-items">
							<img src="/static/images/index/match-8.png" />
						</router-link>
						<router-link to="/classify/35" class="match-items">
							<img src="/static/images/index/match-9.png" />
						</router-link>
						<router-link to="/classify/31" class="match-items">
							<img src="/static/images/index/match-10.png" />
						</router-link>
						<router-link to="/classify/26" class="match-items">
							<img src="/static/images/index/match-11.png" />
						</router-link>
						<router-link to="/classify/24" class="match-items">
							<img src="/static/images/index/match-12.png" />
						</router-link>
					</div>
					<div class="pannel">
						<router-link to="/classify/27" class="match-items">
							<img src="/static/images/index/match-13.png" />
						</router-link>
						<router-link to="/classify/39" class="match-items">
							<img src="/static/images/index/match-14.png" />
						</router-link>
					</div>
				</div>
			</div>
			<div class="contain-body">
				<p class="match-styles">
					<span>背心</span>
					<router-link class="more-link" to="/classify/38">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="wareAnchor">
					<div class="pannel">
						<div target="_blank" class="contain-items">
							<img src="/static/images/index/ware.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">背心</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{warecount}}件背心</p>
							<router-link class="contain-items-link" to="/classify/38">
								查看全部 >
							</router-link>
						</div>
						<a v-for="waregood in waregoods" class="contain-items" :href="waregood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="waregood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{waregood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{waregood.price}}</span>
									<span class="goodIcon">
										{{waregood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{waregood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>T恤</span>
					<router-link class="more-link" to="/classify/15">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="tAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/t.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">T恤</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{tcount}}件T恤</p>
							<router-link class="contain-items-link" to="/classify/15">
								查看全部 >
							</router-link>
						</div>
						<a v-for="tgood in tgoods" class="contain-items" :href="tgood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="tgood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{tgood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{tgood.price}}</span>
									<span class="goodIcon">
										{{tgood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{tgood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>连衣裙</span>
					<router-link class="more-link" to="/classify/16">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="dressAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/dress.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">连衣裙</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{dresscount}}件连衣裙</p>
							<router-link class="contain-items-link" to="/classify/16">
								查看全部 >
							</router-link>
						</div>
						<a v-for="dressgood in dressgoods" class="contain-items" :href="dressgood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="dressgood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{dressgood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{dressgood.price}}</span>
									<span class="goodIcon">
										{{dressgood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{dressgood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>衬衫</span>
					<router-link class="more-link" to="/classify/17">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="shirtAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/shirt.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">衬衫</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{shirtcount}}件衬衫</p>
							<router-link class="contain-items-link" to="/classify/17">
								查看全部 >
							</router-link>
						</div>
						<a v-for="shirtgood in shirtgoods" class="contain-items" :href="shirtgood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="shirtgood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{shirtgood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{shirtgood.price}}</span>
									<span class="goodIcon">
										{{shirtgood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{shirtgood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>打底裤</span>
					<router-link class="more-link" to="/classify/37">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="innerpathAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/innerpath.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">打底裤</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{innerpathcount}}件打底裤</p>
							<router-link class="contain-items-link" to="/classify/37">
								查看全部 >
							</router-link>
						</div>
						<a v-for="innerpathgood in innerpathgoods" class="contain-items" :href="innerpathgood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="innerpathgood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{innerpathgood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{innerpathgood.price}}</span>
									<span class="goodIcon">
										{{innerpathgood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{innerpathgood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>针织衫</span>
					<router-link class="more-link" to="/classify/18">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="knitwearAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/knitwear.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">针织衫</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{knitwearcount}}件针织衫</p>
							<router-link class="contain-items-link" to="/classify/18">
								查看全部 >
							</router-link>
						</div>
						<a v-for="knitweargood in knitweargoods" class="contain-items" :href="knitweargood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="knitweargood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{knitweargood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{knitweargood.price}}</span>
									<span class="goodIcon">
										{{knitweargood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{knitweargood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>牛仔裤</span>
					<router-link class="more-link" to="/classify/19">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="jeansAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/jeans.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">牛仔裤</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{jeanscount}}件牛仔裤</p>
							<router-link class="contain-items-link" to="/classify/19">
								查看全部 >
							</router-link>
						</div>
						<a v-for="jeansgood in jeansgoods" class="contain-items" :href="jeansgood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="jeansgood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{jeansgood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{jeansgood.price}}</span>
									<span class="goodIcon">
										{{jeansgood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{jeansgood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>半身裙</span>
					<router-link class="more-link" to="/classify/20">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="skirtAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/skirt.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">半身裙</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{skirtcount}}件半身裙</p>
							<router-link class="contain-items-link" to="/classify/20">
								查看全部 >
							</router-link>
						</div>
						<a v-for="skirtgood in skirtgoods" class="contain-items" :href="skirtgood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="skirtgood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{skirtgood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{skirtgood.price}}</span>
									<span class="goodIcon">
										{{skirtgood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{skirtgood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>休闲裤</span>
					<router-link class="more-link" to="/classify/21">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="pathAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/path.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">休闲裤</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{pathcount}}件休闲裤</p>
							<router-link class="contain-items-link" to="/classify/21">
								查看全部 >
							</router-link>
						</div>
						<a v-for="pathgood in pathgoods" class="contain-items" :href="pathgood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="pathgood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{pathgood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{pathgood.price}}</span>
									<span class="goodIcon">
										{{pathgood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{pathgood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>卫衣</span>
					<router-link class="more-link" to="/classify/22">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="fleeceAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/fleece.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">卫衣</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{fleececount}}件卫衣</p>
							<router-link class="contain-items-link" to="/classify/22">
								查看全部 >
							</router-link>
						</div>
						<a v-for="fleecegood in fleecegoods" class="contain-items" :href="fleecegood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="fleecegood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{fleecegood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{fleecegood.price}}</span>
									<span class="goodIcon">
										{{fleecegood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{fleecegood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<p class="match-styles">
					<span>外套</span>
					<router-link class="more-link" to="/classify/23">
						MORE +
					</router-link>
				</p>
				<div class="contain-body" id="coatAnchor">
					<div class="pannel">
						<div target="_blank" href="" class="contain-items">
							<img src="/static/images/index/coat.png" class="contain-items-img" />
							<p class="contain-items-p contain-items-title">外套</p>
							<p class="contain-items-p contain-items-underline">____</p>
							<p class="contain-items-p contain-items-discription">过去24小时内我们为您精心挑选了{{coatcount}}件外套</p>
							<router-link class="contain-items-link" to="/classify/23">
								查看全部 >
							</router-link>
						</div>
						<a v-for="coatgood in coatgoods" class="contain-items" :href="coatgood.pcLinkurl" target="_blank">
							<div class="contain-good">
								<img :src="coatgood.pcImage">
							</div>
							<div class="contain-info">
								<div class="goodName">{{coatgood.title}}</div>
								<div class="goodMoney">
									<span>¥</span>
									<span>{{coatgood.price}}</span>
									<span class="goodIcon">
										{{coatgood.fromPlace}}
									</span>
									<span class="goodSale">
										月销 : <span id="saleCount">{{coatgood.nums}}</span>
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import slidesjs from '../../static/js/libs/jquery.slides.min.js'
	Vue.use(VueAwesomeSwiper)

	export default {
		data () {
			return {
				tcount: '',
				dresscount: '',
				coatcount: '',
				jeanscount: '',
				shirtcount: '',
				skirtcount: '',
				pathcount: '',
				warecount: '',
				innerpathcount: '',
				fleececount: '',
				knitwearcount: '',
				banners: [],
				tgoods: [],
				dressgoods: [],
				coatgoods: [],
				jeansgoods: [],
				shirtgoods: [],
				skirtgoods: [],
				pathgoods: [],
				waregoods: [],
				innerpathgoods: [],
				fleecegoods: [],
				knitweargoods: [],
				swiperOption: {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					autoplay: 3000,
					slidesPerView: 1,
					paginationClickable: true,
					spaceBetween: 30,
					loop: true
				}
			}
		},
		created: function () {
			this.fetchData();
		},
		mounted() {
			// 穿衣搭配轮播
			$("#slides").slidesjs({
				height: 290,
				pagination: {
					active: false
				}
			});
		},
		components: {
			swiper,
			swiperSlide
		},
		methods: {
			fetchData: function () {
				var self = this;
				var apiURL = 'http://houmen.wsns66.com/wsns/mobile/goods!queryGoodsList.do?catId=';
				var id = self.$route.params.id;

				// banner
				$.get('http://houmen.wsns66.com/wsns/mobile/active!getCarrousels.do?isBanner=1', function(data) {
					self.banners = data.result.activeList;
				});
				// 背心
				$.get(apiURL+'38', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.waregoods = goods;
					self.warecount = data.result.total;
				});
				// T恤
				$.get(apiURL+'15', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.tgoods = goods;
					self.tcount = data.result.total;
				});
				// 连衣裙
				$.get(apiURL+'16', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.dressgoods = goods;
					self.dresscount = data.result.total;
				});
				// 牛仔裤
				$.get(apiURL+'19', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.jeansgoods = goods;
					self.jeanscount = data.result.total;
				});
				// 衬衫
				$.get(apiURL+'17', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.shirtgoods = goods;
					self.shirtcount = data.result.total;
				});
				// 半身裙
				$.get(apiURL+'20', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.skirtgoods = goods;
					self.skirtcount = data.result.total;
				});
				// 休闲裤
				$.get(apiURL+'21', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.pathgoods = goods;
					self.pathcount = data.result.total;
				});
				// 打底裤
				$.get(apiURL+'37', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.innerpathgoods = goods;
					self.innerpathcount = data.result.total;
				});
				// 针织衫
				$.get(apiURL+'18', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.knitweargoods = goods;
					self.knitwearcount = data.result.total;
				});
				// 卫衣
				$.get(apiURL+'22', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.fleecegoods = goods;
					self.fleececount = data.result.total;
				});
				// 外套
				$.get(apiURL+'23', function(data) {
					var goods = data.result.goodsList.slice(0,7);
					_.map(goods, function(good){
						good.pcLinkurl = '/go.html?url=' + good.pcLinkurl
					});
					self.coatgoods = goods;
					self.coatcount = data.result.total;
				});
			}
		}
	}
</script>
