<template>
	<div id="wrapper">
		<p class="c-title">
			{{title}}
			<span class="c-discription">过去24小时内 我们为您精心挑选了{{count}}件{{title}}</span>
		</p>
		<div class="container-fluid">
			<div class="contain-body margin-top-30">
				<div class="pannel">
					<a v-for="good in goods" class="contain-items-classify" :href="good.pcLinkurl" target="_blank">
						<span class="c-icon">{{good.fromPlace}}</span>
						<div class="c-contain-good">
							<img :src="good.pcImage">
						</div>
						<div class="c-contain-info">
							<div class="c-goodName">{{good.title}}</div>
							<div class="c-goodMoney">{{good.price}}元</div>
							<div class="c-goodSale">
								月销 : <span id="saleCount">{{good.nums}}</span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'

	export default {
		data () {
			return {
				title: '',
				count: '',
				goods: []
			}
		},
		created: function () {
			this.fetchData();
		},
		methods: {
			fetchData: function () {
				var id = this.$route.params.id;
				var self = this;
				var apiURL = 'http://houmen.wsns66.com/wsns/mobile/goods!queryGoodsList.do?catId=' + id + '&pageBean.currentPage=1&pageBean.perPageSize=300';
				var titleName = {
					'38':'背心',
					'15':'T恤',
					'23':'外套',
					'19':'牛仔裤',
					'17':'衬衫',
					'16':'连衣裙',
					'20':'半身裙',
					'21':'休闲裤',
					'37':'打底裤',
					'22':'卫衣',
					'18':'针织衫',
					'10':'女鞋',
					'11':'包包',
					'12':'美妆',
					'13':'配饰',
					'14':'内衣',
					'36':'大码气场',
					'35':'心机露肉',
					'34':'透视尤怜',
					'33':'爱牛仔裤',
					'32':'上班穿着',
					'31':'性感到底',
					'30':'气质衬衫',
					'29':'缤纷裙子',
					'28':'包治百病',
					'27':'T恤潮搭',
					'26':'拯救粗腿',
					'25':'穿对鞋子',
					'24':'专属风格',
					'39':'休闲套装'
				}
				this.title = titleName[id];

				$.get(apiURL, function(data) {
					var oGoods = data.result.goodsList;
					_.map(oGoods, function(oGood){
						oGood.pcLinkurl = '/go.html?url=' + oGood.pcLinkurl;
					});
					self.goods = oGoods;
					self.count = data.result.total;
				});
			}
		},
		watch: {
			'$route' (to, from) {
				this.fetchData();
			}
		}
	}
</script>
