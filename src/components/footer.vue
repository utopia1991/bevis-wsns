<template>
	<div id="footer">
		<a id="sub-footer" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.bangma.wsns" target="_blank">
			<img src="/static/images/index/fixed-qr.png" />
		</a>
		<span class="backTop" @click='backTop'>
			<img src="/static/images/top.png" />
		</span>
		<div class="thr-footer">
			<div class="thr-footer-top">
				<ul>
					<li>
						<img src="/static/images/icon-time2.png" />
						每天10点更新
					</li>
					<li>
						<img src="/static/images/icon-girl.png" />
						我是女生
					</li>
					<li>
						<img src="/static/images/icon-like.png" />
						好货买不停
					</li>
				</ul>
			</div>
			<div class="thr-footer-bottom">
				<ul>
					<li><a href="">关于我们</a></li>&nbsp;&nbsp;|&nbsp;&nbsp;
					<li><a href="">联系我们</a></li>&nbsp;&nbsp;|&nbsp;&nbsp;
					<li><a href="">意见反馈</a></li>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<li>友情链接 : </li>&nbsp;&nbsp;
					<li><a href="http://www.amagbuy.com/" target="_blank">阿猫阿狗</a></li>&nbsp;&nbsp;|&nbsp;&nbsp;
					<li><a href="http://chihoooo.com/" target="_blank">吃货</a></li>
				</ul>
				<p>厦门尚马信息科技有限公司 闽ICP备14004842号-44</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			backTop() {
				$('body,html').animate({ scrollTop: 0 }, 400);
			}
		}
	}
</script>
