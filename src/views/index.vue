<template>
	<div class="main">
		<top></top>
		<subHeader></subHeader>
		<wrapper></wrapper>
		<siderBar></siderBar>
		<bottom></bottom>
	</div>
</template>

<script>
	import top from '../components/header'
	import subHeader from '../components/subHeader'
	import wrapper from '../components/wrapper'
	import siderBar from '../components/siderBar'
	import bottom from '../components/footer'

	export default {
		name: 'app',
		components: {
			top,
			subHeader,
			wrapper,
			siderBar,
			bottom
		}
	}
</script>
