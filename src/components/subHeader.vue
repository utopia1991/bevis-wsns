<template>
	<div class="sub-header-affix none">
		<div class="header-affix-inner">
			<img src="/static/images/icon.png" class="affix-logo" />
			<ul>
				<li class="" @click="goAnchor"><a href="/">首页</a></li>
				<li class="wareAnchor" @click="goAnchor">背心</li>
				<li class="tAnchor" @click="goAnchor">T恤</li>
				<li class="dressAnchor" @click="goAnchor">连衣裙</li>
				<li class="shirtAnchor" @click="goAnchor">衬衫</li>
				<li class="innerpathAnchor" @click="goAnchor">打底裤</li>
				<li class="knitwearAnchor" @click="goAnchor">针织衫</li>
				<li class="jeansAnchor" @click="goAnchor">牛仔裤</li>
				<li class="skirtAnchor" @click="goAnchor">半身裙</li>
				<li class="pathAnchor" @click="goAnchor">休闲裤</li>
				<li class="fleeceAnchor" @click="goAnchor">卫衣</li>
				<li class="coatAnchor" @click="goAnchor">外套</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			goAnchor(e) {
				var target = e.currentTarget.className;
				$("html,body").animate({scrollTop:$("#" + target).offset().top - 50}, 300);
			}
		}
	}
</script>
