<template>
	<nav id="insight-header" >
		<div id="header-body" class="header-body fixWidth">
			<router-link to="/" class="header-logo router-link-active" title="">
				<img src="/static/images/logo.png" alt="logo" />
			</router-link>
			<div class="rightInput">
				<input id="searchInput" placeholder="搜天猫/淘宝宝贝">
				<button id="search" @click="search">搜索</button>
			</div>
			<ul class="rightIcon">
				<li>
					<img src="/static/images/icon-time.png" alt="" /> 每天十点更新
				</li>
				<li class="app-qr" @mouseover="mouseOver" @mouseleave="mouseleave">
					<img src="/static/images/icon-phone.png" alt="" /> APP下载
					<img src="/static/images/qr.png" class="qr none"/>
				</li>
				<a class="mobile-app-qr" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.bangma.wsns" target="_blank">
					<img src="/static/images/icon-phone.png" alt="" /> APP下载
				</a>
				<li>
					<img src="/static/images/icon-wechat.png" alt="" /> 关注公众号
				</li>
			</ul>
		</div>
		<div class="sub-header">
			<ul class="fixWidth">
				<router-link to="/" class="active">首页</router-link>
				<router-link to="/classify/38" id="38">背心</router-link>
				<router-link to="/classify/15" id="15">T恤</router-link>
				<router-link to="/classify/16" id="16">连衣裙</router-link>
				<router-link to="/classify/17" id="17">衬衫</router-link>
				<router-link to="/classify/37" id="37">打底裤</router-link>
				<router-link to="/classify/18" id="18">针织衫</router-link>
				<router-link to="/classify/19" id="19">牛仔裤</router-link>
				<router-link to="/classify/20" id="20">半身裙</router-link>
				<router-link to="/classify/21" id="21">休闲裤</router-link>
				<router-link to="/classify/22" id="22">卫衣</router-link>
				<router-link to="/classify/23" id="23">外套</router-link>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		mounted() {
			var id = this.$route.params.id;
			$('#'+id).addClass('active').siblings().removeClass('active');
		},
		methods: {
			search() {
				var text = $('#searchInput').val();
				var url = 'https://ai.taobao.com/search/index.htm?key=' + text + '&pid=mm_54988395_23866520_79878241';
				if (text != "") {
					window.open(url);
				}
			},
			mouseOver() {
				$(".qr").removeClass("none");
			},
			mouseleave() {
				$(".qr").addClass("none");
			}
		},
		watch: {
			'$route' (to, from) {
				var id = this.$route.params.id;
				console.log($('#'+id).siblings());
				$('#'+id).addClass('active').siblings().removeClass('active');
			}
		}
	}
</script>
